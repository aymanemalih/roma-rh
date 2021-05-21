import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {ProjetEquipe} from '../model/projet-equipe.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjetEquipeService {
  get items(): Array<ProjetEquipe> {
    return this._items;
  }

  set items(value: Array<ProjetEquipe>) {
    this._items = value;
  }

  private url = environment.baseUrl + 'projetequipe/';
  private _items: Array<ProjetEquipe>;
  private _selected: ProjetEquipe;
  private _selectes: Array<ProjetEquipe>;

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;

  get selected(): ProjetEquipe {
    if (this._selected == null) {
      this._selected = new ProjetEquipe();
    }
    return this._selected;
  }

  set selected(value: ProjetEquipe) {
    this._selected = value;
  }

  get selectes(): Array<ProjetEquipe> {
    return this._selectes;
  }

  set selectes(value: Array<ProjetEquipe>) {
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

  constructor(private http: HttpClient) { }

  public findByProjetCode(code: string): Observable<Array<ProjetEquipe>> {
    return this.http.get<Array<ProjetEquipe>>(this.url + 'projet/code/' + code);
  }

  public deleteByCode(): Observable<number> {
    return this.http.delete<number>(this.url + 'id/' + this.selected.id);
  }

  public deleteMultipleByCode(): Observable<number> {
    return this.http.post<number>(this.url + 'multiples-codes', this.selectes);
  }

  public findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  public deleteIndexById(id: number) {
    this.items.splice(this.findIndexById(id), 1);
  }

  public deleteMultipleIndexById() {
    for (const item of this.selectes) {
      this.deleteIndexById(item.id);
    }
  }

}
