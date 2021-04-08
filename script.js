//Template Strings
function printName(name) {
    console.log(`Hello ${name}`);
}

printName("keval");

function createEmail(firstname, price) {
    const shipping = 5.05;
    console.log(`Hi ${firstname}! Thanks!
        Shipping: ${shipping}
        Price: ${price}
        Grand Total: ${price + shipping}
    `);
}

createEmail('keval', 200);

//Search Strings
const planate = "Earth";
console.log(planate.search("art"));

//symbol
const id = Symbol();

const courseInfo = {
    title: "Javascript",
    topics: ["string", "arrays", "objects"],
    id: "js-course"
};

courseInfo[id] = 42521;
console.log(courseInfo);

//maps
const course = new Map();

course.set("react", { description: "ui" });
course.set("kt", { description: "keval thummar" });

console.log(course);
console.log(course.get("kt"));

let details = new Map([
    [new Date, "today"],
    [2, { javascript: ["js", "node", "react"] }],
    ["item", [1, 2]]
]);

//console.log(details.size);
details.forEach(function (item) {
    console.log(item);
});

//set
let book= new Set();
book.add("Pride & Prejudice");
book.add("War and Peace").add("Oliver Twist");

console.log(book);
console.log(book.size);

book.delete("Oliver Twist");
book.forEach(function(item){
    console.log(item);
});

console.log("has Oliver Twist",book.has("Oliver Twist"));