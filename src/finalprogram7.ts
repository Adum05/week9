import { Data } from "./program7b";


class RedBullRow implements Identity{
    id: number;
    name: string;

    constructor(id: number,  name: string){
      this.id = id;
      this.name = name;
    }
  }

let data = new Data<RedBullRow>();

let RedBullRow1= new RedBullRow(1, 'Max Verstappen')
let RedBullRow2= new RedBullRow(10, 'Checo Perez')

data.add(RedBullRow1)
data.add(RedBullRow2)

console.log(data.get(1))

data.update(55, {name: 'Carlos Sainz'})
console.log(data.get(1))

data.delete(RedBullRow2)
console.log(data.get(2))




