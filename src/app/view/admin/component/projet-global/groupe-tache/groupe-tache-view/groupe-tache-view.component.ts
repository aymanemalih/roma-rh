import {GroupeTacheService} from '../../../../../../controller/service/groupe-tache.service';
import {GroupeTache} from '../../../../../../controller/model/groupe-tache.model';
import {MessageService} from 'primeng/api';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-groupes-tache-view',
    templateUrl: './groupe-tache-view.component.html',
    styleUrls: ['./groupe-tache-view.component.scss']
})
export class GroupesTacheViewComponent implements OnInit {

    constructor(private messageService: MessageService, private service: GroupeTacheService) {
    }

    ngOnInit(): void {
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get selected(): GroupeTache {
        return this.service.selected;
    }

    set selected(value: GroupeTache) {
        this.service.selected = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }


}
