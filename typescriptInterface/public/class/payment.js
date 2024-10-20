"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment = void 0;
class payment {
    constructor(recipent, details, amount) {
        this.recipent = recipent;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipent} owes ${this.amount} for ${this.details}`;
    }
}
exports.payment = payment;
