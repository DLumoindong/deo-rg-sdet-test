*** Settings ***
Resource  ../Resources/PO/Homepage.robot
Resource  ../Resources/PO/Search.robot
Resource  ../Resources/PO/Sort.robot
Resource  ../Resources/PO/Filter.robot

*** Keywords ***
Homepage
    Homepage.Open
    Homepage.Check Page Loaded

Searchbar
    Search.StandardAlphabet
    Search.StandardNumeric
    Search.StandardSpecialCase
    Search.NoResult

Sort
    Sort.Rating
    Sort.ReviewNum
    #Sort.Latest  This sorting method returns inconsistent response
    Sort.PriceAsc
    Sort.PriceDesc

Filter
    Filter.Price1
    Filter.Price2
    Filter.Price3
    Filter.Price4




