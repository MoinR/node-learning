let arr = ["Hello", "Hi", "Bye"];
let strArr = arr.toString(); 
let j = arr.join(" -- ")

console.log("Array Length", arr.length);
console.log(arr);
console.log("Array in String",arr.toString());
console.log("Type of strArr", typeof strArr);
console.log("Type of strArr", typeof arr);
console.log("Array item at 1", arr.at(1));
console.log("J", j);

let fruits = ["Mango", "Orange", "banana"]; 
let vegs = ["Potato", "Onion", "Tomato"]; 
console.log("Before POP =", fruits);
fruits.pop()
console.log("After POP =", fruits);

let mergedVal = fruits.concat(vegs);
console.log(mergedVal);


let numArr = [1,2,3,4]; 
let numbers = numArr.map(n => n-1); 
console.log("Squares of number", numbers);


let citizens = [
    {
        name: "Farhan",
        age: 21
    },
    {
        name: "Aman",
        age: 18
    },
    {
        name: "Sefan",
        age: 17
    },
    {
        name: "Moin",
        age: 24
    }
]

let allowedForElection = citizens.filter(c => c.age >= 18);
console.log(allowedForElection);

let _numbers = [1, 2, 3, 4];
let sum = _numbers.reduce((total, num) => total + num, 0);
console.log(sum);  

total = 0; 
function j_reducer(total, num){
    num = 2; 
    total = num + total; 
}

