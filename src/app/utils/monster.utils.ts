export enum MonsterType {
    PLANT = 'plant',
    ELECTRIC = 'electric',
    FIRE = 'fire',
    WATER = 'water',
}

export interface IMonsterProperties {
    imageUrl : string,
    color : string
}

export const MonsterTypeProperties : {[key : string] : IMonsterProperties} = {
    [MonsterType.PLANT] : {
        imageUrl : '/plant.jpg',
        color : 'rgba(135, 255, 124)'
    },
    [MonsterType.ELECTRIC] : {
        imageUrl : '/electric.jpg',
        color : 'rgba(255, 255, 124)'
    },
    [MonsterType.FIRE] : {
        imageUrl : '/fire.jpg',
        color : 'rgba(255, 104, 104)'
    },
    [MonsterType.WATER] : {
        imageUrl : '/water.png',
        color : 'rgba(118, 234, 124)'
    },
}