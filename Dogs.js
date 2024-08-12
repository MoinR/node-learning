class Dog {
    name; 
    age; 
    color;

    constructor(name, age, color){
        this.name = name; 
        this.age = age; 
        this.color = color; 
    }
    getName() {         
        return "Hello Me ek Kutta hun, Mera naam he - " + this.name; 
    }

}

let tommy = new Dog("Mirza Plumber", 10, "Black"); 
console.log(tommy.getName());

let raju = new Dog("Tarik Masooda", 25, "Pilpila")
console.log(raju.getName());
