// let score = "55a" -- If Convertion is done then diplay NaN
// let score = null -- If convertion in done then display 0
// let score = undefined -- If convertion is done then display Nan
// let score = false -- true =>1, false=>0

let score = "55"

// console.log(typeof score);
let value = Number(score) //Now Converted into Number , if converted value is not a valid num then display as NaN, but still it convert in number.

// console.log(typeof value);
// console.log(value);

let ip = 10;
let changebool = Boolean(ip);
// console.log(typeof ip)
// console.log(typeof changebool);
// console.log(changebool);

// In case of Boolean Conversion
// 1=> True, 0=>false
//Empty("") =>false, Anyvalue("debraj") = True;

let val = false
let isstring = String(val)

// console.log(typeof val)
// console.log(typeof isstring);
// console.log(isstring);


/*************************  Operations   ******************************** */

// console.log(1+"2");  // output => 12
// console.log("1"+2);  // o/p =? 12
// console.log("1"+2+5); //  o/p => 125 (If string in first then all are converted into string)
// console.log(1+2+"5"); // o/p => 35

let health = 100
// console.log(health++);
// console.log(health);


// console.log(null == 0);
// console.log(null > 0);
// console.log(null < 0);

//Here null is converted into 0 , when use compraison operators
// console.log(null>=0);
// console.log(null<=0);
// == and other comprarison operators are worke differently


// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// console.log(undefined>=0);
// console.log(undefined<=0);


// === Strict check, check olso datatype
console.log("2" == 2);   //Here "2" is changed into Number & check as it same then true return
console.log("2" === 2);  // here Strictly check data type olso same or not