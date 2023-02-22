//1) выведется т.к. все true кроме пустой строки

//2

let answer = prompt('Какое "официальное название" JavaScript')
if (answer == "ECMAScript"){
    alert("Верно")
}else{
    alert("Не знаете ECMAScript")
}

//3
let int = prompt("Введите чило")
if (int > 0){
    alert(1)
}else if(int<0){
    alert(-1)
}else{
    alert(0)
}

//4

let result

let a,b

result = a+b<4 ? "Мало" : "Много"

//5

let message

message = login == 'Сотрудник' ? 'Привет' : login == 'Директор' ? 'Здравствуйте' : login == '' ? 'Нет логина' : ''