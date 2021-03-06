import {Component, OnInit} from '@angular/core';
import {TacheService} from '../../../../../controller/service/tache.service';
import {ClientService} from '../../../../../controller/service/client.service';
import {EquipeService} from '../../../../../controller/service/equipe.service';
import {CollaborateurService} from '../../../../../controller/service/collaborateur.service';
import {LotService} from '../../../../../controller/service/lot.service';
import {MembreEquipeService} from '../../../../../controller/service/membre-equipe.service';
import {ProjetService} from '../../../../../controller/service/projet.service';
import {TacheVo} from '../../../../../controller/model/tache-vo.model';
import {Client} from '../../../../../controller/model/client.model';
import {Equipe} from '../../../../../controller/model/equipe.model';
import {Collaborateur} from '../../../../../controller/model/collaborateur.model';
import {Projet} from '../../../../../controller/model/projet.model';
import {MembreEquipe} from '../../../../../controller/model/membre-equipe';
import {Lot} from '../../../../../controller/model/lot.model';

@Component({
    selector: 'app-recherche-taches',
    templateUrl: './recherche-taches.component.html',
    styleUrls: ['./recherche-taches.component.scss']
})
export class RechercheTachesComponent implements OnInit {


    constructor(private service: TacheService,
                private clientService: ClientService,
                private equipeService: EquipeService,
                private collaborateurService: CollaborateurService,
                private lotService: LotService,
                private membreEquipeService: MembreEquipeService,
                private projetService: ProjetService) {
    }

    ngOnInit(): void {
        this.clientService.findAll().subscribe(
            data => {
                this.clientService.items = data;
            }
        );
        this.equipeService.findAll().subscribe(
            data => {
                this.equipeService.items = data;
            }
        );
        this.projetService.findAll().subscribe(
            data => {
                this.projetService.items = data;
            }
        );
        this.lotService.findAll().subscribe(
            data => {
                this.lotService.items = data;
            }
        );
        this.collaborateurService.findAll().subscribe(
            data => {
                this.collaborateurService.items = data;
            }
        );
    }

    reset() {
        this.service.tacheVo = null;
    }

    findMembers() {
        this.tacheVo.membreEquipeId = null;
        this.membreEquipeService.findByEquipeId(this.tacheVo.equipeId).subscribe(
            data => {
                console.log(data);
                this.membreEquipeService.items = data;
                console.log(this.membreEquipeService.items);
            }
        );
    }

    public findSelectedMember(id: number): number {
        return this.membreEquipeService.findIndexById(id);
    }

    public findLots() {
        this.lotService.findByProjetId(this.tacheVo.projetId).subscribe(
            data => {
                this.lotService.items = data;
            }
        );
    }

    public findProject() {
        console.log(this.tacheVo.clientId);
        this.projetService.findByClientId(this.tacheVo.clientId).subscribe(
            data => {
                this.projetService.items = data;
            }
        );
    }

    search() {
        this.service.search().subscribe(
            data => {
                this.service.items = data;
            }
        );
    }

    get tacheVo(): TacheVo {
        return this.service.tacheVo;
    }

    get itemsClients(): Array<Client> {
        return this.clientService.items;
    }

    set itemsClients(value: Array<Client>) {
        this.clientService.items = value;
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

    get itemsProjets(): Array<Projet> {
        return this.projetService.items;
    }

    set itemsProjets(value: Array<Projet>) {
        this.projetService.items = value;
    }

    get itemsmembresEquipe(): Array<MembreEquipe> {
        return this.membreEquipeService.items;
    }

    set itemsmembresEquipe(value: Array<MembreEquipe>) {
        this.membreEquipeService.items = value;
    }

    get itemslots(): Array<Lot> {
        return this.lotService.items;
    }

    set itemslots(value: Array<Lot>) {
        this.lotService.items = value;
    }
}
