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
import {StatistiquesServiceService} from "../../../../../controller/service/statistiques-service.service";
import {Observable} from "rxjs";
import {A} from "@angular/cdk/keycodes";

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    constructor(private clientService: ClientService,
                private projectService: ProjetService,
                private lotService: LotService,
                private membreEquipeService: MembreEquipeService,
                private equipeService: EquipeService,
                private statistiquesService: StatistiquesServiceService) {
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

    calcStatistique(){
        this.statistiquesService.calcStatistique().subscribe(
            data => {
                this.statistiquesService.items = data;
                console.log(this.statistiquesService.items);
                console.log('ha ana');
                console.log(this.statistiquesService.items.keys());
            }
        );
    }
}
