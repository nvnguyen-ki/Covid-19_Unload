import  webbrowser, requests, bs4, selenium
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver import Chrome
def getEbayprice(productURL):
    res = requests.get(productURL)
    res.raise_for_status()
    soup = bs4.BeautifulSoup(res.text, 'html.parser')
    # copy html path
    elems = soup.select('#prcIsum')
    price = elems[0].text
    return price

print(getEbayprice('https://www.ebay.com/itm/Billie-Eilish-x-Takashi-Murakami-Uniqlo-NEW-Size-L-LIMITED-IN-HAND/133427904040?_trkparms=aid%3D777001%26algo%3DDISCO.FEED%26ao%3D1%26asc%3D225074%26meid%3Da27a34a2a2d247d0822722e4e4c35a3a%26pid%3D101002%26rk%3D1%26rkt%3D1%26mehot%3Dnone%26itm%3D133427904040%26pmt%3D0%26noa%3D1%26pg%3D2380057%26algv%3DPersonalizedTopicsForGuests%26brand%3DUniqlo&_trksid=p2380057.c101002.m4497&_trkparms=pageci%3A90dc4b16-a81f-11ea-8a4c-52fb6c93a2ee%7Cparentrq%3A8aca46331720a4b68cb4caebffeb5c5f%7Ciid%3A3'))

# using Selenium examples

driver = webdriver.Chrome("./chromedriver.exe")
driver.get("https://www.ebay.com/")

SearchElem = driver.find_element_by_css_selector("#gh-ac")
SearchElem.send_keys("keyboards")
SearchElem.submit()
# assert "No results found." not in driver.page_source




#res = requests.get('https://www.nguyensqrd.com/')
#print(res.status_code)
#print(len(res.text))
#print(res.text[:500])

# getting the price of a book from html of website
#res = requests.get('https://www.ebay.com/p/201642099')
#res.raise_for_status()
#soup = bs4.BeautifulSoup(res.text, 'html.parser')
# copy html path
#elems = soup.select('#tab-panel-0-w3 > div > span.item-price > h2')

