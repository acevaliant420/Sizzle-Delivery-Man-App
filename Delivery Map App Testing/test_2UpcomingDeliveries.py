# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class Test2UpcomingDeliveries():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_2UpcomingDeliveries(self):
    self.driver.get("http://localhost:3000/")
    self.driver.set_window_size(1552, 832)
    self.driver.find_element(By.NAME, "name").click()
    self.driver.find_element(By.NAME, "name").send_keys("Gajendra.Patel")
    self.driver.find_element(By.NAME, "password").click()
    self.driver.find_element(By.NAME, "password").send_keys("test")
    self.driver.find_element(By.CSS_SELECTOR, ".sub").click()
    self.driver.find_element(By.CSS_SELECTOR, ".settings_account-inner:nth-child(4)").click()
    self.driver.find_element(By.ID, "markPickedUpBtn").click()
    self.driver.find_element(By.CSS_SELECTOR, ".container").click()
    self.driver.find_element(By.CSS_SELECTOR, ".container").click()
    element = self.driver.find_element(By.CSS_SELECTOR, ".container")
    actions = ActionChains(self.driver)
    actions.double_click(element).perform()
    self.driver.find_element(By.CSS_SELECTOR, ".container").click()
    self.driver.find_element(By.CSS_SELECTOR, ".container").click()
    self.driver.find_element(By.ID, "markCompletedBtn").click()
    self.driver.find_element(By.LINK_TEXT, "Back to Main Page").click()
    self.driver.find_element(By.CSS_SELECTOR, ".setting__right--side-inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".btn-danger-outline").click()
    self.driver.find_element(By.CSS_SELECTOR, "html").click()
  