import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {ClientService} from '../../../../../../controller/service/client.service';
import {Client} from "../../../../../../controller/model/client.model";


@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  constructor(private messageService: MessageService, private service: ClientService) {
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
          detail: 'Client Created',
          life: 3000
        });
      });
      this.createDialog = false;
      this.selected = new Client();
    }
  }
  get selected(): Client {
    return this.service.selected;
  }

  set selected(value: Client) {
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

  get items(): Array<Client> {
    return this.service.items;
  }

  set items(value: Array<Client>) {
    this.service.items = value;
  }
}
