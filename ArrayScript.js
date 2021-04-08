//Spred Oprator
let cats = ["biscute", "jungle"];
let dogs = ["stella", "camper"];

let animals = ["lion", "tiger", ...cats, ...dogs];
console.log(animals);

let cities = ["surat", "vadodra", "ahemdabad"];

//destructing array
let [first, , thrid] = cities;
console.log(first);
console.log(thrid);

//searching array using include
console.log(cities.includes("surat"));
console.log(cities.includes("bharuch"));
