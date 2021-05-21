import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {CollaborateurService} from '../../../../../../controller/service/collaborateur.service';
import {Collaborateur} from '../../../../../../controller/model/collaborateur.model';
import {MembreEquipe} from '../../../../../../controller/model/membre-equipe';
import {MembreEquipeService} from '../../../../../../controller/service/membre-equipe.service';
import {EquipeService} from '../../../../../../controller/service/equipe.service';
import {Equipe} from '../../../../../../controller/model/equipe.model';

@Component({
  selector: 'app-membre-equipe-create',
  templateUrl: './membre-equipe-create.component.html',
  styleUrls: ['./membre-equipe-create.component.scss']
})
export class MembreEquipeCreateComponent implements OnInit {

  constructor(private messageService: MessageService, private service: MembreEquipeService,
              private collaborateurService: CollaborateurService,
              private equipeService: EquipeService) {
  }

  ngOnInit(): void {
    this.collaborateurService.findAll().subscribe(
        data=>{
          this.collaborateurService.items = data;
        }
    );
    this.equipeService.findAll().subscribe(
        data=>{
          this.equipeService.items = data;
        }
    );
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
  }*/
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
  get equipes(): Array<Equipe>{
    return this.equipeService.items;
  }

}
