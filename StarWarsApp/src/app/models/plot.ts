import { Character } from './character';
import { Planet } from './planet';

export class Plot {
    private static idCounter: number = 1;
    public id: number;
    constructor(public title: string, public description: string, public characters: Character[], public planets: Planet[]) {
        this.id = Plot.idCounter;
        Plot.idCounter++;
    }
}