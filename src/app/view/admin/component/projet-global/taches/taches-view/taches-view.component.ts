import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";
import {TacheService} from "../../../../../../controller/service/tache.service";
import {Tache} from "../../../../../../controller/model/tache.model";

@Component({
  selector: 'app-taches-view',
  templateUrl: './taches-view.component.html',
  styleUrls: ['./taches-view.component.scss']
})
export class TachesViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: TacheService) {
  }

  ngOnInit(): void {
  }

  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): Tache {
    return this.service.selected;
  }

  set selected(value: Tache) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }


}
