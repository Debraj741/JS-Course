const arr = [4,5,8,9]

const hero = ["Thor","Spiderman","IronMan","America"]

// console.log(arr[1]);
// console.log(hero[0]);
// console.log(hero.length);

hero.push(52)
hero.push("Debraj")
// console.log(hero);
hero.pop()

hero.unshift(100)
// console.log(hero);
hero.shift();
// console.log(hero);


// console.log(hero.includes(10));
// console.log(hero.indexOf("America"));


const newarr = hero.join()
// console.log(hero);
// console.log(newarr);
// console.log(typeof newarr);


//Slice & Splice

const arr1 = [5,4,7,8,9]
console.log("A: ", arr1);

const myar1 = arr1.slice(1,3)

console.log(myar1);
console.log("B: ",arr1);

const myar2 = arr1.splice(1,3)

console.log(myar2);
console.log("C: ",arr1);