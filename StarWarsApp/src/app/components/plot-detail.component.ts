import { Component, OnInit } from '@angular/core';
import { PlotStore } from '../stores/plot.store';
import { Router, ActivatedRoute } from '@angular/router';
import { Plot } from '../models/plot';
import { Title } from '@angular/platform-browser';
import { first } from 'rxjs/operators';
import { Planet } from '../models/planet';
import { Character } from '../models/character';

@Component({
    selector: 'plot-detail',
    templateUrl: './plot-detail.component.html' 
})
export class PlotDetailComponent implements OnInit {

    public plotId: number;
    public title: string;
    public description: string;  
    public character: string = '';
    public planet: string = '';
    public characterResults: Character[] = [];
    public planetResults: Planet[] = [];
    public selectedCharacters: Character[] = [];
    public selectedPlanets: Planet[] =[];
    
    constructor(public router: Router, public plotStore: PlotStore, public activatedRoute: ActivatedRoute) {}

    public ngOnInit() {
        this.plotId = this.activatedRoute.snapshot.params['id'] ? +this.activatedRoute.snapshot.params['id'] : undefined;
        if(this.plotId){
            this.plotStore.plots.pipe(first()).subscribe(
                (res) => {
                    let plot = res.find(plot => plot.id === this.plotId) 
                    this.title = plot.title;
                    this.description = plot.description;
                    this.selectedCharacters = plot.characters;
                    this.selectedPlanets = plot.planets;
                }
            );
        }
    }

    public back(){
        this.router.navigate(['plots']);
    }

    public savePlot(){
        if(!this.plotId){
            const plot = new Plot(this.title, this.description, this.selectedCharacters, this.selectedPlanets);
            this.plotStore.addPlot(plot);
            this.router.navigate(['plots']);
        } else {
            this.plotStore.plots.pipe(first()).subscribe(
                (res) => {
                    let plot = res.find(plot => plot.id === this.plotId) 
                    plot.title = this.title;
                    plot.description = this.description;
                    plot.characters = this.selectedCharacters;
                    plot.planets = this.selectedPlanets;
                    this.plotStore.updatePlot(plot);
                    this.router.navigate(['plots']);
                }
            );
        }
        
    }

    public deletePlot(){
        this.plotStore.deletePlot(this.plotId);
        this.router.navigate(['plots']);
    }

    public getCharacters() {
        this.plotStore.getCharacters(this.character).subscribe(
            characters => {
                this.characterResults = characters
            }
        );
    }

    public getPlanets() {
        this.plotStore.getPlanets(this.planet).subscribe(
            planets => {
                this.planetResults = planets
            }
        );
    }

    public selectCharacter(c: Character){
        let found = this.selectedCharacters.find(
            char => char.url === c.url
        );
        if(!found){
            this.selectedCharacters.push(c);
        }
        
    }

    public selectPlanet(p: Planet){
        let found = this.selectedPlanets.find(
            planet => planet.url === p.url
        );
        if(!found){
            this.selectedPlanets.push(p);
        }
    }

    public removeCharacter(c: Character){
        this.selectedCharacters = this.selectedCharacters.filter(
            char => char.url !== c.url
        );
    }

    public removePlanet(p: Planet){
        this.selectedPlanets = this.selectedPlanets.filter(
            planet => planet.url !== p.url
        );
    }
}