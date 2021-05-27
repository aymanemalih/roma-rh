import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {LotService} from '../../../../../../controller/service/lot.service';
import {Lot} from '../../../../../../controller/model/lot.model';
import {ProjetService} from '../../../../../../controller/service/projet.service';
import {CollaborateurService} from '../../../../../../controller/service/collaborateur.service';
import {Collaborateur} from '../../../../../../controller/model/collaborateur.model';
import {SroService} from '../../../../../../controller/service/sro.service';
import {EtatLot} from '../../../../../../controller/model/etat-lot.model';
import {EtatLotService} from '../../../../../../controller/service/etat-lot.service';
import {Sro} from '../../../../../../controller/model/sro.model';

@Component({
    selector: 'app-lot-create',
    templateUrl: './lot-create.component.html',
    styleUrls: ['./lot-create.component.scss']
})
export class LotCreateComponent implements OnInit {

    constructor(private messageService: MessageService,
                private service: LotService,
                private collaborateurService: CollaborateurService,
                private sroService: SroService,
                private etatLotService: EtatLotService,
                private projetService: ProjetService) {
    }

    ngOnInit(): void {
        this.sroService.findAll().subscribe(data => this.itemssros = data);
        this.collaborateurService.findAll().subscribe(data => this.itemsCollaborateurs = data);
        this.etatLotService.findAll().subscribe(data => this.itemsetatlots = data);
    }

    public hideCreateDialog() {
        this.createDialog = false;
        this.submitted = false;
    }

    public save() {
        this.submitted = true;
        if (this.selected.code.trim()) {
            this.selected.projet = this.projetService.selected;
            this.service.save().subscribe(data => {
                console.log('ha data' + data);
                this.items.push({...data});
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Lot Created',
                    life: 3000
                });
            });
            this.createDialog = false;
            this.selected = new Lot();
        }
    }

    get selected(): Lot {
        return this.service.selected;
    }

    set selected(value: Lot) {
        this.service.selected = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get items(): Array<Lot> {
        return this.service.items;
    }

    set items(value: Array<Lot>) {
        this.service.items = value;
    }

    get itemsCollaborateurs(): Array<Collaborateur> {
        return this.collaborateurService.items;
    }

    set itemsCollaborateurs(value: Array<Collaborateur>) {
        this.collaborateurService.items = value;
    }

    get itemsetatlots(): Array<EtatLot> {
        return this.etatLotService.items;
    }

    set itemsetatlots(value: Array<EtatLot>) {
        this.etatLotService.items = value;
    }

    get itemssros(): Array<Sro> {
        return this.sroService.items;
    }

    set itemssros(value: Array<Sro>) {
        this.sroService.items = value;
    }

}
