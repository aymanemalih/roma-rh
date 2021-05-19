import {Component, OnInit} from '@angular/core';
import {SuiviService} from '../../../../../controller/service/suivi.service';
import {CollaborateurVo} from '../../../../../controller/model/collaborateur-vo.model';
import {GroupeTache} from '../../../../../controller/model/groupe-tache.model';

@Component({
    selector: 'app-criteres-de-recherche',
    templateUrl: './criteres-de-recherche.component.html',
    styleUrls: ['./criteres-de-recherche.component.scss']
})
export class CriteresDeRechercheComponent implements OnInit {

    constructor(private service: SuiviService) {
    }

    ngOnInit(): void {
    }

    get selected(): CollaborateurVo {
        return this.service.selected;
    }

    get items(): Array<CollaborateurVo> {
        return this.service.items;
    }

    set items(value: Array<CollaborateurVo>) {
        this.service.items = value;
    }

    suivreCollaborateurs() {
        this.service.suivreCollaborateurs().subscribe(data => this.items = data);
    }

}
