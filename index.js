"use strict";
// Question # 01
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World!");
// Question # 02
let personName = "Eric";
console.log(`"Hello ${personName}, would you like to learn some Python today?”`);
// Question # 03
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
let myName = "haroon memon";
let capitalising = myName.split(' ');
let result = capitalising.map(function (myName) {
    return myName.charAt(0).toUpperCase() + myName.slice(1);
});
let finalResult = result.join(' ');
console.log(finalResult);
// Question # 04
let famousQuote = (`Walt Disney once said, "The way to get started is to quit talking and begin doing".`);
console.log(famousQuote);
// Question # 05
let quotes = "The greatest glory in living lies not in never falling, but in rising every time we fall.";
let famous_person = "Nelson Mandela";
let message = (`${famous_person} once said,${quotes}`);
console.log(message);
// Question # 06
let nameOfPerson = "\t Kamran Khan Tessori \n";
console.log(nameOfPerson);
console.log(nameOfPerson.trim());
// Question # 07 , // Question # 08
console.log(5 + 3);
console.log(11 - 3);
console.log(2 * 4);
console.log(16 / 2);
// Question # 09
let favouriteNumber = 7;
console.log(`my favourite number is ${favouriteNumber}`);
// Question # 10
//   My name is haroon Memon and current date is 24 - 02 -2024 ,  this is use to comment code
// Question # 11 
const friendsNames = ["Shan", "haris", "Waqas", "Raheel"];
for (let friendsName of friendsNames) {
    console.log(friendsName);
}
// Question # 12
console.log(`Hello!${friendsNames[0]}`);
console.log(`Hello!${friendsNames[1]}`);
console.log(`Hello!${friendsNames[2]}`);
console.log(`Hello!${friendsNames[3]}`);
// Question # 13
const favouriteTransport = ["motorcycle", "civic", "bicycle"];
console.log(`i would like to own a Honda ${favouriteTransport[0]}`);
console.log(`i would like to buy brand new Honda ${favouriteTransport[1]}`);
console.log(`My younger brother has to get ${favouriteTransport[2]}`);
// Question # 14
const invite_person = ["shan", "haris", "Tahir"];
console.log(`${invite_person[0]} you are invited for the dinner`);
console.log(`${invite_person[1]} you are invited for the dinner`);
console.log(`${invite_person[2]} you are invited for the dinner`);
// Question # 15
// part A
console.log(`${invite_person[2]} can not make the dinner`);
// part B
let name = "Haroon";
