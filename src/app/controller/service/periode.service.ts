import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Periode} from '../model/periode.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeriodeService {
  private url = environment.baseUrl + 'periode/';
  private _items: Array<Periode>;
  private _selected: Periode;
  private _selectes: Array<Periode>;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<Periode>> {
    return this.http.get<Array<Periode>>(this.url);
  }

  get items(): Array<Periode> {
    return this._items;
  }

  set items(value: Array<Periode>) {
    this._items = value;
  }


  get selectes(): Array<Periode> {
    return this._selectes;
  }

  set selectes(value: Array<Periode>) {
    this._selectes = value;
  }

  get selected(): Periode {
    return this._selected;
  }

  set selected(value: Periode) {
    this._selected = value;
  }
}
