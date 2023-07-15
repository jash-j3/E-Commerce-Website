from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException, StaleElementReferenceException
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import sys
from time import sleep, time
from random import randint
import urllib.request
import requests
from bs4 import BeautifulSoup as bs
import lxml

chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install()), options=chrome_options
)
driver.maximize_window()
driver.implicitly_wait(5)

driver.get('https://www.amazon.in/')
r = requests.get("https://www.amazon.in/")

while True:
    search_bar = driver.find_element(By.ID, 'twotabsearchtextbox')
    final = dict()
    category = '6499ef09260c8cc32ad09254'
    product = input('Please tell the  product you want? ')
    search_bar.send_keys(product)
    search_bar.send_keys(Keys.ENTER)


    final['name'] = product
    final['category'] = '6499ef09260c8cc32ad09254'
    sel = "/html/body/div[1]/div[2]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/div[2]/div[1]/h2/a/span"
    sel2 = "/html/body/div[1]/div[2]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/div/div/div/div[2]/div/div/div[1]/h2/a"
    sel3 = "/html/body/div[1]/div[2]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/div/div/div[3]/div[1]/h2/a/span"
    sel4 = "/html/body/div[1]/div[2]/div[1]/div[1]/div/span[1]/div[1]/div[4]/div/div/div/div/div/div/div/div[2]/div/div/div[1]/h2/a"
    sel5 = "/html/body/div[1]/div[2]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div[1]/h2/a/span"
    sel6 = "/html/body/div[1]/div[2]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/div/div[2]/div/div/div[1]/h2/a/span"
    sel7 = "/html/body/div[1]/div[2]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div[2]/h2/a"
    sel8 = "/html/body/div[1]/div[2]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/div/div/div/div[2]/div/div/div[1]/h2/a"
    curl = driver.current_url
    r = requests.get(curl)
    soup = bs(r.content, 'html.parser')
    image = driver.find_element(By.CLASS_NAME, 's-image')
    image_link = image.get_attribute('src')


    try:
        final['description'] = driver.find_element(By.XPATH, sel2).text
    except NoSuchElementException:
        try:
            final['description'] = driver.find_element(By.XPATH, sel).text
        except NoSuchElementException:
            try:
                final['description'] = driver.find_element(By.XPATH, sel3).text
            except NoSuchElementException:
                try:
                    final['description'] = driver.find_element(By.XPATH, sel4).text
                except NoSuchElementException:
                    try:
                        final['description'] = driver.find_element(By.XPATH, sel5).text
                    except NoSuchElementException:
                        try:
                            final['description'] = driver.find_element(By.XPATH, sel6).text
                        except NoSuchElementException:
                            try:
                                final['description'] = driver.find_element(By.XPATH, sel7).text
                            except NoSuchElementException:
                                final['description'] = driver.find_element(By.XPATH, sel8).text


    price = driver.find_element(By.CLASS_NAME, 'a-price-whole').text
    price = price.split(',')
    price = int(''.join(price))
    print(price)
    final['price'] = price
    final['countInStock'] = randint(0, 50)
    final['image'] = image_link
    stick1 = randint(0, randint(0, 10))
    stick2 = randint(stick1, stick1 + randint(5, 15))
    stick3 = randint(stick2, stick2 + randint(0, 15))
    stick4 = randint(stick3, stick3 + randint(5,20))

    final['Five'] = 100 - stick4
    final['Four'] = stick4 - stick3
    final['Three'] = stick3 - stick2
    final['Two'] = stick2 - stick1
    final['One'] = stick1

    final['rating'] = (5 * final['Five'] + 4 * final['Four'] + 3 * final['Three'] + 2 * final['Two'] + final[
        'One']) / 100
    final['numReviews'] = randint(50, 200)
    r = requests.post('http://localhost:3001/products/new', data=final)
    print(r.status_code)
    print(final)
    search_bar = driver.find_element(By.ID, 'twotabsearchtextbox')
    for i in range(30):
        search_bar.send_keys(Keys.BACKSPACE)
#
# /html/body/div[1]/div[2]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div[3]/div/a/span/span[2]/span[2]
# /html/body/div[1]/div[2]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div[3]/div[1]/a/span/span[2]/span[2]
# /html/body/div[1]/div[2]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div[3]/div/a/span[1]/span[2]/span[2]