import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {Entreprise} from '../../../../../../controller/model/entreprise.model';
import {EntrepriseService} from '../../../../../../controller/service/entreprise.service';

@Component({
  selector: 'app-entreprise-create',
  templateUrl: './entreprise-create.component.html',
  styleUrls: ['./entreprise-create.component.scss']
})
export class EntrepriseCreateComponent implements OnInit {
  constructor(private messageService: MessageService, private service: EntrepriseService) {
  }

  ngOnInit(): void {
  }

  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }

  public save() {
    this.submitted = true;
    if (this.selected.code.trim()) {
      this.service.save().subscribe(data => {
        this.items.push({...data});
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Entreprise Created',
          life: 3000
        });
      });
      this.createDialog = false;
      this.selected = new Entreprise();
    }
  }
  get selected(): Entreprise {
    return this.service.selected;
  }

  set selected(value: Entreprise) {
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

  get items(): Array<Entreprise> {
    return this.service.items;
  }

  set items(value: Array<Entreprise>) {
    this.service.items = value;
  }
}
