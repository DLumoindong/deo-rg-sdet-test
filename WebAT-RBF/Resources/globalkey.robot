*** Settings ***
Library  SeleniumLibrary
Library  OperatingSystem

*** Keywords ***
Setup chromedriver
  Set Environment Variable  webdriver.chrome.driver  ${EXECDIR}/chromedriver.exe 

Begin Web Test
    Open Browser  about:blank  chrome
    Maximize Browser Window

End Web Test
    Close Browser