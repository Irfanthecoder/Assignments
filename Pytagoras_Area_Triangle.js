function pytagoras (a, b){
  let hypotenuse1 = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  return hypotenuse1;
}
function area (a, b) {
  let hypotenuse2 = 0.5 * a * b;
  return hypotenuse2;
}

let calculate = function(a, b, logic) {
  return logic (a,b);
}

console.log(calculate(2,7, pytagoras))
console.log(calculate(2,3, area))
