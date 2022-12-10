"use strict";
//basic types definition
var num1 = 10;
var num2 = 5;
var num3 = 7;
var isString = false;
//Arrays definition
var arrayOfNumbers = [20, 1, 3, 7];
var arrayOfString = ["abdul", "mary", "obinna"];
//tuple definition
var tuppleArray = ["obinna", 26, "7ft"];
//definition of union
var noOfChildren = "10 children";
var checkNoOfChildren = function () {
    if (typeof noOfChildren == "string") {
        console.log("The user supplied string");
    }
    else if (typeof noOfChildren == "boolean") {
        console.log("The user do not have children");
    }
    else {
        console.log("They Supplied numbert");
    }
};
var sum = function () {
    console.log(num1 + num3);
    if (typeof num1 == "string") {
        console.log("Wrong variable type suipple");
        console.log(isString);
    }
    else {
        console.log("Wrong variable type is correct");
        console.log(!isString);
    }
};
// sum();
checkNoOfChildren();
