//object litrel
function skier(name, sound) {
    return {
        name,
        sound,
        powderYell: function () {
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}!`);
        }
    };
}

skier("keval", "yeah").powderYell();

//spred oprator
const daytime = {
    breakfast: "oatmeal",
    lunch: "Peanut butter and jelly"
};

const nighttime = "Mac and cheese";

const backPackingMeals = {
    ...daytime,
    nighttime
};

console.log(backPackingMeals);

//
const vacation = {
    destination: "India",
    place: "Goa",
    state: "Goa"
};

function Marketing({ place, destination }) {
    console.log(`vacation place is ${place}, ${destination}`);
};

Marketing(vacation);

//iterating with for/of loop
for (let letter of "java") {
    console.log(letter);
}

let topics = new Map();
topics.set("HTML", "/tpoic/html");
topics.set("CSS", "/tpoic/css");
topics.set("JS", "/tpoic/JavaScript");

for (let tpoic of topics.entries()) {
    console.log(tpoic);
}

//classes
class vihical {
    constructor(description, wheels) {
        this.description = description;
        this.wheels = wheels;
    }

    describrYourSelf() {
        console.log(`
        I am a ${this.description}
        with ${this.wheels} wheels.
    `);
    }
}

// let coolSkivan = new vihical("cool ski van", 4);
// coolSkivan.describrYourSelf();

class semiTrack extends vihical {
    constructor() {
        super("Semi Truk", 8);
    }
}

let inheritclass = new semiTrack();
inheritclass.describrYourSelf();

//geting seting
let attendence = {
    _list: [],
    set addName(name) {
        this._list.push(name);
    },
    get list() {
        return this._list.join(", ");
    }
};

attendence.addName = "keval";
console.log(attendence.list);

attendence.addName = "pruthvi";
attendence.addName = "nevil";
console.log(attendence.list);

//geting seting in class
class Hike {
    constructor(distance, pace) {
        this.distance = distance;
        this.pace = pace;
    }
    get lengthInHours() {
        return `${this.calcLength()} hourse.`
    }
    calcLength() {
        return this.distance / this.pace;
    }
}

const mtTallac = new Hike(10, 2);
console.log(mtTallac.lengthInHours);