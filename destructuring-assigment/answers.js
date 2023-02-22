// 1)

let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user

// 2)
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let topSalary = salaries  =>{
    let [max,name] = [0,'']
    for (let [key, value] of Object.entries(salaries)){
        if(max<value){
            max=value
            name=key
        }
    }
    return name
}

console.log(topSalary(salaries))