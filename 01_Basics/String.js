// Stack(Use in Premitive) & Heap memory(Use in Non-Premetive)

const name = "Debraj"
const repsize = 100
console.log(`Hi my name is ${name}, and My Repo size is ${repsize}. Thank You`);

const gameName = new String('Vice-City')
console.log(gameName[0]);
console.log(gameName[4]);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));

const newstring = gameName.substring(0,5)
console.log(newstring)


const anotherstring = "      Debraj.  "
console.log(anotherstring);
console.log(anotherstring.trim()); //Remove al Extra space


const url = "http://debraj.com/debraj%20kundu"
console.log(url);
console.log(url.replace('%20','-'));

const str2 = "Debraj kundu love oyes"
console.log(str2.split(' '));  //Split on the basis of given i/p it slice & put in array