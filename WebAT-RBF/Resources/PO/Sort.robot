*** Settings ***
Library  SeleniumLibrary
Library  String
Resource  resources.robot

*** Keywords ***
Rating
    Input Text  ${SearchBox}  ${EMPTY}
    Input Text  ${SearchBox}  ${SortKeyword}
    Click Element  ${SearchBtn}
    Wait Until Page Contains Element  ${FirstSearchRes}
    Click Element  ${DropDownField}
    Press Keys  ${DropDownField}  R  A  T  I  N  G  ENTER
    Wait Until Page Contains Element  ${FirstSearchRes}
    ${Rating1}  Get Text  ${RatingWrapper1}
    ${Rating1}  Convert To Number  ${Rating1}
    ${Rating2}  Get Text  ${RatingWrapper2}
    ${Rating2}  Convert To Number  ${Rating2}
    Should Be True  ${Rating1} >= ${Rating2}

ReviewNum
    Input Text  ${SearchBox}  ${EMPTY}
    Input Text  ${SearchBox}  ${SortKeyword}
    Click Element  ${SearchBtn}
    Wait Until Page Contains Element  ${FirstSearchRes}
    Click Element  ${DropDownField}
    Press Keys  ${DropDownField}  R  E  V  I  E  W  ENTER
    Wait Until Page Contains Element  ${FirstSearchRes}
    ${ReviewNum1}  Get Text  ${ReviewNumWrapper1}
    ${ReviewNum1}  Remove String  ${ReviewNum1}  (  rating)  >
    ${ReviewNum1}  Convert To Number  ${ReviewNum1}
    ${ReviewNum2}  Get Text  ${ReviewNumWrapper2}
    ${ReviewNum2}  Remove String  ${ReviewNum2}  (  rating)  >
    ${ReviewNum2}  Convert To Number  ${ReviewNum2}
    Should Be True  ${ReviewNum1} >= ${ReviewNum2}

#NOTE  Sort feature by 'Terbaru' returns inconsistent response

# Latest
#     Input Text  ${SearchBox}  ${EMPTY}
#     Input Text  ${SearchBox}  ${SortKeyword}
#     Click Element  ${SearchBtn}
#     Wait Until Page Contains Element  ${FirstSearchRes}
#     Click Element  ${DropDownField}
#     Press Keys  ${DropDownField}  T  E  R  B  A  R  U  ENTER
#     Wait Until Page Contains Element  ${FirstSearchRes}
#     Element Should Contain  ${FirstSearchResField}  BARU

PriceAsc
    Input Text  ${SearchBox}  ${EMPTY}
    Input Text  ${SearchBox}  ${SortKeyword}
    Click Element  ${SearchBtn}
    Wait Until Page Contains Element  ${FirstSearchRes}
    Click Element  ${DropDownField}
    Press Keys  ${DropDownField}  H  A  R  G  A  SPACE  T  E  R  E  ENTER
    Wait Until Page Contains Element  ${FirstSearchRes}
    ${Price1}  Get Text  ${PriceWrapper1}
    ${Price1}  Remove String  ${Price1}  R  p  .
    ${Price1}  Convert To Number  ${Price1}
    ${Price2}  Get Text  ${PriceWrapper2}
    ${Price2}  Remove String  ${Price2}  R  p  .
    ${Price2}  Convert To Number  ${Price2}
    Should Be True  ${Price1} <= ${Price2}

PriceDesc
    Input Text  ${SearchBox}  ${EMPTY}
    Input Text  ${SearchBox}  ${SortKeyword}
    Click Element  ${SearchBtn}
    Wait Until Page Contains Element  ${FirstSearchRes}
    Press Keys  ${DropDownField}  H  A  R  G  A  SPACE  T  E  R  T  ENTER
    Wait Until Page Contains Element  ${PriceWrapper1}
    ${Price1}  Get Text  ${PriceWrapper1}
    ${Price1}  Remove String  ${Price1}  R  p  .
    ${Price1}  Convert To Number  ${Price1}
    ${Price2}  Get Text  ${PriceWrapper2}
    ${Price2}  Remove String  ${Price2}  R  p  .
    ${Price2}  Convert To Number  ${Price2}
    Should Be True  ${Price1} >= ${Price2}