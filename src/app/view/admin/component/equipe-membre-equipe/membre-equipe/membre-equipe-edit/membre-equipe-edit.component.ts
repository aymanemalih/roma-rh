import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {MembreEquipeService} from '../../../../../../controller/service/membre-equipe.service';
import {CollaborateurService} from '../../../../../../controller/service/collaborateur.service';
import {MembreEquipe} from '../../../../../../controller/model/membre-equipe';
import {Collaborateur} from '../../../../../../controller/model/collaborateur.model';

@Component({
  selector: 'app-membre-equipe-edit',
  templateUrl: './membre-equipe-edit.component.html',
  styleUrls: ['./membre-equipe-edit.component.scss']
})
export class MembreEquipeEditComponent implements OnInit {

  constructor(private messageService: MessageService, private service: MembreEquipeService,
              private collaborateurService: CollaborateurService) {
  }

  ngOnInit(): void {
  }

  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }

 /* public save() {
    this.submitted = true;
    if (this.selected.equipe.libelle.trim()) {
      this.service.save().subscribe(data => {
        this.items.push({...data});
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'MembreEquipe Created',
          life: 3000
        });
      });
      this.createDialog = false;
      this.selected = new MembreEquipe();
    }
  } */
  get selected(): MembreEquipe {
    return this.service.selected;
  }

  set selected(value: MembreEquipe) {
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

  get items(): Array<MembreEquipe> {
    return this.service.items;
  }

  set items(value: Array<MembreEquipe>) {
    this.service.items = value;
  }
  get collaborateurs(): Array<Collaborateur> {
    return this.collaborateurService.items;
  }


}
