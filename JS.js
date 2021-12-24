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

//string
/*
let user= 'keshav yadav'
console.log(user)

let firstName= 'keshav'
let lastName= 'yadav'
let user1= firstName + ' ' + lastName //comma in between for space
console.log(user1)

let user3= "keshav yadav \"laptop\"" //escape character, ends specl meaning of quotes
let user4= 'ke\tshav \nyadav' // '\t' for tab, '\n' for new line
console.log(user4)
*/

//boolean -> either TRUE OR FALSE
/*
let num= 5 < 6 //true
console.log(num)

// null

let user= null //var value is null
console.log(user)
console.log(typeof user) //object

//undefined

let user1  //var value not defined
console.log(user1)


console.log(5 / 'keshav') //NaN -> not a number
console.log(typeof (5 / 'keshav')) //number
//NaN is not number but it's type is Number
*/

//type conversion and coercion

//explicit conversion, converting data from one format to another
/*
let num= String(6) //convert number in string data type
let num1= Number("123")
console.log(num1, typeof num1)
*/

//coercion type

/* based on what type of operator you are using, 
based on what's requirment JS engine changed for you */
/*
let x
console.log(x, typeof x) //undefined undefined

x= 8
console.log(x, typeof x) // 8 Number

x= x + ""
console.log(x, typeof x) // 8 string

x= x - 2
console.log(x, typeof x) // 6 number
*/
/*
let x= 5
x= !x
console.log(x, typeof x) //false boolean

console.log(Boolean(7)) //true -> truthy value
console.log(Boolean(0)) //false -> falsy value
console.log(Boolean(null)) //false -> falsy value
console.log(Boolean(undefined)) //false -> falsy value
console.log(Boolean("keshav")) //true
//all the numbers are true except 0
*/

//trying to convert int in num format
/*
console.log("123 keshav") //123 keshav
console.log(Number("123 keshav")) //NaN
console.log(parseInt("123 keshav")) //123 -> it except str and try to convert into Number
console.log(parseInt("N123 keshav")) //NaN -> character in start will not work
*/

//Arithmetic operators
/*
let num1= 5
let num2= 2

let result= num1+num2 //addition
result= num1-num2 //subtraction
result= num1*num2 //multiplication
result= num1/num2 //division
result= num1%num2 // find reminder

console.log(result)
*/

/*
console.log(true + true) //2 -> bcz, in boolean true= 1, false=0

let num= 4

//num= num+2 //6
//num+=2 //6
//num++ //5 -> increment by 1, called post increment
//++num //5 -> increment by 1, called pre increment
num-- //3 -> decrement
console.log(num)
*/

/*
let num= 4
let x= num++ //post increment-> 1st it will fetch value then assign
console.log(x, num) // 4, 5
*/

/*
let num= 4
let x= ++num //pre increment -> 1st it will increment then assign value
console.log(x, num) //5, 5
*/

//finding cube of a Number
/*
let num=4
//let result= num*num*num //64
//let result= Math.pow(4,3) //64
let result= 4**3 //64
console.log(result)
*/

//relational operators
//-> compare diffrent values
// a < b -> a is less then b
// a > b -> a is greater then b
/*
console.log(5 > 4) //true
console.log(5 < 4) //false

let x= 5
let y= 5

console.log(x <= y) //true

console.log("Pen" > "Book") //true -> it compares each char from start
console.log("Pen" > "Pencil") //false
//ASCII value -> every char has unique value, i.e A=1, B=2
*/
/*
console.log("2" > 1) //true -> 1st will convert int to num
console.log("2" > 3) // false
console.log(3 == 3) //true -> (==)equality operator, (=) assigning operator
console.log("3" == 3) //true
console.log("3" === 3) // false
// (==) checks only data not type
// (===) checks both data and type, recom to use for equality comparision
*/

//logical operator
//chart -> https://images.app.goo.gl/men36LWTG4WPsQ8d9
// And (&), OR (|), Not (!)
//Mathmatical form -> JS form 
//dot (.) -> Ampersand (&)
//plus (+) -> pipe (|)
// tilde (~) -> exclamation (!)

/*
let x= 7, y=8, z=9

//let result= x < y && x < z // (&) represent bitwise operator to diffrentiate use (&&) for Ampersand
let result = x < y || x < z // true, OR operator

console.log(result)
*/
/*
let x=7, y=2, z=5
let result= x < y || x < z //false
let n= !result

console.log(result, n) //false true
*/

//conditional statement
/*
let num1= 3;
let num2= 4;

let result= num1 > num2;

if(result)
  console.log("num1 is greater");
else
  console.log("num2 is greater");

console.log("Bye...");
*/
/*
//by default every condition will have one statement
//all statement inside {} means it belongs to the same condition 
let num1= 6;
let num2= 4;

if(num1 > num2){
  console.log("num1 is greater");
}

else{
  console.log("num2 is greater");
  console.log("yeee...");
}
console.log("Bye...");
*/

/*
let num1= 10;
let num2= 9;
let num3= 7;

if(num1 > num2 && num1 > num3){
  console.log("num1 is greatest");
}

else if(num2 > num3){
  console.log("num2 is greatest");
}

else{
  console.log("num3 is greatest");
}
console.log("Bye...");
*/

//ternary operator -> ?:
/*
let num= 8
let result

if(num%2===0){
  result= "Even"
}

else{
  result= "Odd"
}

console.log(result)
*/
//or
/*
num= 7
let result

result= num%2===0 ? "Odd" : "Even"
//if the condition is true,it will execute 1st statement else 2nd
console.log(result);
*/

