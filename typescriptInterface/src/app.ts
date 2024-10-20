//interfaces
interface isPerson{
    name:string;
    age:number,
    speak(a:string):void;
    spend(a:number):number;

}

const me:isPerson = {
    name : 'folake',
    age: 40,
    speak(text:string):void {
        console.log(text);

    },
     spend(amount: number):number {
        console.log('I spent ', amount);
        return amount;
    }
};


const greetPerson = (person: isPerson) =>{
 console.log('hello', person.name)    
}

greetPerson (me)









import{Invoice} from './class/Invoice.js';
import{payment} from './class/payment.js';
import{hasFormatter} from './interfaces/hasFormatter.js';
import{listTemplate} from './class/listTemplate/js)'

let docOne: hasFormatter;
let docTwo: hasFormatter;

docOne = new Invoice("folake", "web design", 300);
docTwo = new Invoice("folake", "web design", 300)


let docs:hasFormatter[]=[];
docs.push(docOne);
docs.push(docTwo);

console.log(docOne)

const invOne = new Invoice ('mario', 'work on the mario website',250);
const invTwo = new Invoice('mario', 'work on the mario website',250);


let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv =>{
    console.log(inv.client, inv.amount, inv.format());
})


const form = document.querySelector('.new=item-form') as HTMLFormElement ;

const type = document.querySelector("#type") as HTMLInputElement;
const toFrom= document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;


const ul = document.querySelector('ul')!;
const list = new listTemplate




form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();

let doc:hasFormatter;
if (  type.value === 'invoice') {
    doc = new Invoice(  tofrom.value, details.value, amount.valueAsNumber );
}else{
    doc = new payment (  tofrom.value, details.value, amount.valueAsNumber );
}

console.log(
    type.value,
    tofrom.value,
    details.value, 
    amount.valueAsNumber
);


})



//generic
let addUID = < T extends {name: string} > (obj: T)=>{
    let uid = Math.floor(Math.random()* 100);
    return {...obj, uid};

}

let docone = addUID ({name:"folakemi", age:56});
//let docTwo = addUID ('hello')

console.log(docone.age)  ;

//with interface
interface Resources<T> {
    uid:number;
    resourcesName:string;
    data:T;
}
const docThree: Resources<object>= {
    uid:1,
    resourcesName:'person',
    data:{name: 'shaun'}
}
const docFour:Resources<string[]> = {
    uid:2,
    resourcesName:'shoppingList',
   "data": ['bread', 'butter'],
}

console.log(docThree, docFour)








//emun

enum ResourcesType { BOOK, AUTHOR, FILM}

interface Resources<T> {
    uid:number;
    resourceType:ResourcesType;
    data:T;
}
const docTree: Resources<object>= {
    uid:1,
    resourceType:ResourcesType.BOOK,
    data:{name: 'shaun'}
}
const docFour:Resources<string[]> = {
    uid:2,
    resourcesName:'shoppingList',
   "data": ['bread', 'butter']