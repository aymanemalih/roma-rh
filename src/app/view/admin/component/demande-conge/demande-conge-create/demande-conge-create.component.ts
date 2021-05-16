import { Component, OnInit } from '@angular/core';
import {DemandeCongeService} from '../../../../../controller/service/demande-conge.service';
import {Commande} from '../../../../../controller/model/commande.model';
import {DemandeConge} from '../../../../../controller/model/demande-conge.model';

@Component({
  selector: 'app-demande-conge-create',
  templateUrl: './demande-conge-create.component.html',
  styleUrls: ['./demande-conge-create.component.scss']
})
export class DemandeCongeCreateComponent implements OnInit {

  constructor(private demandeCongeService: DemandeCongeService) { }

  ngOnInit(): void {
  }
  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }



  get selected(): DemandeConge {
    return this.demandeCongeService.selected;
  }

  set selected(value: DemandeConge) {
    this.demandeCongeService.selected = value;
  }

  get createDialog(): boolean {
    return this.demandeCongeService.createDialog;
  }

  set createDialog(value: boolean) {
    this.demandeCongeService.createDialog = value;
  }

  get submitted(): boolean {
    return this.demandeCongeService.submitted;
  }

  set submitted(value: boolean) {
    this.demandeCongeService.submitted = value;
  }

  get items(): Array<DemandeConge> {
    return this.demandeCongeService.items;
  }

  set items(value: Array<DemandeConge>) {
    this.demandeCongeService.items = value;
  }
}
