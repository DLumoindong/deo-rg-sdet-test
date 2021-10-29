*************************
**SOLUTION TO RUANGGURU TEST**
*************************
By: Christoforus Williem Deo Lumoindong
(dlumoindong@gmail.com)

There are 2 folders, there are two folders:
- AT-API - solution to number 2 (API Test)
- WebAT-RBF - solution to number 1 (UI Test)

to run the AT-API run this after installing dependencies
> cd [AT-API folder path]
> npm run test get_courses_list

to run the web UI run this after installing dependencies
> cd [WebAT-RBF folder path]
> python -m robot -d results tests/rgWebAT.robot

note that the AT-API is configured using Jest 26.6.3 and WebAT-RBF is configured using Robot Framework 4.0.2