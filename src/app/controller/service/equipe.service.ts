import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Equipe} from '../model/equipe.model';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private url = environment.baseUrl + 'equipe/';
  private _items: Array<Equipe>;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<Equipe>> {
    return this.http.get<Array<Equipe>>(this.url);
  }

  get items(): Array<Equipe> {
    return this._items;
  }

  set items(value: Array<Equipe>) {
    this._items = value;
  }
}
