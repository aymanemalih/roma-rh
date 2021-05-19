import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Entreprise} from "../model/entreprise.model";
import {EntrepriseVo} from '../model/entreprise-vo.model';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  private url = environment.baseUrl + 'entreprise/';
  private _items: Array<Entreprise>;
  private _selected: Entreprise;
  private _selectes: Array<Entreprise>;
  private _entrepriseVo: EntrepriseVo;

  get entrepriseVo(): EntrepriseVo {
    if(this._entrepriseVo == null){
      this._entrepriseVo = new EntrepriseVo();
    }
    return this._entrepriseVo;
  }

  set entrepriseVo(value: EntrepriseVo) {
    this._entrepriseVo = value;
  }

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<Entreprise>> {
    return this.http.get<Array<Entreprise>>(this.url);
  }

  public save(): Observable<Entreprise> {
    return this.http.post<Entreprise>(this.url, this.selected);
  }

  public edit(): Observable<Entreprise> {
    return this.http.put<Entreprise>(this.url, this.selected);
  }
  public findByCriteria(): Observable<Array<Entreprise>>{
    return this.http.post<Array<Entreprise>>(this.url + 'findByCriteria', this.entrepriseVo )
  }
  public deleteByCode(): Observable<number> {
    return this.http.delete<number>(this.url + 'code/' + this.selected.code);
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
    for (const item of this.selectes){
      this.deleteIndexById(item.id);
    }
  }

  get items(): Array<Entreprise> {
    return this._items;
  }

  set items(value: Array<Entreprise>) {
    this._items = value;
  }

  get selected(): Entreprise {
    return this._selected;
  }

  set selected(value: Entreprise) {
    this._selected = value;
  }

  get selectes(): Array<Entreprise> {
    return this._selectes;
  }

  set selectes(value: Array<Entreprise>) {
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
