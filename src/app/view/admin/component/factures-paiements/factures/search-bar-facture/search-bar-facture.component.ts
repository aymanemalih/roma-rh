import { Component, OnInit } from '@angular/core';
import {FactureService} from '../../../../../../controller/service/facture.service';
import {ClientService} from '../../../../../../controller/service/client.service';
import {EtatFactureService} from '../../../../../../controller/service/etat-facture.service';
import {FactureVO} from '../../../../../../controller/model/facture-vo.model';
import {Client} from '../../../../../../controller/model/client.model';
import {Facture} from '../../../../../../controller/model/facture.model';
import {EtatFacture} from '../../../../../../controller/model/etat-facture.model';

@Component({
  selector: 'app-search-bar-facture',
  templateUrl: './search-bar-facture.component.html',
  styleUrls: ['./search-bar-facture.component.scss']
})
export class SearchBarFactureComponent implements OnInit {

  constructor(private service: FactureService,
              private clientService: ClientService,
              private etatFactureService: EtatFactureService) {
  }

  ngOnInit(): void {
    this.clientService.findAll().subscribe(data => this.itemsClients = data);
  }

  get factureVO(): FactureVO {
    return this.service.factureVO;
  }

  get selected(): Facture {
    return this.service.selected;
  }

  get items(): Array<Facture> {
    return this.service.items;
  }

  set items(value: Array<Facture>) {
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

  get itemsEtatsFacture(): Array<EtatFacture> {
    return this.etatFactureService.items;
  }

  set itemsEtatsFacture(value: Array<EtatFacture>) {
    this.etatFactureService.items = value;
  }

  search() {
    this.service.search().subscribe(data => this.items = data);
  }

}
