import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {LotService} from '../../../../../../controller/service/lot.service';
import {CollaborateurService} from '../../../../../../controller/service/collaborateur.service';
import {SroService} from '../../../../../../controller/service/sro.service';
import {EtatLotService} from '../../../../../../controller/service/etat-lot.service';
import {ProjetService} from '../../../../../../controller/service/projet.service';
import {Lot} from '../../../../../../controller/model/lot.model';
import {Collaborateur} from '../../../../../../controller/model/collaborateur.model';
import {EtatLot} from '../../../../../../controller/model/etat-lot.model';
import {Sro} from '../../../../../../controller/model/sro.model';

@Component({
    selector: 'app-lot-edit',
    templateUrl: './lot-edit.component.html',
    styleUrls: ['./lot-edit.component.scss']
})
export class LotEditComponent implements OnInit {

    constructor(private messageService: MessageService,
                private service: LotService,
                private collaborateurService: CollaborateurService,
                private sroService: SroService,
                private etatLotService: EtatLotService,
                private projetService: ProjetService) {
    }

    ngOnInit(): void {
        this.service.selected = null;
        this.collaborateurService.findAll().subscribe(data => this.itemsCollaborateurs = data);
        this.sroService.findAll().subscribe(data => this.itemssros = data);
        this.etatLotService.findAll().subscribe(data => this.itemsetatlots = data);
        this.selected.projet = this.projetService.selected;
    }

    public hideEditDialog() {
        this.editDialog = false;
    }

    public edit() {
        this.submitted = true;
        if (this.selected.code.trim()) {
            if (this.selected.id) {
                this.items[this.service.findIndexById(this.selected.id)] = this.selected;
                this.service.edit().subscribe(data => {
                    this.selected = data;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Lot Updated',
                        life: 3000
                    });
                });
            }
            this.editDialog = false;
            this.selected = new Lot();
        }
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
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
