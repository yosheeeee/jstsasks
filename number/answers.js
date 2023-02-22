// 1)
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
alert(a + b);

// 2)
alert(Math.round(6.35*10)/10)

// 3)
let readNumber = () =>{
    let number
    do{
        number = prompt('Введите число','')
    }while(!isFinite(number))

    if (number == null || number == ''){
        return null
    }
    return +number
}

// 4)из за погрешности в хранении дробный чисел

// 5)

let random = (min,max) => min+Math.random()*(max-min)

