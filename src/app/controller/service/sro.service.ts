import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sro} from '../model/sro.model';

@Injectable({
  providedIn: 'root'
})
export class SroService {

  private url = environment.baseUrl + 'sro/';
  private _items: Array<Sro>;
  private _selected: Sro;
  private _selectes: Array<Sro>;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Array<Sro>> {
    return this.http.get<Array<Sro>>(this.url);
  }

  get items(): Array<Sro> {
    return this._items;
  }

  set items(value: Array<Sro>) {
    this._items = value;
  }

  get selected(): Sro {
    return this._selected;
  }

  set selected(value: Sro) {
    this._selected = value;
  }

  get selectes(): Array<Sro> {
    return this._selectes;
  }

  set selectes(value: Array<Sro>) {
    this._selectes = value;
  }
}
