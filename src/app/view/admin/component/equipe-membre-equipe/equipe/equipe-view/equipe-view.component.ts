import { Component, OnInit } from '@angular/core';
import {EquipeService} from '../../../../../../controller/service/equipe.service';
import {Equipe} from '../../../../../../controller/model/equipe.model';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-equipe-view',
  templateUrl: './equipe-view.component.html',
  styleUrls: ['./equipe-view.component.scss']
})
export class EquipeViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: EquipeService) { }

  ngOnInit(): void {
  }
  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): Equipe {
    return this.service.selected;
  }

  set selected(value: Equipe) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }


}
