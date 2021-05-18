import { Component, OnInit } from '@angular/core';
import {TacheService} from '../../../../../../controller/service/tache.service';
import {Tache} from '../../../../../../controller/model/tache.model';


@Component({
  selector: 'app-tache-view',
  templateUrl: './tache-view.component.html',
  styleUrls: ['./tache-view.component.scss']
})
export class TacheViewComponent implements OnInit {

  constructor(private service: TacheService) {
  }

  ngOnInit(): void {
  }

  get selected(): Tache {
    return this.service.selected;
  }

  set selected(value: Tache) {
    this.service.selected = value;
  }

  public hideViewDialog() {
    this.viewDialog = false;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

}
