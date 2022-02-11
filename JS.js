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
let username= 'Keshav'
let username1= "keshav's laptop"
console.log(username) //Keshav
console.log(username[0]);//K
console.log(username.slice(2)); //shav
console.log(username.slice(2,5));//sha
console.log('Keshav'[0]); //K
console.log(typeof username); //string
console.log(username.indexOf('h')); //3
console.log(username.lastIndexOf('h'));//3
console.log(username.length);//6
console.log(username.toLowerCase()); //keshav
console.log(username.toUpperCase()); //KESHAV
console.log(username.includes('Kes')); //true
console.log(username.startsWith('Ke'));//true

//fix capitalization in name
const name = 'kEshAv';
const nameLower = name.toLowerCase();
const correctName = nameLower[0].toUpperCase() + nameLower.slice(1);
console.log(correctName);//Keshav

const fullName = '   Keshav Yadav   ';
const fName = fullName.trim(); //trim() method removes whitespace from both sides of a string
console.log(fName);

const rupay = '500 ₹'
const toDollar = rupay.replace('₹', '$'); //replace() method returns a new string with the value(s) replaced.
console.log(toDollar);

const str = 'a+very+nice+string'; //split() method splits a string into an array of substrings
console.log(str.split('+')); //['a', 'very', 'nice', 'string']
console.log('Keshav Yadav'.split(' ')); //'Keshav', 'Yadav']

const myName = ['Keshav', 'Yadav']
console.log(myName.join(' ')); //join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string

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

// Default values
const [p=1, q=1, r=1, s=1] = [6,7,8]
console.log(p, q, r, s);


//Array of string

//.split(' ') -> will convert str in array format 
let words = "My name is Keshav Yadav".split(' ') //[ 'My', 'name', 'is', 'Keshav', 'Yadav' ]
//console.log(words);

//destructuring an array 
//let [a,b,c,d,e] = words;
//console.log(a,b); //My name

let [a,b,c,...d] = words; //after the three dot all the element will be stored in a single var (d)
console.log(d);


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Destructuring an Objects

//No need to maintain the order of element like array
//will create brand new var
const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

//Destructuring and renaming the objects
const{
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
// console.log(restaurantName, hours, tags);


//Nested obj destructuring

const {
  fri,
  fri: {open, close},
  fri: {open: o, close: c},
} = openingHours;

console.log(fri);
console.log(open, close);
console.log(o,c);


//Default values for Destructured Objects
const {
  menu = [], //obj which not exists
  starterMenu: starters = [], //obj renaming and set default value
} = restaurant;
// console.log(menu, starters);


//Mutating obj variables

let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a,b} = obj);
// console.log(a,b);

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
// console.log(nums.size); //5

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

let nums = new Map([
  ['task', 'code'],
  ['date', 'today'],
  [false, 'start coding'],
])

// console.log(nums);

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
/*
//Factorial using Recursion | JS
//5! =  5*4*3*2*1 = 120

function fact(n){
    if(n===0)
        return 1;
    else
        return n * fact(n-1);
}

let num = 5;
result = fact(num);
console.log(result);
*/

//Copying an object one to another
/*
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age:27,
    family:['Alice', 'Bob'],
}

//object.assign function will copy the object to new object {}
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'davis';

jessicaCopy.family.push('Marry');
jessicaCopy.family.push('John');

console.log('Before Marriage', jessica2);
console.log('After Marriage',jessicaCopy);
*/
/*
//Spread operator 

//Creating an new array form existing array and adding more values at the begining
const arr = [7,8,9];
const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

//spread operator (...)
const newArr = [1,2, ...arr];
// console.log(newArr); //[1, 2, 7, 8, 9]
// console.log(...newArr); //1 2 7 8 9 -> Gives array elements individually 

//Data needed for the below operations
const restaurant = {
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};

//Adding new items to the existing Menu items
const newMenu = [...restaurant.mainMenu, 'Pakoras', 'Matar Paneer']
// console.log(newMenu);

//copy array 
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays 
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
// console.log(menu);

//Iteraring strings
const name = 'Keshav';
const letters = [...name, '', 'Y.']
// console.log(letters); //['K', 'e', 's', 'h', 'a', 'v', '', 'Y.']


//Real-world example on spread operator
const ingredients = [
  // prompt("Let's make pasta!, Ingredient 1?"), 
  // prompt('Ingredient 2?'), 
  // prompt('Ingredient 3?'),
];
// console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//or
restaurant.orderPasta(...ingredients);

//spread operator with Objects

const newRestaurant = {foundedIn: 1998, ...restaurant, founder:'Keshav'};
console.log(newRestaurant);
*/
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Rest patterns and parameters 

