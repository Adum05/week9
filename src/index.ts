import { Employee } from "./employee";
import { Customer } from "./customer";
import { User } from "./user";
import { Logger } from "./logger";
import { Logable } from "./logable";

let employee= new Employee(`Aday`, new Date(), `1234`);
let customer= new Customer(`Janniel`, new Date(),);

let logger= new Logger();
logger.info(employee);
logger.info(customer);

let logable: Logable = {
    toString() {
        return'It worked'
    }
    
}



