import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `https://pokeapi.co/api/v2`;
  }

  public getAllTypes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/type`);
  }

  public getType(typeId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/type/${typeId}`);
  }
}
