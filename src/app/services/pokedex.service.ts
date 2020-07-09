import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  apiUrl: string;
  version: string;
  selectedPokemon: any;
  currentPage: number;

  constructor(private http: HttpClient) {
    this.apiUrl = `https://pokeapi.co/api/v2`;
    this.currentPage = 1;
  }

  // Get all generations
  public getPokemonGenerations(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/generation/`);
  }

  // Get all pokemons informations
  public fetchAllPokemons(apiUrl: string): Observable<any> {
    return this.http.get<any>(apiUrl);
  }

  // Get 1 pokemon information
  public fetchPokemonInformation(pokemon: any): Observable<any> {
    return this.http.get<any>(pokemon.url);
  }

  // Get pokemon details
  public fetchPokemonDetails(id: number): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }

  // Get Pokemon images
  public fetchPokemonImage(pokemonId: number): Observable<any> {
    return this.http.get<any>(`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`);
  }

  public fetchPokemonAbility(apiUrl: string): Observable<any> {
    return this.http.get<any>(apiUrl);
  }

  public fetchPokemonRange(apiUrl: string): Observable<any> {
    return this.http.get<any>(apiUrl);
  }

  public hasStorageSearchInfo(): boolean {
    return localStorage.getItem('searchInfo') === null ? false : true;
  }

  public setStorageSearchInfo(pokemonList: any): void {
    localStorage.setItem('searchInfo', JSON.stringify(pokemonList));
  }

  public getStorageSearchInfo(): any {
    return JSON.parse(localStorage.getItem('searchInfo'));
  }
}
