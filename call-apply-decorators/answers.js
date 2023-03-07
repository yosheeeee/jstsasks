// 1)
function work(a, b) {
    console.log(a + b); // произвольная функция или метод
}

function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args)
        return func.apply(this, args)
    }

    wrapper.calls = []

    return wrapper
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}

// 2)

function f(x) {
    console.log(x);
}

function delay(func, timeDelay) {
    return function () {
        setTimeout(() => func.apply(this, arguments), timeDelay)
    }
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс

// 3)

function debounce(func, delayTime) {

    let isDelayed = false

    return function () {
        if (isDelayed) return
        else {
            func.apply(this.arguments)
            isDelayed = true
            setTimeout(() => isDelayed = false, delayTime)
        }
    }

}

f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

// 4)

function func(a) {
    console.log(a)
}

function throttle(func,ms){
    let isDelayed = false
    let savedArgs,savedThis

    function wrapper(){
        if (isDelayed){
            savedArgs = arguments
            savedThis = this
            return
        }else{
            func.apply(this,arguments)

            isDelayed = true

            setTimeout( () => {
                isDelayed = false
                if (savedArgs){
                    wrapper.apply(savedThis,savedArgs)
                    savedArgs = savedThis = null
                }
            },ms)
        }
    }

    return wrapper

}

// f1000 передаёт вызовы f максимум раз в 1000 мс
f1000 = throttle(func, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)