//1st part - Destructuring

//SPREAD, because of RIGHT side of = 
const arr = [1,2, ...[3,4]]
// console.log(arr); //[1, 2, 3, 4]

//REST, because LEFT side of = 
const [a,b,...others] = [1,2,3,4,5]
// console.log(a,b,others); //1 2 [3, 4,5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu, 
  ...restaurant.starterMenu
];
// console.log(pizza, risotto, otherFood);


//Objects 

const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);


//2st part - functions
//passing unlimited number of arguments to the function
const add = function(...numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum +=
  numbers[i];
  console.log(sum);
};

// add(2,3,5,8,3,6,9,5,3);
// add(1,2,3)

const x = [1,2,3];
// add(...x);

//Real-World example
// restaurant.orderPizza('mushrooms','onion', 'olives', 'spinch')
//or
restaurant.orderPizza('mushrooms');
*/
/*
//short circuiting

//Data needed for below operations 
const restaurant = {
  
  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log('---Logical OR (||) ---');
//- Uses ANY data type, return ANY data type, short-circuiting
// (||) will throw which ever the first truthy value comes else the last falsy value
console.log(3 || 'Keshav'); //3
console.log(''|| 'Keshav'); //Keshav
console.log(true || 0); //true
console.log(undefined || null); //null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello

//Practical example of short-circuiting using OR (||) operator
// restaurant.numGuest = 23; //This will not work if the value is 0
//ternary operator
const guests1 = restaurant.numGuest ? restaurant.numGuest: 10; //if numGuest is not defined 10 would be the default value
// console.log(guests1);
//or 

//short-circuiting using OR (||) operator
const guests2 = restaurant.numGuest || 10;
// console.log(guests2);

//Nullish coalescing operator (??)
restaurant.numGuest = 0;

const guest = restaurant.numGuest = restaurant.numGuest || 10;
// console.log(guest); //10 : it sholud be 0 if numGuest is defined

//Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect); //0

console.log('---AND (&&)----');
//AND (&&) will throw which ever the first falsy value comes else the last truthy value just opposite to (||) OR operator

console.log(0 && 'Keshav'); //0
console.log(7 && 'Keshav');//Keshav

console.log('Helo' && 23 && null && 'Keshav'); //null : a falsy value found firts

//Practical example of short-circuiting using AND (&&) operator

//checking if 'orderPizza Exists'
if(restaurant.orderPizza){
  restaurant.orderPizza('Paneer', 'Catchup');
}
//or
//it will check the existance of the function then call
restaurant.orderPizza && restaurant.orderPizza('Paneer', 'Catchup');
*/
/*
//Enhanced Object literals 

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
      open: 12,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [`day-${2+4}`]: {
      open: 0, // Open 24 hours
      close: 24,
    },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 Enhanced Object literals 
  openingHours,
  
  //In ES6 Enhanced Object literals, No need to use (:) and function keywords
  orderPizza(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(restaurant);
*/
/*
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


//Optional chaining (?)

if(restaurant.openingHours && restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon.open);
}

//WITH Optional chaining (?)
//before the '?' if exists then read next property, if not exists return undefined instead of error
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days){
  // const open = restaurant.openingHours[day]?.open;
  const open = restaurant.openingHours[day]?.open ?? 'Closed'; //Nullish operator
  console.log(`On ${day}, We open at ${open}`);
};

//checking methods if it exists 
console.log(restaurant.order?.('Paneer','Tomato') ?? 'Method not found');

//Array 

const users = [
  {
    name: 'Keshav',
    email:'contct.keshavyadav@gmail.com',
  }
]
console.log(users[0]?.name ?? 'User Array Empty')
*/
/*
// Data needed for first part of the section
const restaurant = {
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Looping objects: key, values, and entries 

//Property Names
const properties = Object.keys(restaurant.openingHours);
console.log(properties);


let openStr = `We are open on ${properties.length} days: `;
for(let day of properties){
  openStr +=`${day}, `
}
console.log(openStr);

//Property Values
const values = Object.values(restaurant.openingHours);
console.log(values);

//Entire objects 
const entries = Object.entries(restaurant.openingHours)
console.log(entries);


for(let [key, {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
/*
//Functions - Default parameters 

const bookings = [];

//Setting default value inside passing arguments: ES6 way 
const createBooking = function(flightNum, numPassengers=1, price=199*numPassengers){
   
    //Setting default value: ES5 Code way 
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800 );
createBooking('LH123',5);
createBooking('LH123', undefined, 1000);
*/

