import { Component, OnInit } from '@angular/core';
import {TacheService} from '../../../../../controller/service/tache.service';
import {TacheVo} from '../../../../../controller/model/tache-vo.model';
import {Tache} from '../../../../../controller/model/tache.model';
import {CollaborateurVo} from '../../../../../controller/model/collaborateur-vo.model';

@Component({
  selector: 'app-liste-taches',
  templateUrl: './liste-taches.component.html',
  styleUrls: ['./liste-taches.component.scss']
})
export class ListeTachesComponent implements OnInit {
  cols: any[];
  constructor(private service: TacheService) { }

  ngOnInit(): void {
    this.initCol();
  }
  private initCol() {
    this.cols = [
      {field: 'membreEquipe', header: 'MembreEquipe'},
      {field: 'dateDemarrageEffective', header: 'DateDemarrageEffective'},
      {field: 'periode', header: 'Periode'},
      {field: 'libelle', header: 'Libelle'},
      {field: 'groupeTache', header: 'GroupeTache'},
      {field: 'categorieTache', header: 'CategorieTache'}
    ];
  }
  get tacheVo(): TacheVo{
    return this.service.tacheVo;
  }
  get items(): Array<Tache>{
    return this.service.items;
  }
  get selectes(): Array<Tache>{
    return this.service.selectes;
  }
  get selected(): TacheVo {
    return this.service.tacheVo;
  }

}
