// 1)

function printNumber(from,to){
    let current = from

    let timerId = setInterval( () => {
        console.log(current)
        if (current == to) clearInterval(timerId)
        current++
    },1000)
}

// 2) вызов setTimeout произойдет только после выполнения основного блока кода,
// поэтому выведется 100000000
