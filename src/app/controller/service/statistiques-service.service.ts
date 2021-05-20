import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {TacheVo} from '../model/tache-vo.model';
import {Observable} from 'rxjs';
import {Client} from '../model/client.model';
import {ClientSatistique} from '../../view/admin/component/statistiques-client/search-bar/search-bar.component';

@Injectable({
    providedIn: 'root'
})
export class StatistiquesServiceService {

    private url = environment.baseUrl + 'tache/';
    private _items: Map<number, Array<TacheVo>>;
    private _selected: TacheVo;
    private _clientStatistiques: Array<ClientSatistique>;

    constructor(private http: HttpClient) {
    }


    get items(): Map<number, Array<TacheVo>> {
        return this._items;
    }

    set items(value: Map<number, Array<TacheVo>>) {
        this._items = value;
    }

    get selected(): TacheVo {
        if (this._selected == null) {
            this._selected = new TacheVo();
        }
        return this._selected;
    }

    set selected(value: TacheVo) {
        this._selected = value;
    }


    get clientStatistiques(): Array<ClientSatistique> {
        return this._clientStatistiques;
    }

    set clientStatistiques(value: Array<ClientSatistique>) {
        this._clientStatistiques = value;
    }

    calcStatistique(): Observable<Array<TacheVo>> {
        return this.http.post<Array<TacheVo>>('http://localhost:8036/maneo-rh/tache/calcStatistique/',
            this.selected);
    }
}
