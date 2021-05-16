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
  private url = environment.baseUrl + 'categorieTache/';
  private _items: Array<CategorieTache>;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<CategorieTache>> {
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

