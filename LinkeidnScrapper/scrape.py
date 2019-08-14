# import web driver
from selenium import webdriver

# specifies the path to the chromedriver.exe
driver = webdriver.Chrome('/Users/username/bin/chromedriver')

# driver.get method() will navigate to a page given by the URL address
driver.get('https://www.linkedin.com')