//Higher-Order function 

//Array which contains the radius of 4 circles 
// const radius = [3,1,2,4];

/*

//Example: Doing some operatin as always way-

//calculate the area of circle
const calculateArea = function(radius){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(Math.trunc(Math.PI) * radius[i] * radius[i]);
    }
    return output;
};
// console.log(calculateArea(radius));

//calculate the circumference of a circle
const calculateCircumference = function(radius){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(Math.trunc(2  * Math.PI) * radius[i] * radius[i]);
    }
    return output;
};
// console.log(calculateCircumference(radius));


//calculate the diameter of a circle
const calculateDiameter = function(radius){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(Math.trunc(2 * radius[i]));
    };
    return output;
};
// console.log(calculateDiameter(radius));


//Higer-order way-

//finding an area of a circle
const areaLogic = function(radius){ //call back function
    return Math.trunc(Math.PI * radius * radius);
};

//finding circumference of a circle
const circumferenceLogic = function(radius){ //call back function
    return Math.trunc(2 * Math.PI * radius);
};

//calculate the diameter of a circle
const diameterLogic = function(radius){ //call back function 
    return Math.trunc(2 * radius);
};

//Higher-Order function
const calculate =  function(radius, areaLogic){
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(areaLogic(radius[i]));
    };
    return output;
};

// Area func
console.log(calculate(radius, areaLogic));
// Circumference func 
console.log(calculate(radius, circumferenceLogic));
//Diameter func 
console.log(calculate(radius, diameterLogic));
*/

/*
//Functions returning function 
const greet = function(greeting){
    return function(name){
        // console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Keshav');
greeterHey('Satyam');

greet('Hello')('Keshav');

//using arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Keshav');
*/

/*
//call, apply and bind method in JS

//Call method- 

let printFullName =  function(hometown, state){ 
    console.log(this.firstName + this.lastName + " " + " from " + hometown + ", " + state);
};

//print full name
let name = {
    firstName: 'Keshav',
    lastName: 'Yadav',
};
// call method: Function borrowing
printFullName.call(name, 'Delhi', 'New Delhi');

//print full name 2
let name2 = {
    firstName: 'Sachin',
    lastName: 'Tendulkar',
};
printFullName.call(name2, 'Mumbai', 'Maharashtra');


//apply method-  
//In apply method we passes 2nd arruments in an array
printFullName.apply(name2, ['Mumbai', 'Maharashtra']);


//bind method 
//bind() method allows an object to borrow a method from another object without making a copy of that method. 
let printMyName = printFullName.bind(name2, 'Mumbai', 'Maharashtra');
console.log(printMyName);
printMyName();
*/

