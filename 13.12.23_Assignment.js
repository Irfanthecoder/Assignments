// Template Literal
const text = "Sum is"
console.log(`Hello the ${text} ${10 + 6}`);

// Spread
let arr = [2, 4, 55, 78];
let a = [...arr];
console.log(a);

// Arrow function
let afunc = (num) => num*num;
console.log(afunc(2))

let bfunc = (num1, num2) => {
  return num1 * num2;
}
console.log(bfunc(2, 3));

// Destructuring & rest
let arr2 = [10, 3, 8, 4 ,7];
let [v, b, c, ...rest] = arr2;
console.log(rest);

let obj = {"name": "John", "age": 18, "City": "Mumbai"};
const {age, ...rest2} = obj;
console.log(rest2);
