import { Injectable } from '@angular/core';
import {Facture} from '../model/facture.model';
import {HttpClient} from '@angular/common/http';
import {FactureVO} from '../model/facture-vo.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private url = environment.baseUrl + 'facture/';
  private _items: Array<Facture>;
  private _selected: Facture;
  private _selectes: Array<Facture>;
  private _factureVO: FactureVO;

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;

  constructor(private http: HttpClient) {
  }

  public findByClientCode(code: string): Observable<Array<Facture>> {
    return this.http.get<Array<Facture>>(this.url + 'client/code/' + code);
  }

  public findAll(): Observable<Array<Facture>> {
    return this.http.get<Array<Facture>>(this.url);
  }

  public save(): Observable<Facture> {
    return this.http.post<Facture>(this.url, this.selected);
  }

  public edit(): Observable<Facture> {
    return this.http.put<Facture>(this.url, this.selected);
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

  public search(): Observable<Array<Facture>> {
    return this.http.post<Array<Facture>>(this.url + 'search', this.factureVO);
  }

  get factureVO(): FactureVO {
    if (this._factureVO == null) {
      this._factureVO = new FactureVO();
    }
    return this._factureVO;
  }

  set factureVO(value: FactureVO) {
    this._factureVO = value;
  }

  get items(): Array<Facture> {
    return this._items;
  }

  set items(value: Array<Facture>) {
    this._items = value;
  }

  get selected(): Facture {
    if (this._selected == null) {
      this._selected = new Facture();
    }
    return this._selected;
  }

  set selected(value: Facture) {
    this._selected = value;
  }

  get selectes(): Array<Facture> {
    return this._selectes;
  }

  set selectes(value: Array<Facture>) {
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
