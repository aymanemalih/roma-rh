import { Component, OnInit } from '@angular/core';
import {Equipe} from '../../../../../../controller/model/equipe.model';
import {EtatEquipe} from '../../../../../../controller/model/etat-equipe.model';
import {Collaborateur} from '../../../../../../controller/model/collaborateur.model';
import {MessageService} from 'primeng/api';
import {EquipeService} from '../../../../../../controller/service/equipe.service';
import {CollaborateurService} from '../../../../../../controller/service/collaborateur.service';
import {EtatEquipeService} from '../../../../../../controller/service/etat-equipe.service';

@Component({
  selector: 'app-equipe-edit',
  templateUrl: './equipe-edit.component.html',
  styleUrls: ['./equipe-edit.component.scss']
})
export class EquipeEditComponent implements OnInit {


  constructor(private messageService: MessageService, private service: EquipeService,
              private collaborateurService: CollaborateurService,
              private etatEquipeService: EtatEquipeService) { }

  ngOnInit(): void {
  }
  public edit() {
    this.submitted = true;
    if (this.selected.libelle.trim()) {
      if (this.selected.id) {
        this.items[this.service.findIndexById(this.selected.id)] = this.selected;
        this.service.edit().subscribe(data => {
          this.selected = data;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Equipe Updated',
            life: 3000
          });
        });
      }
      this.editDialog = false;
      this.selected = new Equipe();
    }
  }

  public hideEditDialog() {
    this.editDialog = false;
  }
  get selected(): Equipe {
    return this.service.selected;
  }

  set selected(value: Equipe) {
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

  get items(): Array<Equipe> {
    return this.service.items;
  }

  set items(value: Array<Equipe>) {
    this.service.items = value;
  }
  get etatEquipes(): Array<EtatEquipe> {
    return this.etatEquipeService.items;
  }
  get collaborateurs(): Array<Collaborateur> {
    return this.collaborateurService.items;
  }
}
