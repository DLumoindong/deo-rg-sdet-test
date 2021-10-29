*** Settings ***
Library  SeleniumLibrary

*** Keywords ***
Open
    Go To  https://skillacademy.com/

Check Page Loaded
    Wait Until Page Contains Element  xpath=//*[@id="main-scrollview"]/div/div[2]/div[1]/div/img
    Sleep  1s
