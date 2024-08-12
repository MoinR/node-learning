class School { 
    static name = "Mahaveer"; 
    static address = "Danilimda, Ganv me j he"; 

    static getName(){ 
        return this.name;     
    }
    static getAddress(){
        return this.address
    } 
    getTotalCollectedFees(){
        return 1000; 
    }
}

// let name = School.getName(); 
// console.log(School.getName());

console.log(School.name);
