import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GroupeTache} from '../model/groupe-tache.model';

@Injectable({
    providedIn: 'root'
})
export class GroupeTacheService {
    private url = environment.baseUrl + 'groupeTache/';
    private _items: Array<GroupeTache>;
    private _selected: GroupeTache;
    private _selectes: Array<GroupeTache>;

    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    constructor(private http: HttpClient) {
    }

    public findAll(): Observable<Array<GroupeTache>> {
        return this.http.get<Array<GroupeTache>>(this.url);
    }

    public save(): Observable<GroupeTache> {
        return this.http.post<GroupeTache>(this.url, this.selected);
    }

    public edit(): Observable<GroupeTache> {
        return this.http.put<GroupeTache>(this.url, this.selected);
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

    get items(): Array<GroupeTache> {
        return this._items;
    }

    set items(value: Array<GroupeTache>) {
        this._items = value;
    }

    get selected(): GroupeTache {
        return this._selected;
    }

    set selected(value: GroupeTache) {
        this._selected = value;
    }

    get selectes(): Array<GroupeTache> {
        return this._selectes;
    }

    set selectes(value: Array<GroupeTache>) {
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

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get viewDialog(): boolean {
        return this._viewDialog;
    }

    set viewDialog(value: boolean) {
        this._viewDialog = value;
    }
}
