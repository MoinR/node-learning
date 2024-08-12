let arr = [1, 2, 3];

let x = arr[0]; 
let y = arr[1]; 
let z = arr[2]

let [a, b, c] = arr;

console.log(a, b, c);  


let std = { name: "Moin", age: 10 }; 
let result = {...std, result: "P"}; 
let rt = { name : std.name, age: std.age, result: "P"}

console.warn(result);
console.warn(rt);