/*
//Immediately Invoked Function Expressions (IIFE)

//create function use it onece and it get disappear 

const runOnce = function(){
    console.log('This will never run again');
};
runOnce();

//or
//IIFE
(function(){
    console.log('This will never run again');
})();


//IIFE with arrow function
(() => console.log('This will never run again'))();
*/
//Closures
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.
//functions with its lexical scope forms closures
/*
function x(){
    const a = 7;
    function y(){
        console.log(a); //Closure (x) a:7
    };
    y();
};
x();
*/

/*
function x(){
    const a = 7;
    function y(){
        console.log(a);
    };
    return y;
};
const z = x();
console.log(z); //y(){console.log(a)};
z(); //7
*/
/*
function z(){
    let b = 900;
    function x(){
        let a = 7;
        function y(){
        //trying to access parents var and parents-parents var
        console.log('x: ' + a, 'z: ' + b); //x: 7 z: 900
        //y form closures along with function and its scope x and z 
        };
        y();
    };
    x();
};
z();
*/

//Array methods -> Some & Every

//some() - method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array

/*
const ages = [10, 13, 18, 20];
console.log(ages);

//will check if any one number of the array is adult (18+) or not (true/false)
const adult = ages.some(checkAdult);
// console.log(adult); //true

function checkAdult(age){
    return age >= 18;
};
*/


//every() - method returns true if the function returns true for all elements. The every() method returns false if the function returns false for one element.
/*
const ages = [100, 19, 25, 20];
console.log(ages);

//will check all the number of array is greater then 18 or not (true/false)
const adult = ages.every(checkAdult);
// console.log(adult); //true

function checkAdult(age){
    return age >= 18;
};

*/

/*
//flat() and flatMap() methods in Array 

// flat() - method creates a new array with all sub-array elements concatenated into one

const arr = [1,2,3,[4,5,6],7,8];
//flat() - will remove the nested array and flat all the array in one
// console.log(arr.flat()); //[1, 2, 3, 4, 5, 6, 7, 8]

//nested array in nested array
const arrDeep = [[[1,2],3],[4,[5,6]],7,8];
console.log(arrDeep.flat()); //[Array(2), 3, 4, Array(2), 7, 8]
console.log(arrDeep.flat(2)); //will go deeper by 2 -  [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arrDeep.flat(Infinity)); //[1, 2, 3, 4, 5, 6, 7, 8]


//flatMap() - A combination flat and map method - used to flatten the input array element into a new array. This method first of all map every element with the help of mapping function, then flattens the input array element into a new array. 

const array = ['This is sentence 1', 'This is sentence 2', 'My sentence 3'];
const newArray = array.map((current)=> current.split(' ')).flat();
console.log(newArray);
//or below flatMap will give the same result

const array2 = ['This is sentence 1', 'This is sentence 2', 'My sentence 3'];
const newArray2 = array2.flatMap((current)=> current.split(' '));
console.log(newArray2);
*/

//Dates in JS
/*
const now = new Date();
console.log(now); //Thu Jan 27 2022 23:52:57 GMT+0530 (India Standard Time)

console.log(now.getFullYear()); //2022
console.log(now.getMonth()); //0 - bcz in js it start from 0 not 1
console.log(now.getDate()); //27
console.log(now.getDay());//4 - 4th day of week: Thursday
console.log(now.getHours());//1
console.log(now.getMinutes());//2
console.log(now.getSeconds()); //50
console.log(now.getMilliseconds()); //784
console.log(now.toISOString()); //2022-01-27T18:36:52.594Z
console.log(now.getTime()); //1643308648406 - In-Milliseconds
console.log(Date.now()); //1643308724311
now.setFullYear(2040)
console.log(now.getFullYear());//2040

console.log(new Date(2037, 10, 19, 15, 23, 5)); //Thu Nov 19 2037 15:23:05 GMT+0530 (India Standard Time)
console.log(new Date('Aug 02 2020 18:05:41')); //Sun Aug 02 2020 18:05:41 GMT+0530 (India Standard Time)
console.log(new Date('December 24, 2015')); //Thu Dec 24 2015 00:00:00 GMT+0530 (India Standard Time)
console.log(new Date(3*24*60*60*1000));//Sun Jan 04 1970 05:30:00 GMT+0530 (India Standard Time)

*/

