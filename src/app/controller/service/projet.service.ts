import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Projet} from '../model/projet.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private url = environment.baseUrl + 'projet/';
  private _items: Array<Projet>;
  private _selected: Projet;
  private _selectes: Array<Projet>;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Array<Projet>> {
    return this.http.get<Array<Projet>>(this.url);
  }

  public findByClientId(clientId: number): Observable<Array<Projet>> {
    console.log('lien -->' + this.url + 'client/id/' + clientId);
    return this.http.get<Array<Projet>>(this.url + 'client/id/' + clientId);
  }


  get selectes(): Array<Projet> {
    return this._selectes;
  }

  set selectes(value: Array<Projet>) {
    this._selectes = value;
  }

  get items(): Array<Projet> {
    return this._items;
  }

  set items(value: Array<Projet>) {
    this._items = value;
  }

  get selected(): Projet {
    return this._selected;
  }

  set selected(value: Projet) {
    this._selected = value;
  }
}
