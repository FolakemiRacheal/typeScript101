//array and object
 let names = ['folake', 'mario', 'isaac'];

 names.push ('esther');

 //you can't change it from an array to number or string  
//names.push(3);
//names.push[3];;



let numbers = [10, 30, 50,];

numbers.push(23);

//but you can declare it from the begining if you want it to mix with numbers or boolean or string 
let mixed = ['ken', 4, 'chun-li', 8, ];
mixed.push('folake');
mixed.push(10); 



// object
// the same rule of the arrays also apply to object
let ninija = {
    name:"folake",
    belt: "blue",


}


//Explicit types
let character:string;
let age:number;
let isLoggedIn:boolean;

//can not be reassigned to a string or antdatatypes
//age = "folake"

//isLoggedIn
isLoggedIn = true;

//arrays
let ninja: string[]=[];
ninja .push("lekan");

let mix: (string|number| boolean)[]=[];
mix.push('hello');
mix.push(48);
mix.push(true);
console.log(mix);


let uid: string|number;
uid = "123";
uid = 123;


//object
let ninjaOne = object;
ninjaOne = {name:'folake', age:30};

let ninjaTwo:{
    name:string,
   age:number,
    beltColor:string
}
ninjaTwo = {name:'moses',age:60, beltColor:'blue'}





let num : any =25;

num = true;
console.log(num)
num = 'hello';
console.log(num)
num:{name:'louis'};
console.log(num)

let mixture:any[] = []
mixture.push('lucy');
mixture.push(false);
console.log(mixture); 

let group: {name:any, age:any};
group = {name:'esther', age:40};
console.log(group);

group = {name:'30', age: 'flash'};
console.log(group);
 


 












//function basics

let greeting : Function;

greeting = ()=>{
    console.log('hello, again')
}

//c can be a number or a string
// to make it optional we can pass a ? in front of c
// we cant use the default value and the paramater together (c?:number | string =10) X
const add = (a:number, b:number, c?:number | string )=>{
    console.log(a + b);
    console.log(c);
}
add(5,10,20)


//it will always return a number
const minus = (a:number, b:number): number =>{
    return a + b; 
}
let result = minus(10, 7);







//Type Aliases
//remaining and puting it in avariable instead of repeating lines of same code over and over
type StringOrNum = string | number;
type objWithName = {name:string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item:string)=>{
    console.log(`${item} had a uid of ${uid}`);

}
const greet = (user:objWithName)=>{
    console.log(`${user.name} says hello`)
}

const greetAgain = (user:objWithName)=>{
    console.log(`${user.name} says hello`)
}




//function signature
let calc : (a: number, b:number, c:string)=> number

calc = (numOne: number, numTwo: number, action: string)=>{
    if (action === "add") {
        return numOne + numTwo;
    }else{
        return numOne - numTwo
    }
}

//example2
let logDetail : (obj: {name: string, age: number})=> void;

    logDetail = (ninja: {name: string, age: number})=>{
        console.log(`${ninja.name} is ${ninja.age} year old`); 
    }
