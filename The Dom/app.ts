//interfaces
interface isPerson{
    name:string;
    age:number,
    speak(a:string):void;
    spend(a:string):number;

}

const me:isPerson = {
    name : 'folake',
    age: 40,
    speak(text:string):void {
        console.log(text);

    },
     spend(a:string):number {
        console.log('I spent ', amount);
        return amount;
    }

};

const greetPerson = (person, isPerson) =>{
 console.log('hello', person.name)    
}

greetPerson (name, 'shaun')


//classes
class Invoice {
    readonly client:string;
    private details:string;
    public amount: number;




constructor(c:string, d: string, a:number) {
    this.client = c;
    this. details = d;
    this.amount = a;

}

format() {
    return `${this.client} owes ${this.amount} for ${details}`

}
}

const invOne = new Invoice ('mario', 'work on the mario website',250);
const invTwo = new Invoice('mario', 'work on the mario website',250);


let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv =>{
    console.log(inv.client, inv.amount, inv.format());
})












// when we add ! mark  it means we are saying that we know it exist that it does not need to throw an error
const anchor = document.querySelector('a')!;
//or we can write it like 
// if (anchor){
//     console.log(anchor.href);
// }
// console.log(anchor.href)


// //when we hover it it tell us it is a html form element
// const form = document.querySelector("form")!; 
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();
console.log(
    type.value,
    tofrom.value,
    details.value, 
    amount.valueAsNumber
);


})