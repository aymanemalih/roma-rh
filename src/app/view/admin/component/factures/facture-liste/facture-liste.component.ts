import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {FactureService} from '../../../../../controller/service/Facture.service';
import {Facture} from '../../../../../controller/model/Facture.model';

@Component({
  selector: 'app-facture-liste',
  templateUrl: './facture-liste.component.html',
  styleUrls: ['./facture-liste.component.scss']
})
export class FactureListeComponent implements OnInit {

  cols: any[];

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private service: FactureService) {
  }

  ngOnInit(): void {
    this.initCol();
    this.service.findAll().subscribe(data => this.items = data);
  }

  public delete(selected: Facture) {
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + selected.code + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteByCode().subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = new Facture();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Facture Deleted',
            life: 3000
          });
        });
      }
    });
  }
  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Factures?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteMultipleByCode().subscribe(data => {
          this.service.deleteMultipleIndexById();
          this.selectes = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Factures Deleted',
            life: 3000
          });
        });
      }
    });
  }
  public openCreate() {
    this.selected = new Facture();
    this.submitted = false;
    this.createDialog = true;
  }

  public edit(facture: Facture) {
    this.selected = {...facture};
    this.editDialog = true;
  }
  public view(facture: Facture) {
    this.selected = {...facture};
    this.viewDialog = true;
  }

  private initCol() {
    this.cols = [
      {field: 'libelle', header: 'libelle'},
      {field: 'code', header: 'code'},
      {field: 'totalHeursCalcules', header: 'totalHeursCalcules'},
      {field: 'totalHeursFactures', header: 'totalHeursFactures'},
      {field: 'montantCalcule', header: 'montantCalcule'},
      {field: 'montantFacture', header: 'montantFacture'},
      {field: 'dateFacture', header: 'dateFacture'},
      {field: 'client.libelle', header: 'client.libelle'},
      {field: 'etatFacture.libelle', header: 'etatFacture.libelle'}
    ];
  }

  get selected(): Facture {
    return this.service.selected;
  }

  set selected(value: Facture) {
    this.service.selected = value;
  }

  get items(): Array<Facture> {
    return this.service.items;
  }

  set items(value: Array<Facture>) {
    this.service.items = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

  get selectes(): Array<Facture> {
    return this.service.selectes;
  }

  set selectes(value: Array<Facture>) {
    this.service.selectes = value;
  }


}
