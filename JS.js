//variables in JS
/*
let num = 4
console.log(num) //4
console.log(num + 3) //7

//let num = 9 //SyntaxError: Identifier 'num' has already
num = 9
console.log(num)
*/

//let num = 4 -> defining variable
//num = 9 -> changing the value of variable

//string in JS
/*
let username= 'keshav'
let username1= "keshav's laptop"
console.log(username) //keshav
*/

//data types

//costants

//-> value of const variable can not be changed

//-> finding area of a circle: Area= πr2
/*
let radius = 5
const pi = 3.14
let area


radius= 6 //-> change the value of previous define var
//pi= 3.15 //-> can't be change as it's constant, throw an error


area = pi * radius * radius
console.log(area)
*/


//data types (are mainly divided into two parts, primitive and object)

//primitive -> number, string, boolean, null, undefined, symbols
//object -> data types other then primitive called object data types
/*

let data= 8 // number
let name= 'keshav' // string

console.log(typeof data) //check type of data
*/


//number system 
//base 10 - decimal (0-9)
//base 2 - binary (0-1)
//base 8 - octal (0-7)
//base 16 - hexadecimal (0-9 & A-F)
/*
let num1= 0xf //hexadecimal -> 15


let num2= 1.5e12 //exponential -> 1.5*10*12
let num3= 100_00_000 // can use underscore to difrentiate numbers, comma not allowed in JS has spcl meaning
let num4= 5/0 // -> infinity
let num5 = -5/0 // -> -infinity
console.log(Number.MAX_VALUE) //has max value of 1.7976931348623157e+308 
console.log(Number.MAX_VALUE * 10) //infinity

let num6= 475337633655279864374374 //looses original number to -> 1.7976931348623157e+308
console.log(num6)
let num7= 475337633655279864374374n //putting 'n' keeps original num -> 475337633655279864374374n
console.log(num7)
console.log(num7 + 2n) //adding in BigInt
*/