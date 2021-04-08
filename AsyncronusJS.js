//syncronus
const delay = (seconds) =>
    new Promise((resolve, reject) => {
        if (typeof seconds !== "number") {
            reject(new Error("Second must be a number"));
        }

        setTimeout(resolve, seconds * 1000);
    });

//delay(1).then(() => console.log("1 sec"));
//delay(3).then(() => console.log("3 sec"));

//loding remote data with promises
const spacePeople = () => {
    return new Promise((resolve, rejects) => {
        const api = "http://api.open-notify.org/astros.json";
        const request = new XMLHttpRequest();
        request.open("GET", api);
        request.onload = () => {
            if (request.status === 200) {
                resolve(JSON.parse(request.response))
            } else {
                rejects(Error(request.statusText))
            }
        }
        request.onerror = (err) => {
            rejects(err);
        }
        request.send();
    });
}

spacePeople().then(
    (spaceData) => console.log(spaceData),
    (err) => console.error(new Error("cant load the data"))
);

//returning promises with fetch
fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(console.log);
//
let spacePeopal = () => fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json());

let getnames = () => spacePeopal()
    .then(json => json.people)
    .then(people => people.map(p => p.name))
    .then(names => names.join(", "));

getnames().then(console.log);

//Async/Await
const countToFive = async () => {
    console.log("0 sec");
    await delay(1);
    console.log("1 sec");
    await delay(2);
    console.log("2 sec");
    await delay(3);
    console.log("3 sec");
    await delay(4);
    console.log("4 sec");
    await delay(5);
    console.log("5 sec");
}

//countToFive();

//fetch with async/await
const githubRequest = async (login) => {
    let response = await fetch(`https://api.github.com/users/${login}`);
    let json = await response.json();
    let summary = `${json.name}, ${json.company}`;
    console.log(summary);
};

githubRequest("kevaljthummar");