/*
//Timers in JS

// setTimeout(() => console.log('Here is your pizza 🍕'),3000); //after 3s will execute the console log
// console.log('Waiting...');

//passing arguments
// setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`), 3000, 'olives', 'spinch'); 
// console.log('Waiting...');  

//cancelling the timers
const ingredients = ['olives', 'spinch'];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`), 3000, ...ingredients); 
console.log('Waiting...'); 

if(ingredients.includes('spinch')) clearTimeout(pizzaTimer);
*/
//----Oops in Javascript----

//Fundamental principals of Oops 
//Abstraction 
//Encapsulation
//Inheritance 
//Polymorphism

//Abstraction:
//Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation.

//Encapsulation:
//Keeping properties and method private inside the class, so they are not accessible from outside the class. some methods can be exposed as a public interface (API).

//Inheritance:
//Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allow us to use common logic and to model real-world relationships.

//Polymorphism:
//A child class can overwrite a method it inherited from a parent class.


/*

CLASSICAL OOP: CLASSES 
class -> Blueprint 
instance -> Objects
Objects (instances) are instantiated from a class, which functions like a blueprint;
Behavior (methods) is copied from class to all instances.


OOP IN JS: PROTOTYPES
Prototype - contains methods 
objects - can access methods
Objects are linked to a prototype objects;
Prototyope inheritances: The prototype contains methods(behavior) that are accessible to all objects linked to that prototype;
Behavior is delegated to the linked prototype.
*/

/*
//Constructor functions and the new Operator


//The constructor function is the similar to a regular function the only difference is constructor function call with the 'new' keyword
//constvar convention start with capital letter 
//no arrow function and this keyword
const Person = function(firstName, birthYear){

    //instance property
    this.firstName = firstName;
    this.birthYear = birthYear;

};

const keshav = new Person('Keshav', 2002);
console.log(keshav);

//Behind the Scene
//1. A new {object} is created
//2. function is called, this keyword is the new empty {}
//3. {} linked to the prototype 
//4. function automatically return {}

//creating a other object 
const shashank = new Person('Shashank', 2001);
const kushal = new Person('Kushal', 2005);
console.log(shashank, kushal);

console.log(kushal instanceof Person); //true
*/

/*
//Prototypes 

//Data
const Person = function(firstName, birthYear){

    this.firstName = firstName;
    this.birthYear = birthYear;
};
const keshav = new Person('Keshav', 2002);
const shashank = new Person('Shashank', 2001);
console.log(keshav, shashank);


//Prototypes in picture

console.log(Person.prototype);

Person.prototype.calAge = function(){ //in 'Person' object (prototype) calcAge function will get added
    console.log(2037 - this.birthYear);
};

keshav.calAge(); //35
shashank.calAge(); //36

//protype of keshav object is the prototype of constructor function
console.log(keshav.__proto__); //{calAge: ƒ, constructor: ƒ}
console.log(keshav.__proto__ === Person.prototype); //true
console.log(Person.prototype.isPrototypeOf(keshav));//true
//.prototypeOfLinkedObjects

//adding properties to objects using prototype
console.log(Person.prototype.species = 'Homo Sapiens');
console.log(keshav.species, shashank.species); //Homo Sapiens Homo Sapiens

//checking if properties are available in the Obj
console.log(keshav.hasOwnProperty('firstName')); //true
console.log(keshav.hasOwnProperty('species')); //false - bcz the property is not really inside the keshav property but has access to it's prototype

//-Prototypal inheritance on Built-in objects

console.log(keshav.__proto__);
//Object.prototype (top of prototype chain)
console.log(keshav.__proto__.__proto__);
console.log(keshav.__proto__.__proto__.__proto__); //null

//the person onstructor is a constructor itself, below it will give the constructor function itself
console.log(Person.prototype.constructor);
//inspecting the constructor function
console.dir(Person.prototype.constructor); //it points back to the Person

const arr = [3,6,4,5,6,6,9,9,3,]; //new Array === []
//prototype of an Array
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); //true
console.log(arr.__proto__.__proto__); //back to object property 

//creating a funtion in prototype array constructor which will give the array of unique value
//Now all Array can inherit this method, call this nethod on any array 
Array.prototype.unique = function(){
    return [...new Set(this)];
};
console.log(arr.unique());

*/

