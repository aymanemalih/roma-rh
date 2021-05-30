import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../../../../controller/service/client.service';
import {ProjetService} from '../../../../../../controller/service/projet.service';
import {EtatProjetService} from '../../../../../../controller/service/etat-projet.service';
import {CollaborateurService} from '../../../../../../controller/service/collaborateur.service';
import {ProjetVo} from '../../../../../../controller/model/projet-vo.model';
import {Projet} from '../../../../../../controller/model/projet.model';
import {Client} from '../../../../../../controller/model/client.model';
import {Collaborateur} from '../../../../../../controller/model/collaborateur.model';
import {Etatprojet} from '../../../../../../controller/model/etatprojet.model';

@Component({
    selector: 'app-search-bar-projet',
    templateUrl: './search-bar-projet.component.html',
    styleUrls: ['./search-bar-projet.component.scss']
})
export class SearchBarProjetComponent implements OnInit {

    constructor(private service: ProjetService,
                private clientService: ClientService,
                private collaborateurService: CollaborateurService,
                private etatProjetService: EtatProjetService) {
    }

    ngOnInit(): void {
        this.clientService.findAll().subscribe(data => this.itemsClients = data);
        this.collaborateurService.findAll().subscribe(data => this.itemsCollab = data);
        this.etatProjetService.findAll().subscribe(data => this.itemsEtats = data);
    }

    get projetVO(): ProjetVo {
        return this.service.projetVo;
    }

    get selected(): Projet {
        return this.service.selected;
    }

    get items(): Array<Projet> {
        return this.service.items;
    }

    set items(value: Array<Projet>) {
        this.service.items = value;
    }

    get client(): Client {
        return this.clientService.selected;
    }

    get itemsClients(): Array<Client> {
        return this.clientService.items;
    }

    set itemsClients(value: Array<Client>) {
        this.clientService.items = value;
    }

    get collaborateur(): Collaborateur {
        return this.collaborateurService.selected;
    }

    get itemsCollab(): Array<Collaborateur> {
        return this.collaborateurService.items;
    }

    set itemsCollab(value: Array<Collaborateur>) {
        this.collaborateurService.items = value;
    }

    get etatprojet(): Etatprojet {
        return this.etatProjetService.selected;
    }

    get itemsEtats(): Array<Etatprojet> {
        return this.etatProjetService.items;
    }

    set itemsEtats(value: Array<Etatprojet>) {
        this.etatProjetService.items = value;
    }

    search() {
        this.service.search().subscribe(data => this.items = data);
    }


}
