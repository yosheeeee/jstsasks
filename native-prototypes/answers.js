// 1)

function f() {
    console.log("Hello!");
}

Function.prototype.defer = function (ms) {
    setTimeout(this, ms)
}

f.defer(1000)

// 2)

function f(a, b) {
    console.log(a + b);
}

Function.prototype.defer = function(ms){
    let f = this
    return function(...args){
        setTimeout(()=> f.apply(this,args),ms)
    }
}

f.defer(1000)(1,2)

