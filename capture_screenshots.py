#!/usr/bin/env python3
"""
Screenshot capture script for portfolio project websites
"""

import time
import subprocess
import sys
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def setup_chrome_driver():
    """Setup Chrome driver with appropriate options"""
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    chrome_options.add_argument('--window-size=1920,1080')
    chrome_options.add_argument('--disable-gpu')
    chrome_options.add_argument('--disable-extensions')
    
    try:
        driver = webdriver.Chrome(options=chrome_options)
        return driver
    except Exception as e:
        print(f"Error setting up Chrome driver: {e}")
        return None

def capture_screenshot(url, filename, driver):
    """Capture screenshot of a website"""
    try:
        print(f"Capturing screenshot of {url}...")
        driver.get(url)
        
        # Wait for page to load
        time.sleep(3)
        
        # Take screenshot
        driver.save_screenshot(f"client/public/projects/{filename}")
        print(f"Screenshot saved as {filename}")
        return True
        
    except Exception as e:
        print(f"Error capturing screenshot of {url}: {e}")
        return False

def main():
    """Main function to capture all screenshots"""
    websites = [
        ("https://watchstreamx.netlify.app/", "streamx-screenshot.png"),
        ("https://solegrid.netlify.app/", "solegrid-screenshot.png"),
        ("https://omegasuit.netlify.app/", "omegasuit-screenshot.png"),
        ("https://marcusprater.com/", "portfolio-screenshot.png")
    ]
    
    # Install selenium if not available
    try:
        import selenium
    except ImportError:
        print("Installing selenium...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "selenium"])
    
    driver = setup_chrome_driver()
    if not driver:
        print("Failed to setup Chrome driver")
        return
    
    try:
        for url, filename in websites:
            capture_screenshot(url, filename, driver)
            time.sleep(2)  # Brief pause between captures
            
    finally:
        driver.quit()
        print("Screenshot capture completed!")

if __name__ == "__main__":
    main()