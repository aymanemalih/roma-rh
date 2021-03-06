import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {TacheService} from '../../../../../../controller/service/tache.service';
import {Tache} from '../../../../../../controller/model/tache.model';
import {GroupeTache} from '../../../../../../controller/model/groupe-tache.model';
import {GroupeTacheService} from '../../../../../../controller/service/groupe-tache.service';

@Component({
  selector: 'app-tache-list',
  templateUrl: './tache-list.component.html',
  styleUrls: ['./tache-list.component.scss']
})
export class TacheListComponent implements OnInit {

  cols: any[];

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: TacheService,
              private serviceGrp: GroupeTacheService) {
  }

  ngOnInit(): void {
    this.initCol();
  }

  public delete(selected: Tache) {
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + selected.code + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteByCode().subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = new Tache();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Tache Deleted',
            life: 3000
          });
        });
      }
    });
  }
  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Taches?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteMultipleByCode().subscribe(data => {
          this.service.deleteMultipleIndexById();
          this.selectes = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Taches Deleted',
            life: 3000
          });
        });
      }
    });
  }
  public openCreate() {
    this.selected = new Tache();
    this.submitted = false;
    this.createDialog = true;
    this.service.selected.groupeTache = this.serviceGrp.selected;
  }

  public edit(tache: Tache) {
    this.selected = {...tache};
    this.editDialog = true;
  }
  public view(tache: Tache) {
    this.selected = {...tache};
    this.viewDialog = true;
  }

  private initCol() {
    this.cols = [
      {field: 'libelle', header: 'Libelle'},
      {field: 'datedemarre', header: 'Date D??marrage'},
      {field: 'responsable', header: 'Responsable'},
      {field: 'categorieTache', header: 'Cat??gorie Tache'}
    ];
  }

  get selected(): Tache {
    return this.service.selected;
  }

  set selected(value: Tache) {
    this.service.selected = value;
  }

  get items(): Array<Tache> {
    return this.service.items;
  }

  set items(value: Array<Tache>) {
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

  get selectes(): Array<Tache> {
    return this.service.selectes;
  }

  set selectes(value: Array<Tache>) {
    this.service.selectes = value;
  }

  get selectedGroupeTache(): GroupeTache {
    return this.serviceGrp.selected;
  }

}
