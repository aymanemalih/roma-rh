import {Component, OnInit} from '@angular/core';
import {CollaborateurVo} from '../../../../../controller/model/collaborateur-vo.model';
import {SuiviService} from '../../../../../controller/service/suivi.service';

@Component({
    selector: 'app-collaborateur-donnees',
    templateUrl: './collaborateur-donnees.component.html',
    styleUrls: ['./collaborateur-donnees.component.scss']
})
export class CollaborateurDonneesComponent implements OnInit {

    cols: any[];

    constructor(private service: SuiviService) {
    }

    ngOnInit(): void {
        this.initCol();
    }

    get selected(): CollaborateurVo {
        return this.service.selected;
    }

    get items(): Array<CollaborateurVo> {
        return this.service.items;
    }

    private initCol() {
        this.cols = [
            {field: 'nom', header: 'Nom'},
            {field: 'jourOuvr', header: 'Total des Jours Ouvrable'},
            {field: 'jourTrava', header: 'Total des Jours Travaillé'},
            {field: 'jourConge', header: 'Total des Jours Congé '},
            {field: 'joueRest', header: 'Jour Restant'}
        ];
    }

}
