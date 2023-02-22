// 1) да, если они будут возващать объект определенный выше до их вызова

// 2)

function Calculator() {
    this.read = () => {
        this.a = +prompt('введите первое число')
        this.b = +prompt('введите второе число')
    },
    this.sum = () => {
        return this.a + this.b
    },
    this.mul = () => {
        return this.a * this.b
    }
}

let calculator = new Calculator()

// 3)

function Accumulator(startValue){
    this.value= startValue,
    this.read = () => {
        this.value+=+prompt('сколько добавить',0)
    }
}

let accumulator = new Accumulator(1);