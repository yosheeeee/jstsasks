// 1) выдаст ошибку т.к. во время вызова и функции еще нет this

// 2)

let calculator = {
    read() {
        this.a = +prompt("Введите первое значение")
        this.b = +prompt("Введите второе значение")
    },
    sum() {
        if (a == undefined || a == null) {
            this.read()
        } else {
            return this.a + this.b
        }
    },
    mul() {
        if (a == undefined || a == null) {
            this.read()
        } else {
            return this.a + this.b
        }
    }
}

calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())

// 3)

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this
    },
    down() {
      this.step--;
      return this
    },
    showStep: function() { 
      alert( this.step );
      return this
    }
  };
