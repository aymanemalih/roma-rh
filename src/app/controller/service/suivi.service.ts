import {Injectable} from '@angular/core';
import {CollaborateurVo} from '../model/collaborateur-vo.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SuiviService {

    private url = environment.baseUrl + 'tache/';


    private _selected: CollaborateurVo;
    private _items: Array<CollaborateurVo>;

    constructor(private http: HttpClient) {
    }

    get selected(): CollaborateurVo {
        if (this._selected == null) {
            this._selected = new CollaborateurVo();
        }
        return this._selected;
    }

    set selected(value: CollaborateurVo) {
        this._selected = value;
    }

    get items(): Array<CollaborateurVo> {
        if (this._items == null) {
            this._items = new Array<CollaborateurVo>();
        }
        return this._items;
    }

    set items(value: Array<CollaborateurVo>) {
        this._items = value;
    }

    public calcStatistiqueSuiviCollaborateur(): Observable<Array<CollaborateurVo>> {
        console.log(this.url + 'dateMin/' + this.selected.dateDemarrageEffectiveMin
            + '/dateMax/' + this.selected.dateDemarrageEffectiveMax);
        return this.http.get<Array<CollaborateurVo>>(this.url + 'dateMin/'
            + this.selected.dateDemarrageEffectiveMin
            + '/dateMax/' + this.selected.dateDemarrageEffectiveMax);
    }

}
