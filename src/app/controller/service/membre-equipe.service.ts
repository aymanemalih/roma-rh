import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MembreEquipe} from '../model/membre-equipe';

@Injectable({
  providedIn: 'root'
})
export class MembreEquipeService {
  private url = environment.baseUrl + 'membreEquipe/';
  private _items: Array<MembreEquipe>;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<MembreEquipe>> {
    return this.http.get<Array<MembreEquipe>>(this.url);
  }

  get items(): Array<MembreEquipe> {
    return this._items;
  }

  set items(value: Array<MembreEquipe>) {
    this._items = value;
  }
}
