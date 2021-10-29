*** Settings ***
Documentation  Search Feature Web Tests
Resource  ../Resources/Actions.robot
Resource  ../Resources/globalkey.robot
Test Setup  globalkey.Begin Web Test
Test Teardown  globalkey.End Web Test

# Copy/paste the line below into Terminal to execute:
# python -m robot -d results tests/amazon.robot

*** Variables ***


*** Test Cases ***
Check search features
    [Tags]  Smoke
    Actions.Homepage
    Actions.Searchbar

Check sort features
    [Tags]  Smoke
    Actions.Homepage
    Actions.Sort

Check filter features
    [Tags]  Smoke
    Actions.Homepage
    Actions.Filter


