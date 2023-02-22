// 1)будет работать одинаково т.к. второй return не будет выполняться если выполнится первый
// 2) 
function checkAgeOne(age) {
    return age > 18 ? true : confirm('Родители разрешили?')
}

function checkAgeTwo(age) {
    return (age > 18) || confirm('Родители разрешили?')
}

// 3)

function min(a, b) {
    return a<b ? a : b
}

// 4)
function pow(x,n) {
    return x**n
}


