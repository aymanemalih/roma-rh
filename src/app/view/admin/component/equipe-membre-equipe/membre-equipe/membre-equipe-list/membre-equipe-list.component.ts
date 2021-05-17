import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {EquipeService} from '../../../../../../controller/service/equipe.service';
import {Equipe} from '../../../../../../controller/model/equipe.model';
import {MembreEquipe} from '../../../../../../controller/model/membre-equipe';
import {MembreEquipeService} from '../../../../../../controller/service/membre-equipe.service';

@Component({
  selector: 'app-membre-equipe-list',
  templateUrl: './membre-equipe-list.component.html',
  styleUrls: ['./membre-equipe-list.component.scss']
})
export class MembreEquipeListComponent implements OnInit {

  cols: any[];
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private service: MembreEquipeService) { }

  ngOnInit(): void {
    this.initCol();
    this.service.findAll().subscribe(data => this.items = data);
  }
  private initCol() {
    this.cols = [
      {field: 'equipe', header: 'Equipe'},
      {field: 'collaborateur', header: 'Collaborateur'}
    ];
  }
  public delete(selected: MembreEquipe) {
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + selected.collaborateur + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteByCode().subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = new MembreEquipe();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Member Deleted',
            life: 3000
          });
        });
      }
    });
  }
  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected membresEquipe?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteMultipleByCode().subscribe(data => {
          this.service.deleteMultipleIndexById();
          this.selectes = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'MembresEquipe Deleted',
            life: 3000
          });
        });
      }
    });
  }
  public openCreate() {
    this.selected = new MembreEquipe();
    this.submitted = false;
    this.createDialog = true;
  }

  public edit(membreEquipe: MembreEquipe) {
    this.selected = {...membreEquipe};
    this.editDialog = true;
  }
  public view(membreEquipe: MembreEquipe) {
    this.selected = {...membreEquipe};
    this.viewDialog = true;
  }
  get selected(): MembreEquipe {
    return this.service.selected;
  }

  set selected(value: MembreEquipe) {
    this.service.selected = value;
  }

  get items(): Array<MembreEquipe> {
    return this.service.items;
  }

  set items(value: Array<MembreEquipe>) {
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

  get selectes(): Array<MembreEquipe> {
    return this.service.selectes;
  }

  set selectes(value: Array<MembreEquipe>) {
    this.service.selectes = value;
  }


}
