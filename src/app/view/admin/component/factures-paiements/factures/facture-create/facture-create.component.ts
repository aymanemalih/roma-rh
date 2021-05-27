import {Component, OnInit} from '@angular/core';
import {FactureService} from '../../../../../../controller/service/facture.service';
import {ClientService} from '../../../../../../controller/service/client.service';
import {EtatFactureService} from '../../../../../../controller/service/etat-facture.service';
import {MessageService} from 'primeng/api';
import {Facture} from '../../../../../../controller/model/facture.model';
import {EtatFacture} from '../../../../../../controller/model/etat-facture.model';
import {Client} from '../../../../../../controller/model/client.model';

@Component({
    selector: 'app-facture-create',
    templateUrl: './facture-create.component.html',
    styleUrls: ['./facture-create.component.scss']
})
export class FactureCreateComponent implements OnInit {

    constructor(private messageService: MessageService,
                private etatFactureService: EtatFactureService,
                private clientService: ClientService,
                private service: FactureService) {
    }

    get selected(): Facture {
        return this.service.selected;
    }

    set selected(value: Facture) {
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

    get items(): Array<Facture> {
        return this.service.items;
    }

    set items(value: Array<Facture>) {
        this.service.items = value;
    }

    get itemsEtat(): Array<EtatFacture> {
        return this.etatFactureService.items;
    }

    set itemsEtat(value: Array<EtatFacture>) {
        this.etatFactureService.items = value;
    }


    get itemsClient(): Array<Client> {
        return this.clientService.items;
    }

    set itemsClient(value: Array<Client>) {
        this.clientService.items = value;
    }

    ngOnInit(): void {
        this.etatFactureService.findAll().subscribe(data => this.itemsEtat = data);
    }

    public hideCreateDialog() {
        this.createDialog = false;
        this.submitted = false;
    }

    public save() {
        this.submitted = true;
        if (this.selected.code.trim()) {
            this.service.save().subscribe(data => {
                this.selected.client = this.clientService.selected;
                this.items.push({...data});
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Facture Created',
                    life: 3000
                });
            });
            this.createDialog = false;
            this.selected = new Facture();
        }
    }

}
