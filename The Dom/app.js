var me = {
    name: 'folake',
    age: 40,
    speak: function (text) {
        console.log(text);
    },
    spend: function (a) {
        console.log('I spent ', amount);
        return amount;
    }
};
var greetPerson = function (person, isPerson) {
    console.log('hello', person.name);
};
greetPerson(name, 'shaun');
//classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes ").concat(this.amount, " for ").concat(details);
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('mario', 'work on the mario website', 250);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
// when we add ! mark  it means we are saying that we know it exist that it does not need to throw an error
var anchor = document.querySelector('a');
//or we can write it like 
// if (anchor){
//     console.log(anchor.href);
// }
// console.log(anchor.href)
// //when we hover it it tell us it is a html form element
// const form = document.querySelector("form")!;
//when we have more than one form
var form = document.querySelector(".new-item-form");
console.log(form.children);
//inputs how to select the different forms with class and id
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
