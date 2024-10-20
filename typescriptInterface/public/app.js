"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const me = {
    name: 'folake',
    age: 40,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
const Invoice_js_1 = require("./class/Invoice.js");
const payment_js_1 = require("./class/payment.js");
const js_1 = require("./class/listTemplate/js)");
let docOne;
let docTwo;
docOne = new Invoice_js_1.Invoice("folake", "web design", 300);
docTwo = new Invoice_js_1.Invoice("folake", "web design", 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docOne);
const invOne = new Invoice_js_1.Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice_js_1.Invoice('mario', 'work on the mario website', 250);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new=item-form');
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector('ul');
const list = new js_1.listTemplate;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice_js_1.Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment_js_1.payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
//generic
let addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docone = addUID({ name: "folakemi", age: 56 });
//let docTwo = addUID ('hello')
console.log(docone.age);
const docThree = {
    uid: 1,
    resourcesName: 'person',
    data: { name: 'shaun' }
};
const docFour = {
    uid: 2,
    resourcesName: 'shoppingList',
    "data": ['bread', 'butter'],
};
console.log(docThree, docFour);
//emun
var ResourcesType;
(function (ResourcesType) {
    ResourcesType[ResourcesType["BOOK"] = 0] = "BOOK";
    ResourcesType[ResourcesType["AUTHOR"] = 1] = "AUTHOR";
    ResourcesType[ResourcesType["FILM"] = 2] = "FILM";
})(ResourcesType || (ResourcesType = {}));
const docTree = {
    uid: 1,
    resourceType: ResourcesType.BOOK,
    data: { name: 'shaun' }
};
const docFour = {
    uid: 2,
    resourcesName: 'shoppingList',
    "data": ['bread', 'butter']
};
