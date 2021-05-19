import { Component, OnInit } from '@angular/core';
import {StatistiquesServiceService} from '../../../../../controller/service/statistiques-service.service';
import {TacheVo} from '../../../../../controller/model/tache-vo.model';

@Component({
  selector: 'app-statistiques-client-table',
  templateUrl: './statistiques-client-table.component.html',
  styleUrls: ['./statistiques-client-table.component.scss']
})
export class StatistiquesClientTableComponent implements OnInit {

  constructor(private statistiqueClientService: StatistiquesServiceService) { }

  ngOnInit(): void {
  }

  get items(): Array<TacheVo> {
    return this.statistiqueClientService.items;
  }

  public groupBy(list:  Array<TacheVo>, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }
}
