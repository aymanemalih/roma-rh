import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EtatGroupeTache} from '../model/etat-groupe-tache.model';

@Injectable({
  providedIn: 'root'
})
export class EtatGroupeTacheService {
  private url = environment.baseUrl + 'etatGroupeTache/';
  private _items: Array<EtatGroupeTache>;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<EtatGroupeTache>> {
    return this.http.get<Array<EtatGroupeTache>>(this.url);
  }

  get items(): Array<EtatGroupeTache> {
    return this._items;
  }

  set items(value: Array<EtatGroupeTache>) {
    this._items = value;
  }
}
