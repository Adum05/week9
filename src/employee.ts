import { User } from './user';

export class Employee extends User {
	employeeCode?: string;

    constructor(name: string, bday: Date, employeeCode: string) {
        super(name, bday);
        this.employeeCode= employeeCode;
    }

    override greet(value: string) {
        super.greet(`Employee: ${value}`);
        //console.log('This is a new function')
        //console.log(`${value} ${this.name}`);
    }

    override getType(): string {
        return 'Employee';
    }

    override toString(): string {
        return `${this.getType()} - ${this.name}`
    }
}