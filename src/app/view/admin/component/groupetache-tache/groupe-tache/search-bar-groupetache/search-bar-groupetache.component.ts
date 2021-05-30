import {Component, OnInit} from '@angular/core';
import {GroupeTacheService} from '../../../../../../controller/service/groupe-tache.service';
import {ProjetService} from '../../../../../../controller/service/projet.service';
import {ClientService} from '../../../../../../controller/service/client.service';
import {LotService} from '../../../../../../controller/service/lot.service';
import {GroupeTacheVO} from '../../../../../../controller/model/groupe-tache-vo.model';
import {Lot} from '../../../../../../controller/model/lot.model';
import {Projet} from '../../../../../../controller/model/projet.model';
import {GroupeTache} from '../../../../../../controller/model/groupe-tache.model';
import {Client} from '../../../../../../controller/model/client.model';

@Component({
    selector: 'app-search-bar-groupetache',
    templateUrl: './search-bar-groupetache.component.html',
    styleUrls: ['./search-bar-groupetache.component.scss']
})
export class SearchBarGroupetacheComponent implements OnInit {

    constructor(private service: GroupeTacheService,
                private clientService: ClientService,
                private projetService: ProjetService,
                private lotService: LotService) {
    }

    ngOnInit(): void {
        this.clientService.findAll().subscribe(data => this.itemsClients = data);
    }

    get groupeTacheVO(): GroupeTacheVO {
        return this.service.groupeTacheVO;
    }

    get groupeTache(): GroupeTache {
        return this.service.selected;
    }

    get items(): Array<GroupeTache> {
        return this.service.items;
    }

    set items(value: Array<GroupeTache>) {
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

    get itemsProjets(): Array<Projet> {
        return this.projetService.items;
    }

    set itemsProjets(value: Array<Projet>) {
        this.projetService.items = value;
    }

    get itemsLots(): Array<Lot> {
        return this.lotService.items;
    }

    set itemsLots(value: Array<Lot>) {
        this.lotService.items = value;
    }


    findGroupeTacheByCreteria() {
        this.service.findGroupeTacheByCreteria().subscribe(data => this.items = data);
    }

    findProjectsByClientId(clientId: number) {
        this.projetService.findByClientId(clientId).subscribe(data => this.itemsProjets = data);
    }

    findLotsByProjetId(projetId: number) {
        this.lotService.findByProjetId(projetId).subscribe(data => this.itemsLots = data);
    }

    reset(){
        this.service.groupeTacheVO = null;
        this.service.findAll().subscribe(data => this.items = data);
    }

}
