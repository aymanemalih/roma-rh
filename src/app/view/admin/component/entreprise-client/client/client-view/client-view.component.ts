import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../../../../controller/service/client.service';
import {Entreprise} from '../../../../../../controller/model/entreprise.model';
import {Client} from '../../../../../../controller/model/client.model';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

  constructor(private  clientService: ClientService) { }

  ngOnInit(): void {
  }
  public hideViewDialog() {
    this.viewDialog = false;
  }


  get selected(): Client {
    return this.clientService.selected;
  }

  set selected(value: Client) {
    this.clientService.selected = value;
  }

  get viewDialog(): boolean {
    return this.clientService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.clientService.viewDialog = value;
  }

}
