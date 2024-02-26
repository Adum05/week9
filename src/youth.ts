import { Player } from "./player";

export class Youth extends Player{
    youthPotential?: number;
    
    constructor(name: string, overall: number, youthPotential: number){
        super(name, overall);
        this.youthPotential= youthPotential
    }

    override greet(value: string){
        super.greet(`Youth ${value}`);
    }

    override toString(): string {
        return `= ${this.getType()} - ${this.name}, ${this.overall}`
    }    
}