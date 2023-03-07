// 1)

function makeCounter() {
    let count =0

    function counter(){
        return count++
    }

    counter.set = value => count =value

    counter.decrease = () => count--

    return count
}

// 2)

function sum(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
  }