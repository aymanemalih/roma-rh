import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategorieGroupeTache} from '../model/categorie-groupe-tache.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieGroupeTacheService {
  private url = environment.baseUrl + 'categorieGroupeTache/';
  private _items: Array<CategorieGroupeTache>;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<CategorieGroupeTache>> {
    return this.http.get<Array<CategorieGroupeTache>>(this.url);
  }

  get items(): Array<CategorieGroupeTache> {
    return this._items;
  }

  set items(value: Array<CategorieGroupeTache>) {
    this._items = value;
  }
}
