import trafilatura
import re
import json
from urllib.parse import urljoin, urlparse

def get_website_text_content(url: str) -> str:
    """
    This function takes a url and returns the main text content of the website.
    The text content is extracted using trafilatura and easier to understand.
    """
    # Send a request to the website
    downloaded = trafilatura.fetch_url(url)
    text = trafilatura.extract(downloaded)
    return text

def get_full_html_content(url: str) -> str:
    """
    Get the full HTML content to find image URLs
    """
    downloaded = trafilatura.fetch_url(url)
    return downloaded if downloaded else ""

def extract_project_images(html_content: str, base_url: str) -> dict:
    """
    Extract project images from the HTML content
    """
    # Find all img tags with src attributes
    img_pattern = r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>'
    img_matches = re.findall(img_pattern, html_content, re.IGNORECASE)
    
    # Convert relative URLs to absolute URLs
    images = []
    for img_src in img_matches:
        if img_src.startswith('http'):
            images.append(img_src)
        else:
            absolute_url = urljoin(base_url, img_src)
            images.append(absolute_url)
    
    return {
        "total_images": len(images),
        "image_urls": images
    }

# Try different pages on Marcus Prater's portfolio website
pages_to_check = [
    "https://marcusprater.com/",
    "https://marcusprater.com/work.html",
    "https://marcusprater.com/work",
    "https://marcusprater.com/projects.html",
    "https://marcusprater.com/projects"
]

all_images = {}

for portfolio_url in pages_to_check:
    print(f"\n{'='*50}")
    print(f"Scraping: {portfolio_url}")
    print(f"{'='*50}")
    
    # Get text content
    text_content = get_website_text_content(portfolio_url)
    if text_content:
        print("\n=== Text Content ===")
        print(text_content[:500] + "..." if len(text_content) > 500 else text_content)
    
    # Get HTML content to find images
    html_content = get_full_html_content(portfolio_url)
    print(f"\n=== HTML Content Length: {len(html_content) if html_content else 0} characters ===")
    
    if html_content:
        # Extract images
        image_data = extract_project_images(html_content, portfolio_url)
        print(f"\n=== Found {image_data['total_images']} images ===")
        
        # Filter for project-related images (skip logo, icons, etc.)
        project_images = []
        for img_url in image_data['image_urls']:
            # Look for project-related keywords in the image path
            if any(keyword in img_url.lower() for keyword in ['project', 'work', 'portfolio', 'streamx', 'solegrid', 'omega', 'suit']):
                project_images.append(img_url)
            elif 'img/' in img_url and 'logo' not in img_url.lower() and 'icon' not in img_url.lower():
                project_images.append(img_url)
        
        print(f"=== Project Images ({len(project_images)}) ===")
        for i, img_url in enumerate(project_images, 1):
            print(f"{i}. {img_url}")
        
        all_images[portfolio_url] = {
            "all_images": image_data['image_urls'],
            "project_images": project_images,
            "text_content": text_content[:1000] if text_content else ""
        }
    else:
        print("Failed to retrieve HTML content")

# Save all collected data
with open('portfolio_images.json', 'w') as f:
    json.dump(all_images, f, indent=2)

print(f"\n{'='*50}")
print("=== All image data saved to portfolio_images.json ===")
print(f"{'='*50}")