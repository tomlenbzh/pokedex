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

  constructor(private http: HttpClient) {
    this.apiUrl = `https://pokeapi.co/api/v2`;
  }

  // Get all generations
  getPokemonGenerations(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/generation/`);
  }

  // Get all pokemons informations
  fetchAllPokemons(apiUrl: string): Observable<any> {
    return this.http.get<any>(apiUrl);
  }

  // Get 1 pokemon information
  fetchPokemonInformation(pokemon: any): Observable<any> {
    return this.http.get<any>(pokemon.url);
  }

  // Get pokemon details
  fetchPokemonDetails(id: number): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }

  // Get Pokemon images
  fetchPokemonImage(pokemonId: number): Observable<any> {
    return this.http.get<any>(`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`);
  }

  fetchPokemonAbility(apiUrl: string): Observable<any> {
    return this.http.get<any>(apiUrl);
  }
}
