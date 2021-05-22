import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {Facture} from '../../../../../controller/model/Facture.model';
import {FactureService} from '../../../../../controller/service/facture.service';

@Component({
  selector: 'app-facture-create',
  templateUrl: './facture-create.component.html',
  styleUrls: ['./facture-create.component.scss']
})
export class FactureCreateComponent implements OnInit {

  constructor(private messageService: MessageService, private service: FactureService) {
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
          detail: 'Facture Created',
          life: 3000
        });
      });
      this.createDialog = false;
      this.selected = new Facture();
    }
  }
  get selected(): Facture {
    return this.service.selected;
  }

  set selected(value: Facture) {
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

  get items(): Array<Facture> {
    return this.service.items;
  }

  set items(value: Array<Facture>) {
    this.service.items = value;
  }
}
