import {Component, OnInit} from '@angular/core';
import {PaiementService} from '../../../../../../controller/service/paiement.service';
import {Paiement} from '../../../../../../controller/model/paiement.model';

@Component({
    selector: 'app-paiement-view',
    templateUrl: './paiement-view.component.html',
    styleUrls: ['./paiement-view.component.scss']
})
export class PaiementViewComponent implements OnInit {

    constructor(private service: PaiementService) {
    }

    ngOnInit(): void {
    }

    get selected(): Paiement {
        return this.service.selected;
    }

    set selected(value: Paiement) {
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
