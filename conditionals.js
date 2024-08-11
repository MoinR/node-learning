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

let allowedForElection = []; 
let notAllowed = []; 

for (let i = 0; i < citizens.length; i++){
    if ( citizens[i].age >= 18 ) { 
        allowedForElection.push(citizens[i]); 
    }
    else { 
        notAllowed.push(citizens[i])
    }
}

console.log(allowedForElection);
console.log(notAllowed);
