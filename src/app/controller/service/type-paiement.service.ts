import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypePaiement} from '../model/type-paiement.model';

@Injectable({
  providedIn: 'root'
})
export class TypePaiementService {
  private url = environment.baseUrl + 'typePaiement/';
  private _items: Array<TypePaiement>;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<TypePaiement>> {
    return this.http.get<Array<TypePaiement>>(this.url);
  }

  get items(): Array<TypePaiement> {
    return this._items;
  }

  set items(value: Array<TypePaiement>) {
    this._items = value;
  }
}
