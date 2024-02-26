import { User } from './user';

export class Customer extends User {
    customerNumber?: string;

    override greet(value: string) {
        super.greet(`Employee: ${value}`);
        //console.log('This is a new function')
        //console.log(`${value} ${this.name}`);
    }

    override getType(): string {
        return 'Customer';
    }

    override toString(): string {
        return `${this.getType()} - ${this.name}`
    }
}