import { Logable } from "./logable";

export abstract class RealMadrid implements Logable{
    teamname?: string;
    nextmatch?: Date;

    constructor(name:string, nextmatch: Date){
        this.teamname= name
        this.nextmatch= nextmatch
    }

    greet(value: string){
        console.log(`${value} ${this.teamname}`)
    }

    abstract getType(): string  
}