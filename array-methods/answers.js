// 1)

let arr = ['background-color', 'list-style-image', 'webkit-transition']

let camelize = elem => elem.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
let result = arr.map(elem => camelize(elem))

console.log(result)

// 2)

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let filterRange = (arr, a, b) => {
    return arr.filter(elem => (elem >= a && elem <= b))
}

arr1_result = filterRange(arr1, 3, 6)
console.log(arr1_result)

// 3)

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > b && arr[i] < a) {
            arr.splice(i, 1)
            i--
        }
    }
}

filterRange(arr1, 3, 6)
console.log(arr1)

// 4)

let arr2 = [5, 2, 1, -10, 8]
arr2.sort((a, b) => b - a)
console.log(arr2)

// 5)

let arr3 = ['HTML', 'JavaScript', 'CSS']

let copySorted = arr => {
    let a = []
    return a.concat(arr).sort()
}

arr3_result = copySorted(arr3)
console.log(arr3)
console.log(arr3_result)

// 6)

function Calculator() {
    this.calculate = str => {
        let arr = str.split(' ')
        this.a = +arr[0]
        this.b = +arr[2]
        this.sign = arr[1]
        return this.calcMethods[arr[1]](this.a, this.b)
    }
    this.calcMethods = {
        '+': (a, b) => this.a + this.b
    }
    this.addMethod = (sign, func) => this.calcMethods[sign] = func
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

result = powerCalc.calculate('2 ** 3');
console.log(result);

// 7)

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(elem => elem.name)
console.log(names)

// 8)

vasya = { name: "Вася", surname: "Пупкин", id: 1 };
petya = { name: "Петя", surname: "Иванов", id: 2 };
masha = { name: "Маша", surname: "Петрова", id: 3 };
users = [vasya, petya, masha];

let usersMapped = users.map(elem => ({
    fullname: [elem.name, elem.surname].join(' '),
    id: elem.id
}))
console.log(usersMapped)

// 9)
vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 28 };
arr = [ vasya, petya, masha ];

let sortByAge = arr => arr.sort((a,b)=> a.age > b.age ? 1: -1)

sortByAge(arr)
console.log(arr)

// 10)

let shuffle = arr => arr.sort( () => Math.random - 0.5)

// 11)

let getAverageAge = (arr) => Math.round(arr.reduce((last,elem) => last + elem.age,0)/arr.length)

console.log(getAverageAge(arr))

// 12)

let unique = arr => {
    let result = []
    for (let elem of arr){
        if (!result.includes(elem)) result.push(elem)
    }
    return result
}

// 13)

let groupById = arr => {
    let result ={}
    for( let elem of arr){
        result[elem.name.split(' ')[0].toLowerCase()] = elem
    }
    return result
}

users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

let usersById = groupById(users)
console.log(usersById)