import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {EntrepriseService} from '../../../../../../controller/service/entreprise.service';
import {Entreprise} from '../../../../../../controller/model/entreprise.model';

@Component({
  selector: 'app-entreprise-view',
  templateUrl: './entreprise-view.component.html',
  styleUrls: ['./entreprise-view.component.scss']
})
export class EntrepriseViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: EntrepriseService) {
  }

  ngOnInit(): void {
  }

  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): Entreprise {
    return this.service.selected;
  }

  set selected(value: Entreprise) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

}
