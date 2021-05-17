import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Collaborateur} from '../model/collaborateur.model';


@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {
  private url = environment.baseUrl + 'collaborateur/';
  private _items: Array<Collaborateur>;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<Collaborateur>> {
    return this.http.get<Array<Collaborateur>>(this.url);
  }

  get items(): Array<Collaborateur> {
    return this._items;
  }

  set items(value: Array<Collaborateur>) {
    this._items = value;
  }
}