/*
//switch statement

// Mon - 7am
// Tue - Thurs - 4am
// Fri - 9am
// Sat - Sun - 8am

let day= "Monday";

switch(day){
  case "Monday":
    console.log("7am");
    break;
    
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("4am");
    break;
    
  case "Friday":
    console.log("9am");
    break;
    
  case "Saturday":
  case "Sunday":
    console.log("8am");
    break;
    
  default:
  console.log("Sleep...")
}

console.log("Good Morning!")
*/

/*
//template literal

let num1= 9;
let num2= 4;
let result= num1+num2;

//console.log("the addition of " + num1 + " and " + num2 + " is " + result);
console.log(`the addition of ${num1} and ${num2} is ${result}`); //backtick -> (``)
console.log(`My name is
Keshav Yadav`);
*/

//loops in JS
/*
//while loop
let i= 1 //initialize


while(i<=5) //condition
{
  console.log("Hlo",i)
  i++  //increment
  
  //i-- //decrement
  //i=i+1
}
*/

//Do while loop
/*
let i= 1;

do{
  console.log("Hlo", i)
  i++
}while(i<=5)


//while loop -> 1st check the condition, then execute block
// Do while loop -> 1st execute the block, then check condition 
*/

//for loop

/*
for(i=1;i<=5;i++){
  console.log("hlo")
}
*/
//or
/*
let i= 1
for(;i<=5;i++){
  console.log("hlo")
}
*/
//or
/*
let i= 1
for(;i<=5;){
  console.log("hlo")
  i++
}
*/

//nested for loop -> loop inside loop 
/*
for(let i=1;i<=5;i++){
  console.log("hi",i)
  
  for(let j=1;j<=5;j++)
    console.log("hello",j)
}
*/

//for vs while loop

/*
//for

for(let i=1;i<=100;i++){
  if(i%3===0)
    console.log(i);
};
*/

//while
/*
let num=123456;

console.log(num%10); //6
num= parseInt(num/10) //12345
console.log(num);

console.log(num%10); //5
num= parseInt(num/10) //1234
console.log(num);

console.log(num%10); //4
num= parseInt(num/10) //123
console.log(num);
*/
//or

/*
let num=123456;

while(num>0){
  console.log(num%10);
  num= parseInt(num/10)
  console.log(num);
}
*/
//result
/*
6
12345
5
1234
4
123
3
12
2
1
1
0
*/

//objects in js
/*
let alien= {}
console.log(typeof alien) //object
*/
/*
let alien= {
  name:'keshav',
  tech: 'JS',
  'work exp': 'four'
}
console.log(alien); //{ name: 'keshav', tech: 'JS' }
console.log(alien.name) //keshav
console.log(alien['name']) //keshav
console.log(alien['work exp'])
*/
/*
let input= 'name'
let alien= {
  name:'keshav'
}
console.log(alien.input) //undefind
console.log(alien[input]) //keshav
*/

//complex object, delete property

//complex obj -> obj inside obj
/*
let alien= {
  name: 'keshav',
  tech: 'JS',
  laptop: {
    cpu:'i7',
    ram: 4,
    brand:'ASUS',
  }
};
console.log(alien)
console.log(alien.name) //fetch value
console.log(alien.laptop)
console.log(alien.laptop.brand)
console.log(alien.name.length); //length of string
*/
/*
let alien= {
  name1: 'keshav',
  tech: 'JS',
  laptop1: {
    cpu:'i7',
    ram: 4,
    brand:'ASUS',
  }
}
//console.log(alien.laptop.brand.length) //error
//console.log(alien.name?.length); //undefined -> if not sure the property is avilable put '?' will not give error

delete alien.tech //delete value
console.log(alien)
*/

//for in loop 
/*
let alien= {
  name:'keahav',
  tech:'JS',
  laptop:{
    cpu:'i7',
    ram:4,
    brand:'ASUS',
  }
}

for(let key in alien){
  //console.log(key); //fetch only key one by one
  console.log(key, alien[key]); //fetch key along with value
}
*/

//functions in JS
/*
function greet() //defining function
{
  console.log('Hlo aliens!')
};

greet(); //calling a function
*/

//return function, Passing parameters


//return instead of print
/*
function greet(){
  return 'hlo aliens!'
}

let str= greet(); //str var will store call function
console.log(str);
*/

//passing parameters
/*
function greet(user) //accepting value
{
  return `hlo ${user}!`
};

let user= 'keshav'
let str= greet(user); //passing value by calling function
console.log(str);
*/

//function expression
/*
let add= function(num1, num2) //anonymous func or obj bcz it has no name
{
  return num1 + num2 //expression
};

let result= add(5,6);
console.log(result);
*/

//Local-Global variable and default value
/*
let user= 'keshav'; //global var and can be access inside or outside the func

function greet(u) //passing this var is also a local var
{
  let num=5; //local var and can be access only inside func not the outside
  console.log(num);
  return `hlo ${u}!`
};
//console.log(num); //can't access local var outside the func
let str= greet(user);
console.log(str);
*/

/*
//arguments and parameter
function add(num1,num2,num3=1) //parameters
//if you don't pass 3 argument 3rd parameter would be 1 by default 
//and when you pass 3 argument it replace the default value 
{
  console.log(num1,num2,num3);
  return num1+num2+num3;
};

let result= add(5,6,7); //arguments
console.log(result);
*/

//Arrow function
//arrow func reduces no of code and specify this code belongs to this func
//you don't need to put function keyword
/*
let greet= (user) => {
  console.log('hello ' + user);
  return 1;
};
console.log(greet('keshav'));
*/

/*
let add= (num1,num2) => num1+num2;
//don't need to put function keyword
//if the func has only one statement, no need to {} bracket or return keyword
let result= add(5,6);
console.log(result);
*/

