import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Commande} from '../model/commande.model';
import {Collaborateur} from '../model/collaborateur.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {
  private _url = environment.baseUrl + 'collaborateur/';
  private _items: Array<Collaborateur>;
  private _selected: Collaborateur;
  private _selectes: Array<Collaborateur>;

  private _createDialog: boolean;
  private _editDialog: boolean;

  private _viewDialog: boolean;
  private _submitted: boolean;

  constructor(private _http: HttpClient) { }

  public findAll(): Observable<Array<Collaborateur>> {
    return this._http.get<Array<Collaborateur>>(this._url);
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

  get selectes(): Array<Collaborateur> {
    return this._selectes;
  }

  set selectes(value: Array<Collaborateur>) {
    this._selectes = value;
  }

  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }




}
