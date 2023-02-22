// 1)

let user = {
    name: "Василий Иванович",
    age: 35
};

user = JSON.stringify(user)
let user_2 = JSON.parse(user)

console.log(user_2)

// 2)
let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, (key, value) => {
    return (value == meetup && key != '') ? undefined : value
}))
