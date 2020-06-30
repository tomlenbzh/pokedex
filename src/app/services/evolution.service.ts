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

// const evoChain = [];
//           let evoData = evolutionData.chain;

//           console.log('evoData:', evoData);

//           do {

//             if (!evoData.hasOwnProperty('evolves_to')) {
//               console.log('NO MORE EVOLUTION');
//               break;
//             }

//             const evoDetails = evoData.evolution_details[0];
//             const splitUrl = evoData.species.url.split('/');
//             console.log('splitUrl', splitUrl);

//             evoChain.push({
//               species_name: evoData.species.name,
//               species_id: splitUrl[splitUrl.length - 2],
//               min_level: !evoDetails ? 1 : evoDetails.min_level,
//               trigger_name: !evoDetails ? null : evoDetails.trigger.name,
//               item: !evoDetails ? null : evoDetails.item
//             });

//             evoData = evoData.evolves_to[0];

//             console.log('EVO CHAIN:', evoChain);

//           } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
