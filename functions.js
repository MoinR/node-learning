// Normal function - Traditional;
function add(n1, n2){
    return n1 + n2;
}

// Function expression
const add = function(n1, n2){
    return n1 + n2;
}

const add = (n1,n2) => n1+n2; 


let n1 = 10; 
let n2 = -20; 
let o1 = add(n1, n2); 
console.log(o1);

