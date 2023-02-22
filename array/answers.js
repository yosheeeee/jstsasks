// 1) выедет 4 т.к. массивы ссылочный тип данных и эти два массива ссылаются на один

// 2)
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[2] = "Классика";
styles.shift();
alert(styles[0]);
styles.unshift("Регги");
styles.unshift("Реп");

// 3)вывод массива как строки

let arr = [];
while (true) {
  let elem = prompt("Введите число");
  if (elem == null || elem == "" || !isFinite(elem)) {
    break;
  }
  arr.push(+elem);
}

let sumInput = (arr) => {
  let res = 0;
  for (let elem of arr) res += elem;
  return res;
};

// 4)

let getMaxSubSum = (arr) => {
    let max=0;
    for (let i=0; i<arr.length; i++){
        let temp=0;
        for (let j=i+1; j<arr.length; j++){
            temp+=arr[j]
            if (temp>max) temp = max
        }
    }
    return max
};
