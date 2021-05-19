import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EtatLot} from '../model/etat-lot.model';

@Injectable({
  providedIn: 'root'
})
export class EtatLotService {

  private url = environment.baseUrl + 'etatlot/';
  private _items: Array<EtatLot>;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<EtatLot>> {
    return this.http.get<Array<EtatLot>>(this.url);
  }

  get items(): Array<EtatLot> {
    return this._items;
  }

  set items(value: Array<EtatLot>) {
    this._items = value;
  }
}
