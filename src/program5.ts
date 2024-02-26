import { Youth } from "./youth";
import { Veteran } from "./veteran";
import { Player } from "./player";
import { Team } from "./team";
import { ReadytoPlay } from "./readytoplay";
import { Logable } from "./logable";

let veteran = new Veteran(`Luka Modrić`, 87, 70);
let youth = new Youth(`Arda Güler`, 79, 95);

let readytoPlay= new ReadytoPlay();
readytoPlay.readytoPlay(youth)
readytoPlay.notReadytoPlay(veteran)

