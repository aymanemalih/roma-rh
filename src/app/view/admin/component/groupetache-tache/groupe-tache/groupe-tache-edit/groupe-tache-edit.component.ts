import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {GroupeTacheService} from '../../../../../../controller/service/groupe-tache.service';
import {EquipeService} from '../../../../../../controller/service/equipe.service';
import {LotService} from '../../../../../../controller/service/lot.service';
import {CategorieGroupeTacheService} from '../../../../../../controller/service/categorie-groupe-tache.service';
import {EtatGroupeTacheService} from '../../../../../../controller/service/etat-groupe-tache.service';
import {GroupeTache} from '../../../../../../controller/model/groupe-tache.model';
import {Equipe} from '../../../../../../controller/model/equipe.model';
import {Lot} from '../../../../../../controller/model/lot.model';
import {CategorieGroupeTache} from '../../../../../../controller/model/categorie-groupe-tache.model';
import {EtatGroupeTache} from '../../../../../../controller/model/etat-groupe-tache.model';
import {Tache} from '../../../../../../controller/model/tache.model';

@Component({
  selector: 'app-groupe-tache-edit',
  templateUrl: './groupe-tache-edit.component.html',
  styleUrls: ['./groupe-tache-edit.component.scss']
})
export class GroupeTacheEditComponent implements OnInit {

  constructor(private messageService: MessageService,
              private service: GroupeTacheService,
              private equipeService: EquipeService,
              private lotService: LotService,
              private categorieGroupeTacheService: CategorieGroupeTacheService,
              private etatGroupeTacheService: EtatGroupeTacheService) {
  }

  ngOnInit(): void {
    this.equipeService.findAll().subscribe(data => this.itemsEquipes = data);
    this.lotService.findAll().subscribe(data => this.itemsLots = data);
    this.categorieGroupeTacheService.findAll().subscribe(data => this.itemsCategories = data);
    this.etatGroupeTacheService.findAll().subscribe(data => this.itemsEtats = data);
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
      this.selected = new GroupeTache();
    }
  }

  get selected(): GroupeTache {
    return this.service.selected;
  }

  set selected(value: GroupeTache) {
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

  get items(): Array<GroupeTache> {
    return this.service.items;
  }

  set items(value: Array<GroupeTache>) {
    this.service.items = value;
  }

  get itemsEquipes(): Array<Equipe> {
    return this.equipeService.items;
  }

  set itemsEquipes(value: Array<Equipe>) {
    this.equipeService.items = value;
  }

  get itemsLots(): Array<Lot> {
    return this.lotService.items;
  }

  set itemsLots(value: Array<Lot>) {
    this.lotService.items = value;
  }

  get itemsCategories(): Array<CategorieGroupeTache> {
    return this.categorieGroupeTacheService.items;
  }

  set itemsCategories(value: Array<CategorieGroupeTache>) {
    this.categorieGroupeTacheService.items = value;
  }

  get itemsEtats(): Array<EtatGroupeTache> {
    return this.etatGroupeTacheService.items;
  }

  set itemsEtats(value: Array<EtatGroupeTache>) {
    this.etatGroupeTacheService.items = value;
  }

}
