//creating a function which takes N!
//and returns the solution in string form

function factorial(n) {
  let ele = [1];
  for (let i = 2; i <= n; ++i) {
    let c = 0;
    for (let j = 0; j < ele.length || c !== 0; j++) {
      c += (ele[j] || 0) * i;
      ele[j] = c % 10;
      c = Math.floor(c / 10);
    }
  }
  return ele.reverse().join("");
}
console.log(factorial(1))
console.log(factorial(10))
console.log(factorial(100))
