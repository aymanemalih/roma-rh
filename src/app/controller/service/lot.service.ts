import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Lot} from '../model/lot.model';

@Injectable({
  providedIn: 'root'
})
export class LotService {
  private url = environment.baseUrl + 'lot/';
  private _items: Array<Lot>;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<Lot>> {
    return this.http.get<Array<Lot>>(this.url);
  }

  get items(): Array<Lot> {
    return this._items;
  }

  set items(value: Array<Lot>) {
    this._items = value;
  }
}
