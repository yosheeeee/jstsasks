// 1)2
// 2)null
// 3)1, undefined
// 4)3
// 5)
let age;
if (age>=14 && age <= 90){
    alert(true)
} 
// 6) 1 и 3

//7)
let user = prompt('Кто там?','')
if (user == 'Админ'){
    let password = prompt('Пароль?','')
    if(password == 'Я главный'){
        alert('Здравствуйте')
    }else if (password == ''){
        alert('Отменено')
    }else{
        alert('Неправильный пароль')
    }
}else if(user == ''){
    alert('Отменено')
}else{
    alert('Я вас не знаю')
}

