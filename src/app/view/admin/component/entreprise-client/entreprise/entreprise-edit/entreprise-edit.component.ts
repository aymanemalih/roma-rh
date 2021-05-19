import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {EntrepriseService} from '../../../../../../controller/service/entreprise.service';
import {Entreprise} from '../../../../../../controller/model/entreprise.model';



@Component({
  selector: 'app-entreprise-edit',
  templateUrl: './entreprise-edit.component.html',
  styleUrls: ['./entreprise-edit.component.scss']
})
export class EntrepriseEditComponent implements OnInit {

  constructor(private messageService: MessageService, private service: EntrepriseService) {
  }

  ngOnInit(): void {
  }

  public edit() {
    this.submitted = true;
    if (this.selected.code.trim()) {
      if (this.selected.id) {
        this.items[this.service.findIndexById(this.selected.id)] = this.selected;
        this.service.edit().subscribe(data => {
          this.selected = data;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Entreprise Updated',
            life: 3000
          });
        });
      }
      this.editDialog = false;
      this.selected = new Entreprise();
    }
  }

  public hideEditDialog() {
    this.editDialog = false;
  }
  get selected(): Entreprise {
    return this.service.selected;
  }

  set selected(value: Entreprise) {
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

  get items(): Array<Entreprise> {
    return this.service.items;
  }

  set items(value: Array<Entreprise>) {
    this.service.items = value;
  }

}
