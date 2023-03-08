// 1) 1.true т.к. изменения будут касаться только новых объектов а текущие не изменятся 2.false т.к. прототип переходит по ссылке 3.true т.к. свойство прототипа нельзя удалить delete через наследника
// 4.udefined т.к. будет удалено напрямую у прототипа

// 2)

function Human(name){
    this.name = name
}

let human1 = new Human('Oleg')
let human2 = new human1.constructor('Pavel') //сработало

console.log(human2.name)

// изменим prototype функции

Human.prototype = {}

human1 = new Human('Egor')
human2 = new human1.constructor('Pavel')
console.log(human3.name) // не сработает