/*
//ES6 Classes

//class expression
// const PersonCl = class {};
//or
//class declaration
// class PersonCl {};


class PersonCl {

    //method of the class, needs to be called constructor
    constructor(firstName, birthYear){ //passing obj properties
       this.firstName = firstName;
       this.birthYear = birthYear; 
    }

    //method will be added to .prototype property
    calcAge(){
        console.log(2037 - this.birthYear);
    };

    //adding methods to the prototype funtion (write this or like below RF1)
    greet(){
    console.log(`Hey ${this.firstName}`)
};
}

const keshav = new PersonCl('Keshav', 2002)
console.log(keshav);
keshav.calcAge();

console.log(keshav.__proto__ === PersonCl.prototype); //true


//adding methods to the prototype funtion (RF1)
// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`)
// };

keshav.greet(); //Hey Keshav

//1. Classes are NOT hoisted (means can't use before declaration) | (functions are hoisted)
//2. Classes are like functions - can pass into the function and also return from the function
//3. Classes are the special type of functions behind the scene
//4. Classes are executed in in strict mode
*/

//Setters and Getters in objects

/*
const account = {
    owner: 'Keshav',
    movements: [200, 530, 120, 300],

    //getter -> access properties
    get latest(){
        return this.movements.slice(-1).pop();
    },

    //setter -> change or mutate the proprties
    set latest(mov){
        this.movements.push(mov);
    },
}
console.log(account.latest); //300

account.latest = 50;
console.log(account.movements); //[200, 530, 120, 300, 50]

//or

const person = {
    firstName: 'Keshav',
    lastName: 'Yadav',

    //Getters
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },

    //Setters
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
};
//getters
console.log(person.fullName); //Keshav Yadav

//setters
person.fullName = 'Pintoo Yadav';
console.log(person);
console.log(person.fullName); //Pintoo Yadav
*/
//Static Methods

/*
//The static keyword is used to define a static method for a class.
//Static methods are called without creating object and cannot be called through a class instances (objects).
//Static methods are often used to create utility functions for an application.

class Mobile {
    static disp(){
        return 'Hey there 👋'
    };
};
console.log(Mobile.disp());
*/

//Object.create

/*
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
};

//will create a new object 'keshav' with the 'PersonProto' prototype
const keshav = Object.create(PersonProto);
console.log(keshav);
//adding properties to the object 
keshav.name = 'Keshav';
keshav.birthYear = 2002;
//calling
keshav.calcAge();
*/

/*

//Inheritance between "Classes": Constructor functions 
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
};


const Student = function(firstName, birthYear, course){

    // this.firstName = firstName;
    // this.birthYear = birthYear;
    //or
    //Inheriting
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and, I study ${this.course}`);
};

const keshav = new Student('Keshav', 2002, 'Computer Science');
keshav.introduce();
keshav.calcAge();

console.log(keshav.__proto__);
console.log(keshav.__proto__.__proto__);
*/

//Inheritance between Classes : ES6 Classes

