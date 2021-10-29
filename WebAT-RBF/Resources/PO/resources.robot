***Settings***
Library  SeleniumLibrary

*** Variables ***
${FirstRecommendation}  //*[@id="main-scrollview"]/div/div[2]/div[3]/div[3]/div[1]/div/div/div[4]/div/div/a/div/div[2]/h3
${SearchBox}  //*[@id="root"]/div/div[1]/div/div/div[3]/div/div[1]/div/input
${SearchBtn}  //*[@id="root"]/div/div[1]/div/div/div[3]/div/div[2]/img
${FirstSearchRes}  //*[@id="main-scrollview"]/div/div[2]/div/div[1]/a/div/div/div[1]/div[2]/h2
${NumericKeyword}  12
${SpecialKeyword}  Office & Korespondensi
${NoResultKeyword}  asdkljkljf71236@@* 
${NoResultKeywordF}  "asdkljkljf71236@@*" 
${NoResultWrapper}  //*[@id="main-scrollview"]/div/div[1]/div/p/span[2]
${NoResultWarning}  //*[@id="main-scrollview"]/div/div[1]/div/p/span[1]
${RatingWrapper1}  //*[@id="main-scrollview"]/div/div[2]/div/div[1]/a/div/div/div[3]/p/span[1]
${RatingWrapper2}  //*[@id="main-scrollview"]/div/div[2]/div/div[2]/a/div/div/div[3]/p/span[1]
${ReviewNumWrapper1}  //*[@id="main-scrollview"]/div/div[2]/div/div[1]/a/div/div/div[3]/p/span[2]
${ReviewNumWrapper2}  //*[@id="main-scrollview"]/div/div[2]/div/div[2]/a/div/div/div[3]/p/span[2]
${NewBadge}  //*[@id="main-scrollview"]/div/div[2]/div/div[1]/a/div/div/div[1]/div[1]/div[1]/p
${FirstSearchResField}  xpath=//*[@id="main-scrollview"]/div/div[2]/div/div[1]

${DropDownField}  //*[@id="main-scrollview"]/div/div[1]/div/div/div[2]/div/div/div/div/div

${PriceWrapper1}  //*[@id="main-scrollview"]/div/div[2]/div/div[1]/a/div/div/div[3]/div[3]/div[2]/p
${PriceWrapper2}  //*[@id="main-scrollview"]/div/div[2]/div/div[2]/a/div/div/div[3]/div[3]/div[2]/p

#SPECIAL PRICE WRAPPER FOR NON-DISCOUNTED COURSES
${PriceWrapperSpec1}  //*[@id="main-scrollview"]/div/div[2]/div/div[1]/a/div/div/div[3]/div[2]/div[2]/p
${PriceWrapperSpec2}  //*[@id="main-scrollview"]/div/div[2]/div/div[2]/a/div/div/div[3]/div[2]/div[2]/p

${SortKeyword}  Bahasa

${FilterField}  //*[@id="main-scrollview"]/div/div[1]/div/div/div[1]/div/div/div[1]/div/div/div[1]