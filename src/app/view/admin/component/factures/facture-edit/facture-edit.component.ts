import { Component, OnInit } from '@angular/core';
import {FactureService} from '../../../../../controller/service/facture.service';
import {EtatFactureService} from '../../../../../controller/service/etat-facture.service';
import {MessageService} from 'primeng/api';
import {Facture} from '../../../../../controller/model/facture.model';
import {EtatFacture} from '../../../../../controller/model/etat-facture.model';

@Component({
  selector: 'app-facture-edit',
  templateUrl: './facture-edit.component.html',
  styleUrls: ['./facture-edit.component.scss']
})
export class FactureEditComponent implements OnInit {

  constructor(private messageService: MessageService,
              private etatFactureService: EtatFactureService,
              private service: FactureService) {
  }

  ngOnInit(): void {
    this.service.selected = null;
    this.etatFactureService.findAll().subscribe(data => this.itemsEtat = data);
  }

  public hideEditDialog() {
    this.editDialog = false;
  }

  public edit() {
    this.submitted = true;
    if (this.selected.code.trim()) {
      if (this.selected.id) {
        this.items[this.service.findIndexById(this.selected.id)] = this.selected;
        this.service.edit().subscribe(data => {
          this.selected = data;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Facture Updated',
            life: 3000
          });
        });
      }
      this.editDialog = false;
      this.selected = new Facture();
    }
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get selected(): Facture {
    return this.service.selected;
  }

  set selected(value: Facture) {
    this.service.selected = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get items(): Array<Facture> {
    return this.service.items;
  }

  set items(value: Array<Facture>) {
    this.service.items = value;
  }


  get itemsEtat(): Array<EtatFacture> {
    return this.etatFactureService.items;
  }

  set itemsEtat(value: Array<EtatFacture>) {
    this.etatFactureService.items = value;
  }

}
