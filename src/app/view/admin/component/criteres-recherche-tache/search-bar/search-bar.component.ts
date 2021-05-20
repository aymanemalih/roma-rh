import { Component, OnInit } from '@angular/core';
import {Client} from '../../../../../controller/model/client.model';
import {ClientService} from '../../../../../controller/service/client.service';
import {EquipeService} from '../../../../../controller/service/equipe.service';
import {Equipe} from '../../../../../controller/model/equipe.model';
import {Collaborateur} from '../../../../../controller/model/collaborateur.model';
import {CollaborateurService} from '../../../../../controller/service/collaborateur.service';
import {NroService} from '../../../../../controller/service/nro.service';
import {SroService} from '../../../../../controller/service/sro.service';
import {Nro} from '../../../../../controller/model/nro.model';
import {Sro} from '../../../../../controller/model/sro.model';
import {TacheService} from '../../../../../controller/service/tache.service';
import {TacheVo} from '../../../../../controller/model/tache-vo.model';
import {MembreEquipe} from '../../../../../controller/model/membre-equipe';
import {Lot} from '../../../../../controller/model/lot.model';
import {LotService} from '../../../../../controller/service/lot.service';
import {MembreEquipeService} from '../../../../../controller/service/membre-equipe.service';
import {Projet} from '../../../../../controller/model/projet.model';
import {ProjetService} from '../../../../../controller/service/projet.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private service: TacheService,
              private clientService: ClientService,
              private equipeService: EquipeService,
              private collaborateurService: CollaborateurService,
              private nroService: NroService,
              private sroService: SroService,
              private lotService: LotService,
              private membreEquipeService: MembreEquipeService,
              private projetService: ProjetService) { }

  ngOnInit(): void {
    this.clientService.findAll().subscribe(
        data => {
          this.clientService.items = data;
        }
    );
    this.equipeService.findAll().subscribe(
        data => {
          this.equipeService.items = data;
        }
    );
    this.projetService.findAll().subscribe(
        data => {
          this.projetService.items = data;
        }
    );
    this.lotService.findAll().subscribe(
            data => {
              this.lotService.items = data;
            }
        );
    this.collaborateurService.findAll().subscribe(
        data => {
          this.collaborateurService.items = data;
        }
    );
    this.sroService.findAll().subscribe(
        data => {
          this.sroService.items = data;
        }
    );
  }
  reset(){
    this.service.tacheVo = null;
  }
  findMembers(){
    this.tacheVo.membreEquipeId = null;
    this.membreEquipeService.findByEquipeId(this.tacheVo.equipeId).subscribe(
        data => {
          console.log(data);
          this.membreEquipeService.items = data;
          console.log(this.membreEquipeService.items);
        }
    );
  }
  public findSelectedMember(id: number): number {
    return this.membreEquipeService.findIndexById(id);
  }

  public findLots() {
    this.lotService.findByProjetId(this.tacheVo.projetId).subscribe(
        data => {
          this.lotService.items = data;
        }
    );
  }
  public findProject() {
    console.log(this.tacheVo.clientId);
    this.projetService.findByClientId(this.tacheVo.clientId).subscribe(
        data => {
          this.projetService.items = data;
        }
    );
  }
  search(){
    this.service.search().subscribe(
        data => {
          this.service.items = data;
        }
    );
  }
  get tacheVo(): TacheVo{
    return this.service.tacheVo;
  }
  get itemsClients(): Array<Client> {
    return this.clientService.items;
  }
  set itemsClients(value: Array<Client>) {
    this.clientService.items = value;
  }
  get itemsEquipes(): Array<Equipe> {
    return this.equipeService.items;
  }
  set itemsEquipes(value: Array<Equipe>) {
    this.equipeService.items = value;
  }
  get itemsCollaborateurs(): Array<Collaborateur> {
    return this.collaborateurService.items;
  }
  set itemsCollaborateurs(value: Array<Collaborateur>) {
    this.collaborateurService.items = value;
  }
  get itemsNros(): Array<Nro> {
    return this.nroService.items;
  }
  set itemsNros(value: Array<Nro>) {
    this.nroService.items = value;
  }
  get itemsSros(): Array<Sro> {
    return this.sroService.items;
  }
  set itemsSros(value: Array<Sro>){
    this.sroService.items = value;
  }
  get itemsProjets(): Array<Projet>{
    return this.projetService.items;
  }
  set itemsProjets(value: Array<Projet>) {
    this.projetService.items = value;
  }
  get itemsmembresEquipe(): Array<MembreEquipe>{
    return this.membreEquipeService.items;
  }
  set itemsmembresEquipe(value: Array<MembreEquipe>) {
    this.membreEquipeService.items = value;
  }
  get itemslots(): Array<Lot>{
    return this.lotService.items;
  }
  set itemslots(value: Array<Lot>) {
    this.lotService.items = value;
  }

}
