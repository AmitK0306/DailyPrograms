console.log('Hello world from JS File');

const name ='Testing';
const a=2.4;
const b=5;
const c=null;
const d=undefined;

console.log (typeof d);

console.log('My name is' + name + 'and i have' + b);
console.log(`my name is ${name } and rest values are ${a}`);


const lastname = 'abc, asf, pqr, lmn';

console.log(lastname.split(', '));

const awer = ['apple','mango','guava'];

awer.push ('lemon');
awer.unshift('chikus');
console.log(awer);
console.log(name.toLowerCase ());
console.log(name.toUpperCase());

const x=15;

const color = x > 10 ? 'red1' : 'blue1';
console.log (color);

function Person (firstname1,lastName1,dob1){
    this.firstname = firstname1;
    this.lastName = lastName1;
    this.dob = dob1;
}


Person.prototype.getBirthYear = function() {
    return this.dob1.getFullYear;
}


Person.prototype.getFullName12 = function () {
    return `${this.firstname}  ${this.lastName}`;
}



const person1 = new Person('John','Doe','03-06-1980');

console.log(person1.getFullName12());


let userName = "Am\tit Kola\npe"
console.log(userName);
let a12 = 4 
abc = a12 ** 3;

console.log("Value of abc is "+abc);



let day = "tuesday"


switch (day){

    case ("Monday") :
        console.log ("Monday");
        break;
    default :
        console.log("Not a Monday");

}