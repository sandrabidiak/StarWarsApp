import { Injectable } from '@angular/core';
import { Plot } from '../models/plot';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PlotStore {
    private plotsSubject: BehaviorSubject<Plot[]> = new BehaviorSubject<Plot[]>([]);
    public plots: Observable<Plot[]> = this.plotsSubject.asObservable();

    public addPlot(plot: Plot) {
        let currentPlots = this.plotsSubject.value; 
        currentPlots.push(plot);
        this.plotsSubject.next(currentPlots);
    }

    public deletePlot(plotId: number) {
        let updatedPlots = this.plotsSubject.value;
        updatedPlots = updatedPlots.filter(plot => plot.id !== plotId)
        this.plotsSubject.next(updatedPlots);
    }
}