import {Component, OnInit} from '@angular/core';
import {GroupeTache} from '../../../../../../controller/model/groupe-tache.model';
import {GroupeTacheService} from '../../../../../../controller/service/groupe-tache.service';

@Component({
    selector: 'app-groupe-tache-view',
    templateUrl: './groupe-tache-view.component.html',
    styleUrls: ['./groupe-tache-view.component.scss']
})
export class GroupeTacheViewComponent implements OnInit {

    constructor(private service: GroupeTacheService) {
    }

    ngOnInit(): void {
    }

    get selected(): GroupeTache {
        return this.service.selected;
    }

    set selected(value: GroupeTache) {
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
