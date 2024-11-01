let score =33

// console.log(typeof score);  // number

let score1=Number("33akd")

// console.log(typeof score1); // JS has done the typecasting from "33akd" to a number
// console.log(score1); // it will give Not a Number NaN 

let score2=Number(null)
// console.log(score2);  // 0

let score3=Number(undefined);

// console.log(score3);

/*
"33" => 33
"33abc" => NaN
true => 1 , false => 0
*/

let isLoggedIn="his";
let booleanIsLoggedIn=Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);  // true

/*
1 => true
0 => false
989 => true
"" => false
"Arbaz" => true
*/


let someNumber=33;
let stringNum=String(33);
console.log( typeof stringNum);

//******Operation ***********/

let value=2;
console.log("1"+(2+2));
console.log(1+2+"3");

console.log(true+true);

let gameCounter=100
console.log(++gameCounter);

//Comparison

console.log(null > 0);
console.log(null==0);
console.log(null>=0);

/*
    Null convert to 0 with >= , <=  for comaprisopn, but for equality it will not 

*/
console.log(undefined > 0); 
console.log(undefined==0);
console.log(undefined>=0);

// Strict check === check for val as well as datatype

console.log("2"===2);








