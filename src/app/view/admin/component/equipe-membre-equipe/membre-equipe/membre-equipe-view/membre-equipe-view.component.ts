import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {EquipeService} from '../../../../../../controller/service/equipe.service';
import {Equipe} from '../../../../../../controller/model/equipe.model';
import {MembreEquipe} from '../../../../../../controller/model/membre-equipe';
import {MembreEquipeService} from '../../../../../../controller/service/membre-equipe.service';

@Component({
  selector: 'app-membre-equipe-view',
  templateUrl: './membre-equipe-view.component.html',
  styleUrls: ['./membre-equipe-view.component.scss']
})
export class MembreEquipeViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: MembreEquipeService) { }

  ngOnInit(): void {
  }
  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): MembreEquipe {
    return this.service.selected;
  }

  set selected(value: MembreEquipe) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }



}
