import trafilatura
import re
from bs4 import BeautifulSoup

def get_full_html_content(url: str) -> str:
    """Get the full HTML content"""
    downloaded = trafilatura.fetch_url(url)
    return downloaded if downloaded else ""

def extract_netlify_form(html_content: str) -> dict:
    """Extract Netlify form details from HTML"""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Find form elements
    forms = soup.find_all('form')
    form_data = {}
    
    for form in forms:
        # Check if it's a Netlify form
        if form.get('data-netlify') or 'netlify' in str(form).lower():
            form_data = {
                'action': form.get('action', ''),
                'method': form.get('method', 'POST'),
                'netlify': form.get('data-netlify'),
                'netlify_honeypot': form.get('data-netlify-honeypot'),
                'form_name': form.get('name', ''),
                'html': str(form)
            }
            
            # Extract form fields
            inputs = form.find_all(['input', 'textarea', 'select'])
            fields = []
            for input_elem in inputs:
                field_data = {
                    'type': input_elem.get('type', input_elem.name),
                    'name': input_elem.get('name', ''),
                    'id': input_elem.get('id', ''),
                    'placeholder': input_elem.get('placeholder', ''),
                    'required': input_elem.get('required') is not None,
                    'html': str(input_elem)
                }
                fields.append(field_data)
            
            form_data['fields'] = fields
            break
    
    return form_data

# Check contact page and other potential pages
pages_to_check = [
    "https://marcusprater.com/",
    "https://marcusprater.com/contact.html",
    "https://marcusprater.com/contact"
]

for url in pages_to_check:
    print(f"\n{'='*60}")
    print(f"Checking: {url}")
    print(f"{'='*60}")
    
    html_content = get_full_html_content(url)
    if html_content:
        print(f"HTML Content Length: {len(html_content)} characters")
        
        # Look for forms
        if '<form' in html_content.lower():
            print("✓ Found form(s) on this page")
            form_data = extract_netlify_form(html_content)
            
            if form_data:
                print("\n=== NETLIFY FORM FOUND ===")
                print(f"Action: {form_data.get('action')}")
                print(f"Method: {form_data.get('method')}")
                print(f"Netlify: {form_data.get('netlify')}")
                print(f"Form Name: {form_data.get('form_name')}")
                print(f"Honeypot: {form_data.get('netlify_honeypot')}")
                
                print("\n=== FORM FIELDS ===")
                for field in form_data.get('fields', []):
                    print(f"- {field['type']}: {field['name']} (Required: {field['required']})")
                
                print("\n=== FULL FORM HTML ===")
                print(form_data.get('html', ''))
            else:
                print("No Netlify-specific form found")
        else:
            print("No forms found on this page")
        
        # Look for captcha
        if 'recaptcha' in html_content.lower() or 'captcha' in html_content.lower():
            print("✓ Found CAPTCHA references")
            captcha_matches = re.findall(r'(recaptcha|captcha)[^"\']*', html_content.lower())
            for match in captcha_matches[:5]:  # Show first 5 matches
                print(f"  - {match}")
    else:
        print("Failed to retrieve content")

print(f"\n{'='*60}")
print("Scraping complete")
print(f"{'='*60}")