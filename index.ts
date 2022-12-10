import { WeekDays } from "./enum";
import { Person, Student } from "./my.interface";
//basic types definition
const num1: number = 10;
const num2: number = 5;
const num3: number = 7;
const isString: boolean = false;

//Arrays definition
const arrayOfNumbers: number[] = [20, 1, 3, 7];
const arrayOfString: string[] = ["abdul", "mary", "obinna"];

//tuple definition
const tuppleArray: [string, number, string] = ["obinna", 26, "7ft"];

//definition of union
const noOfChildren: string | number | boolean = "10 children";

//definition of
const unionAsArray: (number | string | boolean | boolean)[] = [
  10,
  "obinna",
  true,
];

const person: Person = { name: "John", age: 23, height: "16ft" };

const strudent: Student = { name: "John", age: 23, height: "16ft", level: 100 };

const showEnum = () => {
  console.log(WeekDays.MONDAY);
};

const checkNoOfChildren = () => {
  if (typeof noOfChildren == "string") {
    console.log("The user supplied string");
  } else if (typeof noOfChildren == "boolean") {
    console.log("The user do not have children");
  } else {
    console.log("They Supplied numbert");
  }
};

const sum = () => {
  console.log(num1 + num3);

  if (typeof num1 == "string") {
    console.log("Wrong variable type suipple");
    console.log(isString);
  } else {
    console.log("Wrong variable type is correct");
    console.log(!isString);
  }
};

// sum();
checkNoOfChildren();
showEnum();
