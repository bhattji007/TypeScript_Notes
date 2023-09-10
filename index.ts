// Typescript is a "Type Saftey" version of javascript and is mainly used to idemtofy error before the runtime 
// JS does not provide static checking but TS does provide it 
// The only job of TS is to analyze the code as we type it .
// DEVELOPMENT PROCESS
// TypeScript code is transpiled to JavaScript Code 


// INTRO

const  user= {name:"shubham", age:19}
console.log("shubham bhatt", user.name);

// situations where TS is helpful

// ex- a function accepting 2 numbers :- don't need to explicity test

// ex- a function returning a string 

// declaring a variable 

let  first:string ="hellow world !!";

console.log(first);

// the variable "first" that has a string type can't be assigned any other value in TS 
// Where as in JS you can easily do it ,also 'first' variable will have access to only string functions  

// Important INTERVIEW question
// number is for numbers like 42. 
// JavaScript does not have a special runtime value for integers,
// so there’s no equivalent to int or float - everything is simply number

// number 
let userId:number =33445  //we also don't need to specify the  type there TS can auto assign the type there too, it is called as type inference


// boolean

let isLoggedIn:boolean= false 


// What is any and why it should not be extensively used ?

let berserk ;

function getBerserk(){
    return "guts"
}

berserk= getBerserk()    //here the variable berserk is reffered to as any which can be harmful in further complex coding 
// here the function can return anything and varibale will have that value 
// this is the part where TS can't use Type reference 


// now lets again take above example with type specified on the varible itself 


let berserk2: string ;
berserk2= getBerserk() // This time the variable will only recieve a string value 
// we can try to change the return value and it will give error 

// USECASE of any 
// The any type is useful when you don’t want to write out a long type
// just to convince TypeScript that a particular line of code is okay.


// Functions in TS 

function addTwo(num:number){    //we need to define the type of 
    return num+2
}