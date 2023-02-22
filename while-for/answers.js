//1) 1 т.к. для js 0==false и цикл прервется
//2) 1) 1,2,3,4 2)1,2,3,4,5
//3) в 1) и 2) 1,2,3,4
// 4)

let i=0
while(i<3){
    alert(`number ${i++}!`)
}

// 5)
let input;
do{
    input = +prompt('Введите число > 100')
}while(!(input > 100 && input))

// 6)
let n = +prompt('Введите n')
for(let j=1; j<n ;j++){
    let isPrime = true
    for(let i=2; i<j; i++){
        if (!(n%i)){
            isPrime=false
            break
        }
    }
    if (isPrime){
        alert(j)
    }
}