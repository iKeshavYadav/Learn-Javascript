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

/*
//Methods in JS 

//you can call methods or function

let laptop= {
  cpu:'i9',
  ram:'8',
  brand:'HP',
  
  greet:function(){
    console.log('hello aliens!');
  }
};

laptop.greet() //func greet belongs to laptop obj
*/

//'this' keyword in js
/*
let laptop2= {
  cpu:'i7',
  ram:'8',
  brand:'HP',
  
  getConfig:function(){
    console.log(laptop2.cpu);
  }
};

let laptop1= {
  cpu:'i9',
  ram:'8',
  brand:'HP',
  
  getConfig:function(){
    console.log(this.cpu); //this keyword represent the current obj
    //based on which method or obj this will refer to that particular obj
  }
};

laptop1.getConfig()
laptop2.getConfig()
*/

//why 'this' keyword 

/*
// function for comparing two laptops
function getFastLaptop(laptop1, laptop2){
    if(laptop1.cpu > laptop2.cpu){
        console.log(laptop1);
    }
    else{
        console.log(laptop2);
    }
}

// Object 1
let laptop1 = {
    cpu:9,     //object property
    ram:16,
    brand:'HP',
} 

// Object 2
let laptop2 = {
    cpu:7,     //object property
    ram:16,
    brand:'Apple',
}

getFastLaptop(laptop1,laptop2)

*/

/*
// function which will compare itself from other laptop

// Object 1
let laptop1 = {
    cpu:9,     //object property
    ram:16,
    brand:'HP',

    //object method - Function comparing its cpu to other laptop
    compare:function(other){
        if(this.cpu > other.cpu){
            console.log(this);
        }
        else{
            console.log(other);
        }
    },
} 

// Object 2
let laptop2 = {
    cpu:9,     //object property
    ram:16,
    brand:'Apple',

    //object method - Function comparing its cpu to other laptop
    compare:function(other){
        if(this.cpu > other.cpu){
            console.log(this);
        }
        else{
            console.log(other);
        }
    },
}

laptop1.compare(laptop2)
*/

/*
//constructor function in JS

//craeting constructor function which would have same property for multiple obj
//recommended to use 1st letter capital of constructor func to differentiate from normal func
function Alien(name, tech){
    this.name = name;
    this.tech = tech;
};

//object 1 | passing its value 
let alien1 = new Alien("Keshav", "JS"); //'new' keyword create new obj everytime
// console.log(alien1);

//object 2
let alien2 = new Alien("Aradhna","English");
alien1.tech = 'Blockchain'; //will reflect only in obj 2 
console.log(alien2);

*/

/*
// adding method in constructor func which will shared by the every obj commonly

//constructor function 
function Alien(name, tech){
    this.name = name;
    this.tech = tech;

    //constructor method, property will be shared by the every obj commolny
    this.work = function(){
        console.log("solving bugs from 12hrs")
    }
}

//object 1
let alien1 = new Alien("keshav", "javascipt");
console.log(alien1);
alien1.work()

//object 2
let alien2 = new Alien("Aradhna", "English");
console.log(alien2);
alien2.work()
*/
//Creating an Array and fetching elements in JS 

//array -> When you have multiple values, you don't wanted to assign them in key value pair - Use array their

/*
//two ways to create array

// creating array 1 way -> Array Literal
let values = new Array();
console.log(values, typeof values);

//creating array 2nd way -> Array Constructor
let values = [];
console.log(values, typeof values);
*/

// let values = [5, 8, 7];
// console.log(values.length); //length of the array 
// values.push(9, 10); //will add the value in end
// names[0]= 4 //adding values using index value
// console.log(values[1]); //fetch value using index value 

