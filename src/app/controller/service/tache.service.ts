import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tache} from '../model/tache.model';
import {TacheVo} from '../model/tache-vo.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private url = environment.baseUrl + 'tache/';
  private _items: Array<Tache>;
  private _selected: Tache;
  private _selectes: Array<Tache>;
  private _tacheVo: TacheVo;

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;

  constructor(private http: HttpClient) {
  }


  get tacheVo(): TacheVo {
    if (this._tacheVo == null){
      this._tacheVo = new TacheVo();
    }
    return this._tacheVo;
  }

  set tacheVo(value: TacheVo) {
    this._tacheVo = value;
  }

  public findAll(): Observable<Array<Tache>> {
    return this.http.get<Array<Tache>>(this.url);
  }

  public save(): Observable<Tache> {
    return this.http.post<Tache>(this.url, this.selected);
  }
  public search(): Observable<Array<Tache>>{
    return this.http.post<Array<Tache>>(this.url , this.tacheVo);
  }

  public edit(): Observable<Tache> {
    return this.http.put<Tache>(this.url, this.selected);
  }

  public findByGroupeTacheCode(code: string): Observable<Array<Tache>> {
    return this.http.get<Array<Tache>>(this.url + 'codeGroupeTache/' + code);
  }

  public deleteByCode(): Observable<number> {
    return this.http.delete<number>(this.url + 'code/' + this.selected.code);
  }

  public deleteMultipleByCode(): Observable<number> {
    return this.http.post<number>(this.url + 'delete-multiple-by-code', this.selectes);
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

  get items(): Array<Tache> {
    return this._items;
  }

  set items(value: Array<Tache>) {
    this._items = value;
  }

  get selected(): Tache {
    if (this._selected == null){
      this._selected = new Tache();
    }
    return this._selected;
  }

  set selected(value: Tache) {
    this._selected = value;
  }

  get selectes(): Array<Tache> {
    return this._selectes;
  }

  set selectes(value: Array<Tache>) {
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

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }
}
