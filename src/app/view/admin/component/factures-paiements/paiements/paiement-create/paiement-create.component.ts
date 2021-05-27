import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {PaiementService} from '../../../../../../controller/service/paiement.service';
import {EtatPaiementService} from '../../../../../../controller/service/etat-paiement.service';
import {TypePaiementService} from '../../../../../../controller/service/type-paiement.service';
import {Paiement} from '../../../../../../controller/model/paiement.model';
import {TypePaiement} from '../../../../../../controller/model/type-paiement.model';
import {EtatPaiement} from '../../../../../../controller/model/etat-paiement.model';

@Component({
    selector: 'app-paiement-create',
    templateUrl: './paiement-create.component.html',
    styleUrls: ['./paiement-create.component.scss']
})
export class PaiementCreateComponent implements OnInit {

    constructor(private messageService: MessageService,
                private service: PaiementService,
                private etatPaiementService: EtatPaiementService,
                private typePaiementService: TypePaiementService) {
    }

    ngOnInit(): void {
        this.etatPaiementService.findAll().subscribe(data => this.itemsEtats = data);
        this.typePaiementService.findAll().subscribe(data => this.itemsTypes = data);
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
                    detail: 'Paiement Created',
                    life: 3000
                });
            });
            this.createDialog = false;
            this.selected = new Paiement();
        }
    }

    get selected(): Paiement {
        return this.service.selected;
    }

    set selected(value: Paiement) {
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

    get items(): Array<Paiement> {
        return this.service.items;
    }

    set items(value: Array<Paiement>) {
        this.service.items = value;
    }

    get itemsTypes(): Array<TypePaiement> {
        return this.typePaiementService.items;
    }

    set itemsTypes(value: Array<TypePaiement>) {
        this.typePaiementService.items = value;
    }

    get itemsEtats(): Array<EtatPaiement> {
        return this.etatPaiementService.items;
    }

    set itemsEtats(value: Array<EtatPaiement>) {
        this.etatPaiementService.items = value;
    }

}
