import { Logable } from "./logable";
import { Payable } from "./payable";

export abstract class User implements Logable{
    name?: string;
    bday?: Date;

    constructor(name: string, bday: Date){
        this.name= name
        this.bday= bday
    }

    greet(value: string) {
        console.log(`${value} ${this.name}`);
    }

    abstract getType(): string 
    
}