//normal function & array function
// normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(5, 2);

const addArrow2 = (num1: number = 10, num2: number = 20): number => {
  return num1 + num2;
};

console.log(addArrow2());

const arrow2 = [1, 5, 8];
const newArray2 = arrow2.map((e: number): number => e * e);

console.log(arrow2.reduce((acc: number, curr: number): number => acc + curr));

const person2: {
  name: string;
  balance: number;
  addBalance(money: number): string;
  // if there is nothing to return, then u can use void
} = {
  name: "mexba",
  balance: 5,
  addBalance(money) {
    return `my new balance is ${this.balance + money}`;
  },
};
console.log(person2.addBalance(12));

// Functions and Default Parameters

// Create a TypeScript program that declares a function that takes two parameters, a string and a number. The function should log the string parameter repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3.

const repeatedFunction = (param1: string, param2: number = 3): void => {
  for (let index = 0; index < param2; index++) {
    console.log(param1);
  }
};

repeatedFunction("hi", 4);

// Problem 5:
// Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

const typeCheck = (param3: any) => {
  if (typeof param3 == "string") {
    console.log(param3);
  } else console.log("err!");
};
typeCheck("checked!");

// spread operator
const myFriends = ["hasan", "joey", "ross"];
const newFriend = ["monica", "rachel"];

myFriends.push(...newFriend);

// rest parameter

const greatFriend = (...friends: string[]): void => {
  console.log(`${friends.reverse()}\n`);
};

greatFriend("hi", "bye", "khy");

// Problem 2 🧨🧨
// Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18,

const people = [
  { name: "bob", age: 18 },
  { name: "jane", age: 15 },
  { name: "doe", age: 25 },
];

const ageCheck = (arr: any[]): object[] => {
  const newArr = arr.filter((e) => e.age >= 18);
  return newArr;
};

console.log(ageCheck(people));
console.log(ageCheck(people));
