import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvolutionService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `https://pokeapi.co/api/v2`;
  }

  // Get all generations
  public getEvolutionTree(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  public getAllEvolutions(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/evolution-chain/?offset=0&limit=419`);
  }

  public getPokemonEvolutionItem(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
