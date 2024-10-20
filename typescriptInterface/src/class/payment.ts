import {hasFormatter} from "../interfaces/hasFormatter.js";

export class payment implements hasFormatter {
    constructor(
    readonly recipent:string,
    private details:string,
    public amount: number,
){}

    format() {
        return `${this.recipent} owes ${this.amount} for ${this.details}`
    
    }
    }
    