//Repeat
let yell = "Woo!";
console.log(yell.repeat(20));

let cat = {
    meow(times) {
        console.log("meow".repeat(times))
    },
    purr(times) {
        console.log("purr".repeat(times))
    },
    snore(times) {
        console.log("ZzZzZ".repeat(times))
    }
}

cat.meow(3);
cat.purr(3);
cat.snore(20);

//Default Parameter
function add(x = 5, y = 5) {
    console.log(x + y);
}

add(1, 5);
add();

function haveFun(activityname = "hiking", time = 1) {
    console.log(`I will go ${activityname} for ${time} hours.`);
}

haveFun("hiking", 3);
haveFun("driving");

//Arrow function

// let studentList = function (students) {
//     console.log(students);
// }
let studentList = (students) => console.log(students);
studentList(["a", "b"]);

let list = ["apple", "banana", "pineapple"];
// list.map(function (item) {
//     console.log(item);
// });
list.map((item) => console.log(item));

let person = {
    first: "keval",
    hobbies: ["bike", "hike", "ski"],
    printHobbies: function () {
        this.hobbies.forEach((hobbie) => {
            console.log(`${this.first} like to ${hobbie}`)
        })
    }
}

person.printHobbies();

//decorator function
function* decorator() {
    yield "one";
    yield "two";
    yield "three";
}

let countDown = decorator();
console.log(countDown.next().value);
console.log(countDown.next());
console.log(countDown.next());
console.log(countDown.next());