import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MembreEquipe} from '../model/membre-equipe';
import {Equipe} from '../model/equipe.model';
@Injectable({
    providedIn: 'root'
})
export class MembreEquipeService {
    private url = environment.baseUrl + 'membreEquipe/';
    private _items: Array<MembreEquipe>;
    private _selected: MembreEquipe;
    private _selectes: Array<MembreEquipe>;
    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    constructor(private http: HttpClient) {
    }

    public findAll(): Observable<Array<MembreEquipe>> {
        return this.http.get<Array<MembreEquipe>>(this.url);
    }

    public save(): Observable<MembreEquipe> {
        return this.http.post<MembreEquipe>(this.url, this.selected);
    }
    public update(i: number, me: MembreEquipe): Observable<MembreEquipe>{
       return this.http.put<MembreEquipe>(this.url + 'id/' + i, me);
    }
    public findByEquipeCode(equipe: Equipe): Observable<Array<MembreEquipe>> {
        console.log('lien -->' + this.url + 'equipe/code/' + equipe.code);
        return this.http.get<Array<MembreEquipe>>(this.url + 'equipe/code/' + equipe.code);
    }

    public findByEquipeId(id: number): Observable<Array<MembreEquipe>> {
        return this.http.get<Array<MembreEquipe>>(this.url + 'equipe/id/' + id);
    }

    public deleteByCode(): Observable<number> {
        return this.http.delete<number>(this.url + 'equipeCode/' + this.selected.equipe.code +
            '/collaborateurCode/' + this.selected.collaborateur.code);
    }
    public findByEquipeCodeAndCollaborateurCode(codeEquipe: string , codeCollaborateur: string): Observable<MembreEquipe>{
        return this.http.get<MembreEquipe>(this.url + 'equipeCode/' + this.selected.equipe.code + '/collaborateurCode/' + this.selected.collaborateur.code);
    }
    public deleteByEquipeCodeAndCollaborateurCode(codeEquipe: string , codeCollaborateur: string): Observable<number>{
        return this.http.delete<number>(this.url + 'equipeCode/' + this.selected.equipe.code + '/collaborateurCode/' + this.selected.collaborateur.code);
    }


    public deleteMultipleByCode(): Observable<number> {
        return this.http.post<number>(this.url + 'delete-multiple-by-code', this.selectes);
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

    get items(): Array<MembreEquipe> {
        return this._items;
    }

    set items(value: Array<MembreEquipe>) {
        this._items = value;
    }

    get selectes(): Array<MembreEquipe> {
        return this._selectes;
    }

    set selectes(value: Array<MembreEquipe>) {
        this._selectes = value;
    }

    get selected(): MembreEquipe {
        return this._selected;
    }

    set selected(value: MembreEquipe) {
        this._selected = value;
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
