*** Settings ***
Library  SeleniumLibrary
Library  String
Resource  resources.robot

*** Keywords ***
Price1
    Input Text  ${SearchBox}  ${EMPTY}
    Input Text  ${SearchBox}  ${SortKeyword}
    Click Element  ${SearchBtn}
    Wait Until Page Contains Element  ${FirstSearchRes}
    Click Element  ${FilterField}
    Press Keys  ${FilterField}  DOWN  ENTER
    Wait Until Page Contains Element  ${FirstSearchRes}
    ${Price1}  Get Text  ${PriceWrapper1}
    ${Price1}  Remove String  ${Price1}  R  p  .
    ${Price1}  Convert To Number  ${Price1}
    Should Be True  ${Price1} <= 100000  

Price2
    Input Text  ${SearchBox}  ${EMPTY}
    Input Text  ${SearchBox}  ${SortKeyword}
    Click Element  ${SearchBtn}
    Wait Until Page Contains Element  ${FirstSearchRes}
    Click Element  ${FilterField}
    Press Keys  ${FilterField}  DOWN  DOWN  ENTER
    Wait Until Page Contains Element  ${FirstSearchRes}
    ${Price1}  Get Text  ${PriceWrapper1}
    ${Price1}  Remove String  ${Price1}  R  p  .
    ${Price1}  Convert To Number  ${Price1}
    Should Be True  ${Price1} >= 100000  
    Should Be True  ${Price1} <= 149999

Price3
    Input Text  ${SearchBox}  ${EMPTY}
    Input Text  ${SearchBox}  ${SortKeyword}
    Click Element  ${SearchBtn}
    Wait Until Page Contains Element  ${FirstSearchRes}
    Click Element  ${FilterField}
    Press Keys  ${FilterField}  DOWN  DOWN  DOWN  ENTER
    Wait Until Page Contains Element  ${FirstSearchRes}
    ${Price1}  Get Text  ${PriceWrapper1}
    ${Price1}  Remove String  ${Price1}  R  p  .
    ${Price1}  Convert To Number  ${Price1}
    Should Be True  ${Price1} >= 150000  
    Should Be True  ${Price1} <= 200000

Price4
    Input Text  ${SearchBox}  ${EMPTY}
    Input Text  ${SearchBox}  ${SortKeyword}
    Click Element  ${SearchBtn}
    Wait Until Page Contains Element  ${FirstSearchRes}
    Click Element  ${FilterField}
    Press Keys  ${FilterField}  DOWN  DOWN  DOWN  ENTER
    Wait Until Page Contains Element  ${FirstSearchRes}
    ${Price1}  Get Text  ${PriceWrapper1}
    ${Price1}  Remove String  ${Price1}  R  p  .
    ${Price1}  Convert To Number  ${Price1}
    Should Be True  ${Price1} < 200000