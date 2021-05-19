import { Component, OnInit } from '@angular/core';
import {Equipe} from '../../../../../../controller/model/equipe.model';
import {EquipeService} from '../../../../../../controller/service/equipe.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {MembreEquipeService} from '../../../../../../controller/service/membre-equipe.service';
import {GroupeTache} from '../../../../../../controller/model/groupe-tache.model';
import {Entreprise} from '../../../../../../controller/model/entreprise.model';

@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.scss']
})
export class EquipeListComponent implements OnInit {

  cols: any[];
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: EquipeService,
              private serviceItems: MembreEquipeService) { }

  ngOnInit(): void {
    this.initCol();
    this.service.findAll().subscribe(data => this.items = data);
  }
  private initCol() {
    this.cols = [
      {field: 'libelle', header: 'Libelle'},
      {field: 'responsable', header: 'Responsable'},
      {field: 'etatEquipe', header: 'EtatEquipe'}
    ];
  }
  public delete(selected: Equipe) {
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + selected.code + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteByCode().subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = new Equipe();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Equipe Deleted',
            life: 3000
          });
        });
      }
    });
  }
  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected equipes?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteMultipleByCode().subscribe(data => {
          this.service.deleteMultipleIndexById();
          this.selectes = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Equipes Deleted',
            life: 3000
          });
        });
      }
    });
  }
  public openCreate() {
    this.selected = new Equipe();
    this.submitted = false;
    this.createDialog = true;
  }

  public edit(equipe: Equipe) {
    this.selected = {...equipe};
    this.editDialog = true;
  }
  public view(equipe: Equipe) {
    this.selected = {...equipe};
    this.viewDialog = true;
  }
  get selected(): Equipe {
    return this.service.selected;
  }

  set selected(value: Equipe) {
    this.service.selected = value;
  }

  get items(): Array<Equipe> {
    return this.service.items;
  }

  set items(value: Array<Equipe>) {
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

  get selectes(): Array<Equipe> {
    return this.service.selectes;
  }

  set selectes(value: Array<Equipe>) {
    this.service.selectes = value;
  }
  findItems(selected: Equipe) {
    this.serviceItems.findByEquipeCode(selected).subscribe(
        data => {
          console.log(data);
          this.serviceItems.items = data;
        }
    );
  }

}
