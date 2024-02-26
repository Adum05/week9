export class Player{
    name?: string;
    overall?: number;

    constructor(name: string, overall: number){
        this.name= name
        this.overall= overall
    }

    greet(value: string){
        console.log(`${value} ${this.overall}`)
    }

    getType(): string{
        return `Player:`
    }
}