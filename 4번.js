// return문에서 함수호출이 포함된 연산식을 제거
function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result = result * i;
    }
  
    return result;
  }

let result = factorial(1000000);
console.log(result);