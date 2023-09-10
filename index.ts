// Typescript is a "Type Saftey" version of javascript and is mainly used to idemtofy error before the runtime 
// JS does not provide static checking but TS does provide it 
// The only job of TS is to analyze the code as we type it .
// DEVELOPMENT PROCESS
// TypeScript code is transpiled to JavaScript Code 


// INTRO

// const  user= {name:"shubham", age:19}
// console.log("shubham bhatt", user.name);

// situations where TS is helpful

// ex- a function accepting 2 numbers :- don't need to explicity test

// ex- a function returning a string 

// declaring a variable 

// let  first:string ="hellow world !!";

// console.log(first);

// the variable "first" that has a string type can't be assigned any other value in TS 
// Where as in JS you can easily do it ,also 'first' variable will have access to only string functions  

// Important INTERVIEW question
// number is for numbers like 42. 
// JavaScript does not have a special runtime value for integers,
// so there’s no equivalent to int or float - everything is simply number

// number 
// let userId:number =33445  //we also don't need to specify the  type there TS can auto assign the type there too, it is called as type inference


// boolean

// let isLoggedIn:boolean= false 


// What is any and why it should not be extensively used ?

// let berserk ;

// function getBerserk(){
//     return "guts"
// }

// berserk= getBerserk()    //here the variable berserk is reffered to as any which can be harmful in further complex coding 
// here the function can return anything and varibale will have that value 
// this is the part where TS can't use Type reference 


// now lets again take above example with type specified on the varible itself 


// let berserk2: string ;
// berserk2= getBerserk() // This time the variable will only recieve a string value 
// we can try to change the return value and it will give error 

// USECASE of any 
// The any type is useful when you don’t want to write out a long type
// just to convince TypeScript that a particular line of code is okay.


// Functions in TS 

// function addTwo(num:number){    //we need to define the type of 
//     return num+2
// }


 // Objects in TS
// function print(data:{a:string,b:number}){
//     console.log(data.a,data.b)
// }

 // Now the above function has a object parameter which has a string and a number and can only be called such 

// const obj={
//     a:"shubham",
//     b:35
// }
// print(obj)

// // Now in some case the value inside the object can be optional

// function print2(data:{a:string,b?:number}){
//     console.log(data.a,data.b)
// }
// // This means that data.b is optional to have and can be ignored lets see what happens

// const obj1={
//     a:"shubham",
    
// }
// print2(obj)        //shubham 35 
// print2(obj1)        //shubham undefined

// now that's something to remember 


// Union Type 

// function printId(id: number | string) {  //this is where id can be number or string 
//     console.log("Your ID is: " + id);
//   }
//   // OK
//   printId(101);
//   // OK
//   printId("202");
  // Error
//   printId({ myID: 22342 });     //not possible due to the obj neither number or string 


// also we can't use the predefined functions of either type.

// TypeScript will only allow an operation if it is valid for every member of the union.
//  For example, if you have the union string | number, you can’t use methods that are only available on string:

// function printId(id: number | string) {
//     // console.log(id.toUpperCase());  // ERROR=>Property 'toUpperCase' does not exist on type 'string | number'.
// }


// Now the solution is a little big, but it opens the mind of the programmer to tackle with such situations in future .

// some Useful example :-

// function printId(id: number | string) {
//     if (typeof id === "string") {
//       // In this branch, id is of type 'string'
//       console.log(id.toUpperCase());
//     } else {
//       // Here, id is of type 'number'
//       console.log(id);
//     }
//   }



// Type aliases 


// if we want to use the same type over and over again we can use them as much as we want 
// once we declare them as a type, as the matter of fact they can be exported and imported anywhere in the project .


type Point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });





