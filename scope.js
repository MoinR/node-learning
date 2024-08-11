let globalVar = 10; 
let result = 0; 
function add(n1,n2) {
    console.log(globalVar);
    
    result = n1 + n2 - globalVar; 
    // return result; 
}
add(1,2);
console.log(result);

