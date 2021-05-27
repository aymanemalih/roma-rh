import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {PaiementService} from '../../../../../../controller/service/paiement.service';
import {TypePaiementService} from '../../../../../../controller/service/type-paiement.service';
import {EtatPaiementService} from '../../../../../../controller/service/etat-paiement.service';
import {FactureService} from '../../../../../../controller/service/facture.service';
import {Paiement} from '../../../../../../controller/model/paiement.model';
import {TypePaiement} from '../../../../../../controller/model/type-paiement.model';
import {EtatPaiement} from '../../../../../../controller/model/etat-paiement.model';

@Component({
  selector: 'app-paiement-edit',
  templateUrl: './paiement-edit.component.html',
  styleUrls: ['./paiement-edit.component.scss']
})
export class PaiementEditComponent implements OnInit {

  constructor(private messageService: MessageService,
              private service: PaiementService,
              private typePaiementService: TypePaiementService,
              private etatPaiementService: EtatPaiementService,
              private factureService: FactureService) {
  }

  ngOnInit(): void {
    this.etatPaiementService.findAll().subscribe(data => this.itemsEtats = data);
    this.typePaiementService.findAll().subscribe(data => this.itemsTypes = data);
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
            detail: 'Commande Updated',
            life: 3000
          });
        });
      }
      this.editDialog = false;
      this.selected = new Paiement();
    }
  }

  get selected(): Paiement {
    return this.service.selected;
  }

  set selected(value: Paiement) {
    this.service.selected = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get items(): Array<Paiement> {
    return this.service.items;
  }

  set items(value: Array<Paiement>) {
    this.service.items = value;
  }

  get itemsTypes(): Array<TypePaiement> {
    return this.typePaiementService.items;
  }

  set itemsTypes(value: Array<TypePaiement>) {
    this.typePaiementService.items = value;
  }

  get itemsEtats(): Array<EtatPaiement> {
    return this.etatPaiementService.items;
  }

  set itemsEtats(value: Array<EtatPaiement>) {
    this.etatPaiementService.items = value;
  }
}
