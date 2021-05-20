import { Component, OnInit } from '@angular/core';
import {StatistiquesServiceService} from '../../../../../controller/service/statistiques-service.service';
import {TacheVo} from '../../../../../controller/model/tache-vo.model';
import {Client} from '../../../../../controller/model/client.model';
import {ClientSatistique} from "../search-bar/search-bar.component";

@Component({
  selector: 'app-statistiques-client-table',
  templateUrl: './statistiques-client-table.component.html',
  styleUrls: ['./statistiques-client-table.component.scss']
})
export class StatistiquesClientTableComponent implements OnInit {

  constructor(private statistiqueClientService: StatistiquesServiceService) { }

  ngOnInit(): void {
  }

  get items(): Map<number, Array<TacheVo>> {
    return this.statistiqueClientService.items;
  }

  get clientStatistiques(): Array<ClientSatistique> {
    return this.statistiqueClientService.clientStatistiques;
  }
}
