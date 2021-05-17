import { Injectable } from '@angular/core';
import {Collaborateur} from '../model/collaborateur.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {
  private url = environment.baseUrl + 'collaborateur/';

  private _items: Array<Collaborateur>;
  private _selected: Collaborateur;
  private _selectes: Array<Collaborateur>;
  constructor() { }
  get selectes(): Array<Collaborateur> {
    return this._selectes;
  }

  set selectes(value: Array<Collaborateur>) {
    this._selectes = value;
  }

  get items(): Array<Collaborateur> {
    return this._items;
  }

  set items(value: Array<Collaborateur>) {
    this._items = value;
  }

  get selected(): Collaborateur {
    return this._selected;
  }

  set selected(value: Collaborateur) {
    this._selected = value;
  }
}
