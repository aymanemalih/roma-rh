import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {Lot} from '../../../../../../controller/model/Lot.model';
import {LotService} from '../../../../../../controller/service/lot.service';

@Component({
  selector: 'app-lot-view',
  templateUrl: './lot-view.component.html',
  styleUrls: ['./lot-view.component.scss']
})
export class LotViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: LotService) { }

  ngOnInit(): void {
  }
  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): Lot {
    return this.service.selected;
  }

  set selected(value: Lot) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }


}
