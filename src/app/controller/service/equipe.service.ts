import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Equipe} from '../model/equipe.model';
import {EtatEquipe} from '../model/etat-equipe.model';
import {Collaborateur} from '../model/collaborateur.model';
import {CollaborateurService} from './collaborateur.service';
import {EquipeVO} from '../model/equipe-vo.model';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private url = environment.baseUrl + 'equipe/';
  private _items: Array<Equipe>;
  private _selected: Equipe;
  private _selectes: Array<Equipe>;
  private _equipeVO: EquipeVO;

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;
  constructor(private http: HttpClient) { }

  public findAll(): Observable<Array<Equipe>> {
    return this.http.get<Array<Equipe>>(this.url);
  }
  public findByCode(): Observable<Equipe>{
    return this.http.get<Equipe>(this.url + 'code/' + this.selected.code);
  }
  public findByResponsableCode(): Observable<Equipe>{
    return this.http.get<Equipe>(this.url + 'collaborateur/code/' + this.selected.responsable.code);
  }
  public findByEtatEquipe(): Observable<Array<Equipe>>{
    return this.http.get<Array<Equipe>>(this.url + 'etatEquipeCode/' + this.selected.etatEquipe.code);
  }
  public save(): Observable<Equipe> {
    return this.http.post<Equipe>(this.url, this.selected);
  }
  public search(): Observable<Array<Equipe>> {
    return this.http.post<Array<Equipe>>(this.url + 'search' , this.equipeVO);
  }

  public edit(): Observable<Equipe> {
    return this.http.put<Equipe>(this.url, this.selected);
  }
  public deleteById(): Observable<number>{
    return this.http.delete<number>(this.url + 'id/' + this.selected.id);
  }

  public deleteByCode(): Observable<number> {
    return this.http.delete<number>(this.url + 'code/' + this.selected.code);
  }

  public deleteMultipleByCode(): Observable<number> {
    return this.http.post<number>(this.url + 'delete-multiple-by-code' , this.selectes);
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

  get items(): Array<Equipe> {
    return this._items;
  }

  set items(value: Array<Equipe>) {
    this._items = value;
  }

  get selected(): Equipe {
    return this._selected;
  }

  set selected(value: Equipe) {
    this._selected = value;
  }

  get selectes(): Array<Equipe> {
    return this._selectes;
  }

  set selectes(value: Array<Equipe>) {
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

  get equipeVO(): EquipeVO {
    if ( this._equipeVO == null){
      this._equipeVO = new EquipeVO();
    }
    return this._equipeVO;
  }

  set equipeVO(value: EquipeVO) {
    this._equipeVO = value;
  }
}
