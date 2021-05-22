import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategorieTache} from '../model/categorie-tache.model';
import {CategorieGroupeTache} from '../model/categorie-groupe-tache.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieTacheService {
  get selected(): CategorieTache {
    return this._selected;
  }

  set selected(value: CategorieTache) {
    this._selected = value;
  }
  get selectes(): Array<CategorieTache> {
    return this._selectes;
  }

  set selectes(value: Array<CategorieTache>) {
    this._selectes = value;
  }
  private url = environment.baseUrl + 'categorieTache/';
  // tslint:disable-next-line:variable-name
  private _items: Array<CategorieTache>;
  private _selected: CategorieTache;
  private _selectes: Array<CategorieTache>;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<CategorieTache>> {
    console.log(this.url);
    return this.http.get<Array<CategorieTache>>(this.url);
  }

  get items(): Array<CategorieTache> {
    return this._items;
  }

  set items(value: Array<CategorieTache>) {
    this._items = value;
  }

  public findByCategorieGroupeTacheCode(c: CategorieGroupeTache) {
    console.log('lien -->' + this.url + 'codeCategorieGroupeTache/' + c.code);
    return this.http.get<Array<CategorieTache>>(this.url + 'codeCategorieGroupeTache/' + c.code);
  }
}

