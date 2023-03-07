// 1) не зависимы, для них создается разное окружение

// 2) будет работать со своим окружением, покажет 1 2 1

// 3) будет ошибка, т.к. функция вызвана вспомогательно внутри блока if, и умрет после отработки блока

// 4)
function sum(a) {
    return function (b) {
        return a + b
    }
}

console.log(sum(5)(6)) //11

// 5)

function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b
    }
}

function inArray(arr) {
    return function (x) {
        return arr.includes(x)
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))) // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))) // 1,2

// 6)

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? 1 : -1
    }
}

users.sort(byField('name'))
console.log(users) // ann, john, pete

users.sort(byField('age'))
console.log(users) //pete, ann, john

// 7) функции зависят от локальной переменной i, которая под конец цикла становится 10, поэтому всегда выводятся 10

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i
        let shooter = function () {
            console.log(j);
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();
army[5]()
army[6]()