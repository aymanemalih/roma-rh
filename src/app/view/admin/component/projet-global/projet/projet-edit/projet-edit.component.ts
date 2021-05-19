import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {ProjetService} from '../../../../../../controller/service/projet.service';
import {EquipeService} from '../../../../../../controller/service/equipe.service';
import {EtatProjetService} from '../../../../../../controller/service/etat-projet.service';
import {CollaborateurService} from '../../../../../../controller/service/collaborateur.service';
import {ClientService} from '../../../../../../controller/service/client.service';
import {Projet} from '../../../../../../controller/model/projet.model';
import {Equipe} from '../../../../../../controller/model/equipe.model';
import {Collaborateur} from '../../../../../../controller/model/collaborateur.model';
import {Client} from '../../../../../../controller/model/client.model';
import {Etatprojet} from '../../../../../../controller/model/etatprojet.model';

@Component({
    selector: 'app-projet-edit',
    templateUrl: './projet-edit.component.html',
    styleUrls: ['./projet-edit.component.scss']
})
export class ProjetEditComponent implements OnInit {

    constructor(private messageService: MessageService,
                private projetService: ProjetService,
                private equipeService: EquipeService,
                private etatProjetService: EtatProjetService,
                private collaborateurService: CollaborateurService,
                private clientService: ClientService,
                private service: ProjetService) {
    }

    ngOnInit(): void {
        this.service.selected = null;
        this.equipeService.findAll().subscribe(data => this.itemsEquipes = data);
        this.clientService.findAll().subscribe(data => this.itemsClients = data);
        this.etatProjetService.findAll().subscribe(data => this.itemsEtatProjet = data);
        this.collaborateurService.findAll().subscribe(data => this.itemsCollaborateurs = data);
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
                        detail: 'Projet Updated',
                        life: 3000
                    });
                });
            }
            this.editDialog = false;
            this.selected = new Projet();
        }
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
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

    get itemsClients(): Array<Client> {
        return this.clientService.items;
    }

    set itemsClients(value: Array<Client>) {
        this.clientService.items = value;
    }

    get itemsEtatProjet(): Array<Etatprojet> {
        return this.etatProjetService.items;
    }

    set itemsEtatProjet(value: Array<Etatprojet>) {
        this.etatProjetService.items = value;
    }


}
