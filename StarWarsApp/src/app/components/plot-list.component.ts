import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlotStore } from '../stores/plot.store';
import { Plot } from '../models/plot';
import { Subscription } from 'rxjs';

@Component({
    selector: 'plot-list',
    templateUrl: './plot-list.component.html' 
})
export class PlotListComponent implements OnInit, OnDestroy {

    private sub: Subscription;
    public plots: Plot[];

    constructor(public router: Router, public plotStore: PlotStore) {}

    public ngOnInit(){
        this.sub = this.plotStore.plots.subscribe(
           res => this.plots = res
        );
    }

    public ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public createPlot(){
        this.router.navigate(['plots/create']);
    }
}