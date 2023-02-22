// 1)
let user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name

// 2)
let isEmpty = (obj) => {
    for (key in obj) {
        return false
    }
    return true
}

// 3) можно, т.к. объект - ссылочный тип данный, а защищает только изменение ссылки а не сам объект

// 4)
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = obj => {
    let result = 0;
    for (let key in obj) {
        result += salaries[key]
    }
    return result
}

console.log(sum(salaries))

// 5)
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
}

let multiplyNumeric = obj => {
    for (let key in obj) {
        if (typeof obj[key] == 'number') obj[key] *= 2
    }
}
multiplyNumeric(menu)
console.log(menu)