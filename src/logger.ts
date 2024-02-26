import { Logable } from "./logable";

export class Logger{
    info(value: Logable){
        console.log(`Info: ${value.toString()}`);
    }

    error (value:Logable){
        console.log(`error ${value.toString()}`);
        //write to do
        //email
    }
    
}

for(let i=0; i<1000; i++){
    console.log(i);
}