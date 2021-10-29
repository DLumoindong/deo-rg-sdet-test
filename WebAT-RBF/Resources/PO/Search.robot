*** Settings ***
Library  SeleniumLibrary
Library  String
Resource  resources.robot

*** Keywords ***
StandardAlphabet
    Wait Until Page Contains Element  xpath=${FirstRecommendation}
    ${StandardKeyword}  Get Text  ${FirstRecommendation}
    Click Element  ${SearchBox}
    Input Text  ${SearchBox}  ${StandardKeyword}
    Click Element  ${SearchBtn}
    Wait Until Page Contains Element  ${FirstSearchRes}
    ${SearchResult}  Get Text  ${FirstSearchRes}
    Should Be Equal As Strings  ${StandardKeyword}  ${SearchResult} 

StandardNumeric
    Click Element  ${SearchBox}
    Input Text  ${SearchBox}  ${EMPTY}
    Input Text  ${SearchBox}  ${NumericKeyword}
    Click Element  ${SearchBtn}
    Wait Until Page Contains Element  ${FirstSearchRes}
    ${SearchResult}  Get Text  ${FirstSearchRes}
    Should Contain  ${SearchResult}  ${NumericKeyword} 

StandardSpecialCase
    Click Element  ${SearchBox}
    Input Text  ${SearchBox}  ${EMPTY}
    Input Text  ${SearchBox}  ${SpecialKeyword}
    Click Element  ${SearchBtn}
    Wait Until Page Contains Element  ${FirstSearchRes}
    ${SearchResult}  Get Text  ${FirstSearchRes}
    Should Contain  ${SearchResult}  ${SpecialKeyword} 

NoResult
    Click Element  ${SearchBox}
    Input Text  ${SearchBox}  ${EMPTY}
    Input Text  ${SearchBox}  ${NoResultKeyword}
    Click Element  ${SearchBtn}
    Wait Until Page Contains Element  ${NoResultWarning}
    ${NoResultKWDisplay}  Get Text  ${NoResultWrapper}
    Should Contain  ${NoResultKWDisplay}  ${NoResultKeywordF}