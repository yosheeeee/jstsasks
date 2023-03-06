// 1)

let sumTo = n => {
    if (n==1){
        return 1
    }else{
        return n+sumTo(n-1)
    }
}

console.log(sumTo(4)) //10

// 2
let factorial = n => n == 1? 1: n*factorial(n-1)

console.log(factorial(5)) //120

// 3
let fib = n => n <= 1 ? n: fib(n-1)+ fib(n-2)

console.log(fib(7)) //13

// 4

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

let printList = list => {
    console.log(list.value)
    if (list.next != null){
        printList(list.next)
    }
}

printList(list)