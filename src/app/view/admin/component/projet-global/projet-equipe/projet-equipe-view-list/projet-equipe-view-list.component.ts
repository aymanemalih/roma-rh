import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ProjetEquipeService} from '../../../../../../controller/service/projet-equipe.service';
import {ProjetEquipe} from '../../../../../../controller/model/projet-equipe.model';

@Component({
    selector: 'app-projet-equipe-view-list',
    templateUrl: './projet-equipe-view-list.component.html',
    styleUrls: ['./projet-equipe-view-list.component.scss']
})
export class ProjetEquipeViewListComponent implements OnInit {

    cols: any[];

    constructor(private messageService: MessageService,
                private confirmationService: ConfirmationService,
                private service: ProjetEquipeService) {
    }

    ngOnInit(): void {
        this.initCol();
    }

    private initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'}
        ];
    }

    get selected(): ProjetEquipe {
        return this.service.selected;
    }

    set selected(value: ProjetEquipe) {
        this.service.selected = value;
    }

    get items(): Array<ProjetEquipe> {
        return this.service.items;
    }

    set items(value: Array<ProjetEquipe>) {
        this.service.items = value;
    }


    get selectes(): Array<ProjetEquipe> {
        return this.service.selectes;
    }

    set selectes(value: Array<ProjetEquipe>) {
        this.service.selectes = value;
    }

}
