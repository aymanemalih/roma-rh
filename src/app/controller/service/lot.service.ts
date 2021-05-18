import {Injectable} from '@angular/core';
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
    private _selected: Lot;
    private _selectes: Array<Lot>;

    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    constructor(private http: HttpClient) {
    }

    public findAll(): Observable<Array<Lot>> {
        return this.http.get<Array<Lot>>(this.url);
    }

  public findByProjetId(projetId: number) {
    console.log('lien -->' + this.url + 'projet/id/' + projetId);
    return this.http.get<Array<Lot>>(this.url + 'projet/id/' + projetId);
  }

    public save(): Observable<Lot> {
        return this.http.post<Lot>(this.url, this.selected);
    }

    public edit(): Observable<Lot> {
        return this.http.put<Lot>(this.url, this.selected);
    }

    public findByProjetCode(code: string): Observable<Array<Lot>> {
        return this.http.get<Array<Lot>>(this.url + 'projet/code/' + code);
    }

    public deleteByCode(): Observable<number> {
        return this.http.delete<number>(this.url + 'code/' + this.selected.code);
    }

    public deleteMultipleByCode(): Observable<number> {
        return this.http.post<number>(this.url + 'multiples-codes', this.selectes);
    }

    public findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    public deleteIndexById(id: number) {
        this.items.splice(this.findIndexById(id), 1);
    }

    public deleteMultipleIndexById() {
        for (const item of this.selectes) {
            this.deleteIndexById(item.id);
        }
    }

    get items(): Array<Lot> {
        return this._items;
    }

    set items(value: Array<Lot>) {
        this._items = value;
    }

    get selected(): Lot {
        return this._selected;
    }

    set selected(value: Lot) {
        this._selected = value;
    }

    get selectes(): Array<Lot> {
        return this._selectes;
    }

    set selectes(value: Array<Lot>) {
        this._selectes = value;
    }

    get createDialog(): boolean {
        return this._createDialog;
    }

    set createDialog(value: boolean) {
        this._createDialog = value;
    }

    get editDialog(): boolean {
        return this._editDialog;
    }

    set editDialog(value: boolean) {
        this._editDialog = value;
    }

    get viewDialog(): boolean {
        return this._viewDialog;
    }

    set viewDialog(value: boolean) {
        this._viewDialog = value;
    }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

}
