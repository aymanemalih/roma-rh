import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../../../../controller/service/client.service';
import {Entreprise} from '../../../../../../controller/model/entreprise.model';
import {Client} from '../../../../../../controller/model/client.model';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {

  constructor(private clientService: ClientService,
              private messageService: MessageService) { }

  ngOnInit(): void {
  }
  public edit() {
    this.submitted = true;
    if (this.selected.code.trim()) {
      if (this.selected.id) {
        this.items[this.clientService.findIndexById(this.selected.id)] = this.selected;
        this.clientService.edit().subscribe(data => {
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
      this.selected = new Client();
    }
  }
  public hideEditDialog() {
    this.editDialog = false;
  }
  get selected(): Client {
    return this.clientService.selected;
  }

  set selected(value: Client) {
    this.clientService.selected = value;
  }

  get editDialog(): boolean {
    return this.clientService.editDialog;
  }

  set editDialog(value: boolean) {
    this.clientService.editDialog = value;
  }

  get submitted(): boolean {
    return this.clientService.submitted;
  }

  set submitted(value: boolean) {
    this.clientService.submitted = value;
  }

  get items(): Array<Client> {
    return this.clientService.items;
  }

  set items(value: Array<Client>) {
    this.clientService.items = value;
  }
}
