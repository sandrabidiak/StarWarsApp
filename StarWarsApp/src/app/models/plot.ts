export class Plot {
    private static idCounter: number = 1;
    public id: number;
    constructor(public title: string, public description: string) {
        this.id = Plot.idCounter;
        Plot.idCounter++;
    }
}