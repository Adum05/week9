import { Logable } from "./logable";

export abstract class Team implements Logable{
    name?: string;
    nextmatch?: Date;

    constructor(name:string, nextmatch: Date){
        this.name= name
        this.nextmatch= nextmatch
    }

    greet(value: string){
        console.log(`${value} ${this.name}`)
    }

    abstract getType(): string  
}