import { Component, OnInit } from '@angular/core';
import {EtatEquipe} from '../../../../../../controller/model/etat-equipe.model';
import {Equipe} from '../../../../../../controller/model/equipe.model';
import {Collaborateur} from '../../../../../../controller/model/collaborateur.model';
import {CollaborateurService} from '../../../../../../controller/service/collaborateur.service';
import {EtatEquipeService} from '../../../../../../controller/service/etat-equipe.service';
import {EquipeService} from '../../../../../../controller/service/equipe.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-equipe-create',
  templateUrl: './equipe-create.component.html',
  styleUrls: ['./equipe-create.component.scss']
})
export class EquipeCreateComponent implements OnInit {

  constructor(private messageService: MessageService, private service: EquipeService,
              private collaborateurService: CollaborateurService,
              private etatEquipeService: EtatEquipeService) {
  }

  ngOnInit(): void {
  }

  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }

  public save() {
    this.submitted = true;
    if (this.selected.libelle.trim()) {
      this.service.save().subscribe(data => {
        this.items.push({...data});
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Team Created',
          life: 3000
        });
      });
      this.createDialog = false;
      this.selected = new Equipe();
    }
  }
  get selected(): Equipe {
    return this.service.selected;
  }

  set selected(value: Equipe) {
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
