import {Component, OnInit} from '@angular/core';
import {ProjetService} from '../../../../../../controller/service/projet.service';
import {MessageService} from 'primeng/api';
import {EquipeService} from '../../../../../../controller/service/equipe.service';
import {CollaborateurService} from '../../../../../../controller/service/collaborateur.service';
import {Projet} from '../../../../../../controller/model/projet.model';
import {Equipe} from '../../../../../../controller/model/equipe.model';
import {Collaborateur} from '../../../../../../controller/model/collaborateur.model';
import {ClientService} from '../../../../../../controller/service/client.service';
import {Client} from '../../../../../../controller/model/client.model';
import {EtatProjetService} from '../../../../../../controller/service/etat-projet.service';
import {Etatprojet} from '../../../../../../controller/model/etatprojet.model';

@Component({
    selector: 'app-projet-create',
    templateUrl: './projet-create.component.html',
    styleUrls: ['./projet-create.component.scss']
})
export class ProjetCreateComponent implements OnInit {

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
                    detail: 'Projet Created',
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
