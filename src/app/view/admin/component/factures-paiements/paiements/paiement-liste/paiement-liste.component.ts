import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {PaiementService} from '../../../../../../controller/service/paiement.service';
import {FactureService} from '../../../../../../controller/service/facture.service';
import {Paiement} from '../../../../../../controller/model/paiement.model';
import {Facture} from '../../../../../../controller/model/facture.model';

@Component({
  selector: 'app-paiement-liste',
  templateUrl: './paiement-liste.component.html',
  styleUrls: ['./paiement-liste.component.scss']
})
export class PaiementListeComponent implements OnInit {
  cols: any[];

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: PaiementService,
              private factureService: FactureService) {
  }

  ngOnInit(): void {
    this.initCol();
  }

  public delete(selected: Paiement) {
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + selected.code + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteByCode().subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = new Paiement();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Paiement Deleted',
            key: 'paiement',
            life: 3000
          });
        });
      }
    });
  }
  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Paiements?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteMultipleByCode().subscribe(data => {
          this.service.deleteMultipleIndexById();
          this.selectes = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Paiements Deleted',
            life: 3000
          });
        });
      }
    });
  }
  public openCreate() {
    this.selected = new Paiement();
    this.submitted = false;
    this.createDialog = true;
    this.service.selected.facture = this.factureService.selected;
  }

  public edit(paiement: Paiement) {
    this.selected = {...paiement};
    this.editDialog = true;
  }
  public view(paiement: Paiement) {
    this.selected = {...paiement};
    this.viewDialog = true;
  }

  private initCol() {
    this.cols = [
      {field: 'libelle', header: 'Libelle'},
      {field: 'date', header: 'Date De Paiement'},
      {field: 'type', header: 'Type De Paiement'},
      {field: 'montant', header: 'Montant'}
    ];
  }

  get selected(): Paiement {
    return this.service.selected;
  }

  set selected(value: Paiement) {
    this.service.selected = value;
  }

  get items(): Array<Paiement> {
    return this.service.items;
  }

  set items(value: Array<Paiement>) {
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

  get selectes(): Array<Paiement> {
    return this.service.selectes;
  }

  set selectes(value: Array<Paiement>) {
    this.service.selectes = value;
  }

  get selectedFacture(): Facture {
    return this.factureService.selected;
  }


}
