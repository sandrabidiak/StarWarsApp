import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet';
import { map } from 'rxjs/operators';

@Injectable()
export class StarWarsService {
    private readonly baseUrl = 'https://swapi.co/api/' 
    constructor(private http: HttpClient) {}

    public getCharacters(name: string): Observable<Character[]> {
        return this.http.get<any>(this.baseUrl + 'people/?search=' + name)
            .pipe(map(
                res => res.results
        ));
    }

    public getPlanets(name: string): Observable<Planet[]> {
        return this.http.get<any>(this.baseUrl + 'planets/?search=' + name)
            .pipe(map(
                res => res.results
        ));
    }

}