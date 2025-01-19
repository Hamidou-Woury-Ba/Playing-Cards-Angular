import { MonsterType } from "../utils/monster.utils";

export class Monster{
    name : string = "Monster";
    image : string = "/pic.jpg";
    type : MonsterType = MonsterType.ELECTRIC;
    hp : number = 40;
    figureCaption : string = "N°001 Monster";
    attackName : string = "Geo Impact";
    attackStrength : number = 60;
    attackDescription : string = "Lance une attaque de pierre sur l'ennemi";     
}