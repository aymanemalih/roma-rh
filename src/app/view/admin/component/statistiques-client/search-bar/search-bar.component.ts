import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../../../controller/service/client.service';
import {Client} from '../../../../../controller/model/client.model';
import {ProjetService} from '../../../../../controller/service/projet.service';
import {Projet} from '../../../../../controller/model/projet.model';
import {TacheVo} from '../../../../../controller/model/tache-vo.model';
import {LotService} from '../../../../../controller/service/lot.service';
import {Lot} from '../../../../../controller/model/lot.model';
import {MembreEquipeService} from '../../../../../controller/service/membre-equipe.service';
import {MembreEquipe} from '../../../../../controller/model/membre-equipe';
import {EquipeService} from '../../../../../controller/service/equipe.service';
import {Equipe} from '../../../../../controller/model/equipe.model';
import {StatistiquesServiceService} from '../../../../../controller/service/statistiques-service.service';
import {FactureService} from '../../../../../controller/service/facture.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    get clientStatistiques(): Array<ClientSatistique> {
        return this.statistiquesService.clientStatistiques;
    }

    set clientStatistiques(value: Array<ClientSatistique>) {
        this.statistiquesService.clientStatistiques = value;
    }

    constructor(private clientService: ClientService,
                private projectService: ProjetService,
                private lotService: LotService,
                private factureService: FactureService,
                private membreEquipeService: MembreEquipeService,
                private equipeService: EquipeService,
                private statistiquesService: StatistiquesServiceService) {
    }

    get clients(): Array<Client> {
        return this.clientService.items;
    }

    get projects(): Array<Projet> {
        return this.projectService.items;
    }

    get lots(): Array<Lot> {
        return this.lotService.items;
    }

    get equipes(): Array<Equipe> {
        return this.equipeService.items;
    }

    get membreEquipes(): Array<MembreEquipe> {
        return this.membreEquipeService.items;
    }

    get selected(): TacheVo {
        return this.statistiquesService.selected;
    }

    set selected(value: TacheVo) {
        this.statistiquesService.selected = value;
    }

    indice: number;


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
    }

    public loadProject() {
        console.log('load' + this.selected.clientId);
        this.projectService.findByClientId(this.selected.clientId).subscribe(
            data => {
                this.projectService.items = data;
            }
        );
    }

    public loadLots() {
        this.lotService.findByProjetId(this.selected.projetId).subscribe(
            data => {
                this.lotService.items = data;
            }
        );
    }

    public loadMembreEquipe() {
        this.selected.membreEquipeId = null;
        this.membreEquipeService.findByEquipeId(this.selected.equipeId).subscribe(
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

    calcStatistique() {
        this.clientStatistiques = new Array<ClientSatistique>();
        this.statistiquesService.calcStatistique().subscribe(
            data => {
                this.statistiquesService.items = this.group(data);
                console.log(this.statistiquesService.items);
                console.log('ha ana');
                console.log(this.statistiquesService.items.keys());
            }
        );
    }


    public group(list: Array<TacheVo>) {
        const map = new Map<number, Array<TacheVo>>();
        list.forEach((item) => {
            const key = item.lot.projet.client.id;
            const collection = map.get(key);
            const clientStati = new ClientSatistique();
            if (!collection) {
                clientStati.id = key;
                clientStati.client = item.lot.projet.client;
                clientStati.totalHeure += item.totalHeure;
                clientStati.totalPeriode += item.totalPeriode;
                this.clientStatistiques.push(clientStati);
                map.set(key, [item]);
            } else {
                this.clientStatistiques[this.findIndexById(key)].totalHeure += item.totalHeure;
                this.clientStatistiques[this.findIndexById(key)].totalPeriode += item.totalPeriode;
                collection.push(item);
            }
            this.factureService.findByClientCode(item.lot.projet.client.code).subscribe(
                data => {
            clientStati.totalFacture = data.length;
        });
        });

        return map;
    }

    public findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.clientStatistiques.length; i++) {
            if (this.clientStatistiques[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

}

export class ClientSatistique {
    id: number;
    client: Client;
    totalHeure: number;
    totalPeriode: number;
    totalFacture: number;

    constructor() {
        this.totalPeriode = 0;
        this.totalHeure = 0;
        this.totalFacture = 0;
    }
}