/*
class employee{
    constructor(name){
        console.log("Constructor : Employee " + name);
    };
};

class manager extends employee{
    constructor(name){
        super();
        console.log("Constructor : Manager " + name)
    };
};

const a = new manager("Keshav Yadav");
*/

//and

/*
class PersonCl {
    constructor(fullName, birthYear){
       this.fullName = fullName;
       this.birthYear = birthYear; 
    };
    
    //Instance methods
    calcAge(){
        console.log(2037 - this.birthYear);
    };

    greet(){
    console.log(`Hey ${this.firstName}`);
    };

    get age(){
        return 2037 - this.birthYear;
    };

    set fullName(name){
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    };

    get fullName(){
        return this._fullName;
    };

    //static method
    static hey(){
        console.log('Hey there 👋');
    };

};

//extends keywords let's you help in inherit
class StudentsCl extends PersonCl {
    constructor(fullName, birthYear, course){

        //super keyword will check if any method exist in super class or not
        super(fullName, birthYear);  
        this.course = course;
    };

    introduce(){
        console.log(`My name is ${this.fullName} and I study ${this.course} `);
    };

    //This will overwrite the previous method
    calcAge(){
        console.log(`I'm ${2037 - this.birthYear} years ald, but as a student I feel more like ${2037- this.birthYear + 10}`);
    };
};

const satyam = new StudentsCl('Satyam Tiwari', 2003, ' Computer Science');
satyam.introduce();
satyam.calcAge();
*/


//Inheritance between Classes : Object.create
/*
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const keshav = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course){
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const satyam = Object.create(StudentProto);
satyam.init('Satyam', 2002, 'Computer Science');
satyam.introduce();
satyam.calcAge();
*/


//Encapsulation in JS

/*
//Encapsulation is defined as the wrapping up of data (var, instances, methods) under a single unit (Class)

//Wrapping up in single unit - Class
class Student{

    //defining variables
    constructor(){
        let name, marks;
    };

    //methods
    getName(){
        return this.name;
    };

    setName(name){
        this.name = name;
    };

    getMarks(){
        return this.marks;
    };

    setMarks(marks){
        this.marks = marks;
    };
};

//object of class
let stu = new Student();
stu.setName('Keshav');
stu.setMarks(90);
console.log(stu);

console.log(stu.getName(), stu.getMarks());
*/

//Synchronous in JS
//Synchronous code is executed line by line - Most code is synchronous
//Each line of code waits for previous line to finish

//Asynchronous in JS 
//Asynchronous code is executed after a task that runs in the "background" finishes;
//Asynchronous code is non-blocking;
//Execution doesn't wait for an asynchronous task to finish its work
//Callback function alone do NOT make code asynchronous!


//AJAX in JS - Asynchronous Javascript And XML 
//AJAX - Allows us to communicate with remote web servers in an asynchronous way. With AJAX call, we can request data from web servers dynamically.


//API - Application Promgramming Inteface
//Piece of software that can be used by another piece of software, in order to allow application to talk to each other.
//There are be many types of API in web development - DOM API | Geolocation API | Own Class API | Online API

/*
//AJAX Calling - XMLHttpRequest

//method object 
const request = new XMLHttpRequest();

//calling API (Source:https://restcountries.com/)
request.open('GET', 'https://restcountries.com/v3.1/name/india');
request.send();

request.addEventListener('load', function(){
  const data = JSON.parse(this.responseText);
  console.log(data);
});
*/

/*
//Promises and the Fetch API

//promise: An obj that is used as a placeholder for the future results of an asynchronous operation
//Promise: A container for a future value.

const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
console.log(request);
*/

/*
//Consuming promises
//The code has bugs - pending for correction
const getCountryData = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/$
    {country}`).then(function (
        response
    ) {
        console.log(response);
        return response.json();

    }).then(function(data){
        console.log(data);
    });
};
getCountryData('portugal');
*/
/*
//Chaining promises

{
    //code
}

*/

/*
//handling rejected promises

{
    //code
}

*/
