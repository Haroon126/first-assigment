// Question # 01

import { join } from "path";

console.log("Hello World!");

// Question # 02

let personName :string = "Eric"
console.log(`"Hello ${personName}, would you like to learn some Python today?”`);

// Question # 03

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());

let myName:string = "haroon memon"
 let capitalising:string[] =  myName.split(' ')
 let result =  capitalising.map(function(myName:string):string{
    return myName.charAt(0).toUpperCase()+myName.slice(1)
 } )
 
  let finalResult =  result.join(' ');
  console.log(finalResult);
  
// Question # 04

let famousQuote :string = (`Walt Disney once said, "The way to get started is to quit talking and begin doing".`)  
console.log(famousQuote)

// Question # 05

let quotes :string  = "The greatest glory in living lies not in never falling, but in rising every time we fall."
let famous_person :string  = "Nelson Mandela"
 let message :string = (`${famous_person} once said,${quotes}`) 
 console.log(message);

 // Question # 06

 let nameOfPerson :string = "\t Kamran Khan Tessori \n"
 console.log(nameOfPerson);
 console.log(nameOfPerson.trim()) 
 
// Question # 07 , // Question # 08

console.log(5+3);
console.log(11-3);
console.log(2*4);
console.log(16/2);

// Question # 09

let favouriteNumber : number = 7
console.log(`my favourite number is ${ favouriteNumber}`);

  // Question # 10

//   My name is haroon Memon and current date is 24 - 02 -2024 ,  this is use to comment code

// Question # 11 

const friendsNames :string []= ["Shan","haris","Waqas","Raheel"]
for (let friendsName of friendsNames){
    console.log(friendsName);   
}

// Question # 12

 for (let friendsName of friendsNames){
  console.log(`Hello! friendsName`);
  
 }

// Question # 13

const favouriteTransport :string [] = ["motorcycle","civic","bicycle"]
console.log(`i would like to own a Honda ${favouriteTransport[0]}`);
console.log(`i would like to buy brand new Honda ${favouriteTransport[1]}`);
console.log(`My younger brother has to get ${favouriteTransport[2]}`);


// Question # 14

const invite_person : string [] = ["shan","haris","Tahir"]
for (let invite of invite_person){
  console.log(`${invite} you are invited for dinner`);
  
}

// Question # 15

// Requirment A
console.log(`${invite_person[2]} can not make the dinner`);

// Requirment B
 
   invite_person[2] = "Raheel"
 
 
 for (let invite of invite_person){
  console.log(`${invite} you are invited for dinner`);
  
 }

// Question # 16

// Requirment A
for (let invite of invite_person){
  console.log(`${invite} I  have founde a bigger dinner table`);
  
 }

// Requirment B
invite_person.unshift("Wasey")
console.log(invite_person);

  invite_person.splice(2,0,"Haroon")
console.log( invite_person);

 invite_person.push("Raheem")
 
 console.log(invite_person );

 for (let invite of invite_person){
  console.log(`${invite} you are invited for the dinner`);
  
 }
 

// Question # 17

// Requirment A
for (let invite of invite_person){
  console.log(`${invite} i can invite only two peoples for the dinner`);
  
}

// Requirment B

 const removelast1 : string =  invite_person.pop() as string ;
 console.log(` sorry ${removelast1} i can't invite you for dinner`);
 
 console.log(invite_person);
 
 const removelast2 : string =  invite_person.pop() as string ;
 console.log(` sorry ${removelast2} i can't invite you for dinner`);
 
 console.log(invite_person);
 
 const removelast3 : string =  invite_person.pop() as string ;
 console.log(` sorry ${removelast3} i can't invite you for dinner`);

 console.log(invite_person);

 const removelast4 : string =  invite_person.pop() as string ;
 console.log(` sorry ${removelast4} i can't invite you for dinner`);

 console.log(invite_person);

// Requirment C

 for (let invite of invite_person){
  console.log(`${invite} i am still inviting you for dinner`);
  
}

console.log(invite_person);

// Requirment D

const removelast5: string =  invite_person.pop() as string ;
 console.log( `${removelast5} removed`);

 console.log(invite_person);

 const removelast6: string =  invite_person.pop() as string ;
 console.log( `${removelast6} removed`);

 console.log(invite_person);