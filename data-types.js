let str = "Hello";
let num = 9799;
let bool = false;
let arr = ["Hello", "Hi", "Bye"];
let obj = { 
    name: "Farhan", 
    age: 19, 
    nicknames: ["Farhan Miyan", "Bawa Saab"]
}


console.log(str, num, bool);
console.log(arr); 
console.log(arr[0], arr[1]); 
console.log(obj); 
console.log(obj['name']);
console.log(obj.name);
console.log(obj.nicknames[0]);

// Arithmetic Operators 
console.log(5-2); 
console.log(5/2); 
console.log(5*2); 
console.log(5+2); 
console.log(10%3);

console.log(5 == 5); 
console.log(5 == "6"); 
console.log(5 === "5"); 

console.log("5 > 6", 5 > 6);
console.log("5 >= 6", 5 >= 6);
console.log("5 >= 5", 5 >= 5);

console.log("1 === 1 && 2 === 2",1 === 1 && 2 === 2);
console.log("1 === 1 && 2 === 3",1 === 1 && 2 === 3);
console.log("1 === 1 || 2 === 2",1 === 1 || 2 === 2);
console.log("1 === 1 || 2 === 2",1 === 1 || 2 === 1);
