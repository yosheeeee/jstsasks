// 1) 1.true (значение объекта rabbit) 2.null (заимствует у прототипа) 3.undefined (не найдено нигде)
// 2) 
let head = {
    glasses: 1
};

let table = {
    __proto__: head,
    pen: 3
};

let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};

let pockets = {
    __proto__: bed,
    money: 2000
};

console.log(pockets.pen) //3
console.log(bed.glasses) //1

// 3)rabbit, потому что вызов от этого объекта
// 4) потому что свойство stomach общее для всех (принадлежит hamster то есть прототипу)

let hamster = {
    eat(food) {
        if (!this.hasOwnProperty('stomach')){
            this.stomach = []
        }
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

speedy.eat('apple')
console.log(speedy.stomach);
console.log(lazy.stomach);