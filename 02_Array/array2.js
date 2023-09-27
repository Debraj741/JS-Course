const marvelHero = ["Thor","IronMan","Spiderman","Dr.Strength"]
const dcHero = ["WonderWoman","Superman","Batman","Flash"]

// marvelHero.push(dcHero);
// console.log(marvelHero);

// const allhero = marvelHero.concat(dcHero)
// console.log(allhero);

const Allheros = [...marvelHero,...dcHero]
// console.log(Allheros); 


const another_arr = [4,5,8,[7,9,6],1,[0,2,[10,20,30]]]
const real_another_arr = another_arr.flat(Infinity) 
// console.log(another_arr);
// console.log(real_another_arr);


// console.log(Array.isArray("Debraj"));
// console.log(Array.from("Debraj"));
// console.log(Array.from({name:"Debu"}));   //Give empty array

let sc1 = 100
let sc2 = 200
let sc3 = 300

console.log(Array.of(sc1,sc2,sc3));