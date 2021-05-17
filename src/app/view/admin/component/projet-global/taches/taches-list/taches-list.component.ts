import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {TacheService} from '../../../../../../controller/service/tache.service';
import {Tache} from '../../../../../../controller/model/tache.model';

@Component({
  selector: 'app-taches-list',
  templateUrl: './taches-list.component.html',
  styleUrls: ['./taches-list.component.scss']
})
export class TachesListComponent implements OnInit {

  cols: any[];

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: TacheService) {
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
            detail: 'Taches Deleted',
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
      {field: 'libelle', header: 'Libelle'}
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


}
