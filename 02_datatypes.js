"use strict"; // treat all js code as newer version

//alert(3+3) // we are using node.js not browser(use mdn for doumentation)

let name = "prince";
let age = 21;
let isloggedin = false;
let value = null;
let state;

const id=Symbol('123');
const anotherid=Symbol('123');

console.log(id==anotherid);//false

// data_types_in_js
//1.premitive data type(7 types)
// number => 2 to power of 53
// bigint =>
// string =>""
// boolean => true/false
// null => standalone value
// undefined => value is not assigned yet
// symbol => unique

//2.reference (Non primitive)
// array,objects,functions.

//array
const heros=["shaktiman","naagraj","doga"];
//objects
let myobj= {
  name:"prince",
  age:21,  
}
//function
const myfun=function(){
  console.log("hello world");
}

//object
console.log(typeof ("prince"));
console.log(typeof (null));
console.log(typeof (undefined));
