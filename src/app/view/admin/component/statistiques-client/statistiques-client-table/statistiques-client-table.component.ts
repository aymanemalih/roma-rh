import {Component, OnInit} from '@angular/core';
import {StatistiquesServiceService} from '../../../../../controller/service/statistiques-service.service';
import {TacheVo} from '../../../../../controller/model/tache-vo.model';
import {ClientSatistique} from "../search-bar/search-bar.component";
import {FactureService} from "../../../../../controller/service/facture.service";
import {Facture} from "../../../../../controller/model/facture.model";

@Component({
    selector: 'app-statistiques-client-table',
    templateUrl: './statistiques-client-table.component.html',
    styleUrls: ['./statistiques-client-table.component.scss']
})
export class StatistiquesClientTableComponent implements OnInit {

    constructor(private statistiqueClientService: StatistiquesServiceService, private factureService: FactureService) {
    }

    ngOnInit(): void {
    }

    get items(): Map<number, Array<TacheVo>> {
        return this.statistiqueClientService.items;
    }

    get clientStatistiques(): Array<ClientSatistique> {
        return this.statistiqueClientService.clientStatistiques;
    }


    public openCreate() {
        this.selected = new Facture();
        this.submitted = false;
        this.createDialog = true;
    }

    get selected(): Facture {
        return this.factureService.selected;
    }

    set selected(value: Facture) {
        this.factureService.selected = value;
    }

    get submitted(): boolean {
        return this.factureService.submitted;
    }

    set submitted(value: boolean) {
        this.factureService.submitted = value;
    }

    get createDialog(): boolean {
        return this.factureService.createDialog;
    }

    set createDialog(value: boolean) {
        this.factureService.createDialog = value;
    }
}
