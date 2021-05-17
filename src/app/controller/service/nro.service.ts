import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Sro} from '../model/sro.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Nro} from '../model/nro.model';

@Injectable({
  providedIn: 'root'
})
export class NroService {


  private url = environment.baseUrl + 'nro/';
  private _items: Array<Nro>;
  private _selected: Nro;
  private _selectes: Array<Nro>;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Array<Nro>> {
    return this.http.get<Array<Nro>>(this.url);
  }


  get selectes(): Array<Nro> {
    return this._selectes;
  }

  set selectes(value: Array<Nro>) {
    this._selectes = value;
  }

  get items(): Array<Nro> {
    return this._items;
  }

  set items(value: Array<Nro>) {
    this._items = value;
  }

  get selected(): Nro {
    return this._selected;
  }

  set selected(value: Nro) {
    this._selected = value;
  }
}
