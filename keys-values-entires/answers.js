// 1)

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let sumSalaries = salaries => {
    let s=0
    for (let value in Object.values(salaries)) s+=value
    return s
}

// 2)

let user = {
    name: 'John',
    age: 30
  };

let count = obj => {
    let counter=0
    for(let key in obj) counter++
    return counter
}

