import {Component, OnInit} from '@angular/core';
import {ProjetService} from '../../../../../../controller/service/projet.service';
import {MessageService} from 'primeng/api';
import {EquipeService} from '../../../../../../controller/service/equipe.service';
import {CollaborateurService} from '../../../../../../controller/service/collaborateur.service';
import {Projet} from '../../../../../../controller/model/projet.model';
import {Equipe} from '../../../../../../controller/model/equipe.model';
import {Collaborateur} from '../../../../../../controller/model/collaborateur.model';

@Component({
    selector: 'app-projet-create',
    templateUrl: './projet-create.component.html',
    styleUrls: ['./projet-create.component.scss']
})
export class ProjetCreateComponent implements OnInit {

    constructor(private messageService: MessageService,
                private projetService: ProjetService,
                private equipeService: EquipeService,
                private collaborateurService: CollaborateurService,
                private service: ProjetService) {
    }

    ngOnInit(): void {
        this.service.selected = null;
        this.equipeService.findAll().subscribe(data => this.itemsEquipes = data);
        this.collaborateurService.findAll().subscribe(data => this.itemsCollaborateurs = data);
    }

    public hideCreateDialog() {
        this.createDialog = false;
        this.submitted = false;
    }

    public save() {
        this.submitted = true;
        if (this.selected.code.trim()) {
            this.service.save().subscribe(data => {
                this.items.push({...data});
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'GroupeTache Created',
                    life: 3000
                });
            });
            this.createDialog = false;
            this.selected = new Projet();
        }
    }

    get selected(): Projet {
        return this.service.selected;
    }

    set selected(value: Projet) {
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

    get items(): Array<Projet> {
        return this.service.items;
    }

    set items(value: Array<Projet>) {
        this.service.items = value;
    }

    get itemsEquipes(): Array<Equipe> {
        return this.equipeService.items;
    }

    set itemsEquipes(value: Array<Equipe>) {
        this.equipeService.items = value;
    }

    get itemsCollaborateurs(): Array<Collaborateur> {
        return this.collaborateurService.items;
    }

    set itemsCollaborateurs(value: Array<Collaborateur>) {
        this.collaborateurService.items = value;
    }

}
