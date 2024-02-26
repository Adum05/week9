import { Logable } from "./logable";

export class ReadytoPlay{
    readytoPlay(value:Logable){
        console.log(`Ready to play: Yes ${value.toString()}`)
    }
    notReadytoPlay(value:Logable){
        console.log(`Ready to play : No ${value.toString()}`)
    }
}