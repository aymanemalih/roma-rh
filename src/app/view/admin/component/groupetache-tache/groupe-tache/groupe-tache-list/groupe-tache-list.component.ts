import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {TacheService} from '../../../../../../controller/service/tache.service';
import {GroupeTacheService} from '../../../../../../controller/service/groupe-tache.service';
import {GroupeTache} from '../../../../../../controller/model/groupe-tache.model';

@Component({
  selector: 'app-groupe-tache-list',
  templateUrl: './groupe-tache-list.component.html',
  styleUrls: ['./groupe-tache-list.component.scss']
})
export class GroupeTacheListComponent implements OnInit {

  cols: any[];

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: GroupeTacheService, private serviceItems: TacheService) {
  }

  ngOnInit(): void {
    this.initCol();
    this.service.findAll().subscribe(data => this.items = data);
  }

  public delete(selected: GroupeTache) {
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + selected.code + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteByCode().subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = new GroupeTache();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'GroupeTache Deleted',
            life: 3000
          });
        });
      }
    });
  }

  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected GroupeTaches?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteMultipleByCode().subscribe(data => {
          this.service.deleteMultipleIndexById();
          this.selectes = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'GroupeTaches Deleted',
            life: 3000
          });
        });
      }
    });
  }

  public openCreate() {
    this.selected = new GroupeTache();
    this.submitted = false;
    this.createDialog = true;
  }

  public edit(groupeTache: GroupeTache) {
    this.selected = {...groupeTache};
    this.editDialog = true;
  }

  public view(groupeTache: GroupeTache) {
    this.selected = {...groupeTache};
    this.viewDialog = true;
  }

  private initCol() {
    this.cols = [
      {field: 'equipe', header: 'Equipe'},
      {field: 'categorie', header: 'Catégorie'},
      {field: 'libelle', header: 'Libelle'},
      {field: 'lot', header: 'Lot'},
      {field: 'datedemarre', header: 'Date Démarrage'}
    ];
  }

  get selected(): GroupeTache {
    return this.service.selected;
  }

  set selected(value: GroupeTache) {
    this.service.selected = value;
  }

  get items(): Array<GroupeTache> {
    return this.service.items;
  }

  set items(value: Array<GroupeTache>) {
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

  get selectes(): Array<GroupeTache> {
    return this.service.selectes;
  }

  set selectes(value: Array<GroupeTache>) {
    this.service.selectes = value;
  }

  findItems(selected: GroupeTache) {
    this.serviceItems.findByGroupeTacheCode(selected.code).subscribe(
        data => {
          this.serviceItems.items = data;
        }
    );
  }

}
