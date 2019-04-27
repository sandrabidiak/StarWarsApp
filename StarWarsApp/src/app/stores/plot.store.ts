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

    public updatePlot(updatedPlot: Plot) {
        let currentPlots = this.plotsSubject.value; 
        currentPlots = currentPlots.map(plot => {
            if(plot.id === updatedPlot.id){
                return updatedPlot;
            } else {
                return plot;
            }
        })
        this.plotsSubject.next(currentPlots);
    }

    public deletePlot(plotId: number) {
        let currentPlots = this.plotsSubject.value;
        currentPlots = currentPlots.filter(plot => plot.id !== plotId)
        this.plotsSubject.next(currentPlots);
    }
}