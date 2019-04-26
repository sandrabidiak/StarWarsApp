import { Component, OnInit } from '@angular/core';
import { PlotStore } from '../stores/plot.store';
import { Router, ActivatedRoute } from '@angular/router';
import { Plot } from '../models/plot';
import { Title } from '@angular/platform-browser';
import { first } from 'rxjs/operators';

@Component({
    selector: 'plot-detail',
    templateUrl: './plot-detail.component.html' 
})
export class PlotDetailComponent implements OnInit {

    public plotId: number;
    public title: string;
    public description: string;  
  

    constructor(public router: Router, public plotStore: PlotStore, public activatedRoute: ActivatedRoute) {}

    public ngOnInit() {
        this.plotId = this.activatedRoute.snapshot.params['id'] ? +this.activatedRoute.snapshot.params['id'] : undefined;
        if(this.plotId){
            this.plotStore.plots.pipe(first()).subscribe(
                (res) => {
                    let plot = res.find(plot => plot.id === this.plotId) 
                    this.title = plot.title;
                    this.description = plot.description;
                }
            );
        }
    }

    public back(){
        this.router.navigate(['plots']);
    }

    public savePlot(){
        if(!this.plotId){
            const plot = new Plot(this.title, this.description);
            this.plotStore.addPlot(plot);
            this.router.navigate(['plots']);
        }
        
    }

    public deletePlot(){
        this.plotStore.deletePlot(this.plotId);
        this.router.navigate(['plots']);
    }
}