/*
//Different types of data in array 

//array can hold different types of data types (e.g. num, str, obj, func, etc)

let data = ["Keshav", "Satyam", "Shashank", 5, 1.2,{tech:"JS"}, function(){
    console.log("Hello world!")
}]

console.log(data)

// data[6](); //calling function inside the array 
*/
/*
//Array methods in JS -> https://javascript.info/array-methods

let data = [5,7,8,9,3];

// data.push(2) //will add value in end
// data.pop(); //will remove the last recent added value from end
// data.shift() //will remove value from & changes index value
// data.unshift(4) //will add value in start & changes index value
// data.splice(2); //will remove all values starting from index value 2
// data.splice(2,1);  //will remove 1 value from index 2
// data.splice(2,1, 11, 12) //will remove 1 value from index 2 & add 11, 12 on its place 

console.log(data);
*/
/*
//For-of loop with an Array in JS

let nums = [];

nums[0] = 5;
nums[99] = 9

//for-of loop fetch the 'value assigned' to the property
for(let n of nums){
    console.log(n)
}


//for-in loop fetch the 'key' of property (in this case index value)
// for(let key in nums){
//     console.log(key);
// }


//with array it make sense to use for-of loop when you have to work with value not the key of it
*/

/*
//Array Destructuring in JS

// let nums = [5,7,2,4];
// console.log(nums)

//above array will get destructured & assigned respectively 
//let [a,b,c,d] = nums;

// let [a,b,,d] = nums; //we can skip the var but put comma in order to maintain it's arrangement :)
//console.log(d);

//swaping two var 

// let a = 5;
// let b = 6;

// [a,b] = [b,a]

// console.log(a,b)


//Array of string

//.split(' ') -> will convert str in array format 
let words = "My name is Keshav Yadav".split(' ') //[ 'My', 'name', 'is', 'Keshav', 'Yadav' ]
//console.log(words);

//destructuring an array 
//let [a,b,c,d,e] = words;
//console.log(a,b); //My name

let [a,b,c,...d] = words; //after the three dot all the element will be stored in a single var (d)
console.log(d);
*/

/*
//Array forEach methods in JS  | Array methods

let nums = [42,51,24,98,65,12];

//forEach is a method which give one-by-one value 
nums.forEach((n)=>{
    console.log(n);
});

// console.log(nums);


//also -> forEach takes 3 parameters (e.g. one value at a time, index value, and array)
// nums.forEach((n,i, nums)=>{
//     console.log(n,i,nums);
// });
*/

/*
//filter, map, reduce | Array methods 

let nums = [42,51,24,98,65,12];    

//filter -> will filter based on condition
// nums.filter(n => n%2===0)
//     .forEach(n => {
//         console.log(n);
//     });

//map -> creates a new array from calling a function for every array element
// let map1 = nums.map(n => n*2);
// console.log(map1); 

//reduce -> takes two parameter, a = accumulated, b = current element of an array
// let reduce1 = nums.reduce((a,b) => a+b)
// console.log(reduce1)
*/
/*
//Set in JS

//Set is collection of -> unique value | Unorder list | No index value 

// let nums = new Set("bookkeeper");
// console.log(nums); //Set(6) { 'b', 'o', 'k', 'e', 'p', 'r' }


let nums = new Set();

nums.add(3);
nums.add(4);
nums.add(3);
nums.add("Keshav");
nums.add("Shashank");
nums.add("Kushal");

//console.log(nums); //Set(5) { 3, 4, 'Keshav', 'Shashank', 'Kushal' }


// nums.forEach(value => {
//     console.log(value); //print one-by-one value
// });


console.log(nums.has(3)); //true
console.log(nums.has("Keshav")) //true
console.log(nums.has("keshav")); //false - bcz of case-sensative
*/
/*
//map in JS 

//map will have -> key and value pair 


let map = new Map();

map.set("Keshav", "Java");
map.set("Shashank", "Android");
map.set("Kushal", "ML");
map.set("Keshav", "JS") //new value will get replaced for the key as it uses map. 

// console.log(map.keys()); //[Map Iterator] { 'Keshav', 'Shashank', 'Kushal' }
// console.log(map.has("Keshav")); //true

//get value of key
// console.log(map.get("Keshav")); //JS

//print all value 
// for(let [k,v] of map){
//     console.log(k," : ", v);
// }



map.forEach((v,k) =>{
    console.log(k, " : ", v)
} )
*/

/*
//What is Recursion?
//A function calling itself

// function show(){
//     console.log("Hi");
//     show(); //RangeError: Maximum call stack size exceeded -> Calling function itself
// }

// show(); //calling function

//will print till -> 11299 times
let num = 1;
function show(){
    console.log("Hi ", num);
    num++
    show();
}

show();
*/
