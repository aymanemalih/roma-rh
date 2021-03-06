import { Component, OnInit } from '@angular/core';
import {DemandeCongeService} from '../../../../../controller/service/demande-conge.service';
import {Commande} from '../../../../../controller/model/commande.model';
import {DemandeConge} from '../../../../../controller/model/demande-conge.model';

@Component({
  selector: 'app-demande-conge-view',
  templateUrl: './demande-conge-view.component.html',
  styleUrls: ['./demande-conge-view.component.scss']
})
export class DemandeCongeViewComponent implements OnInit {

  constructor(private  demandeCongeService: DemandeCongeService) { }

  ngOnInit(): void {
  }
  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): DemandeConge {
    return this.demandeCongeService.selected;
  }

  set selected(value: DemandeConge) {
    this.demandeCongeService.selected = value;
  }

  get viewDialog(): boolean {
    return this.demandeCongeService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.demandeCongeService.viewDialog = value;
  }
}
