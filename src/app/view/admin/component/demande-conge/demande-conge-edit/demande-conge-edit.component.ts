import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {DemandeCongeService} from '../../../../../controller/service/demande-conge.service';
import {DemandeConge} from '../../../../../controller/model/demande-conge.model';
import {EtatDemandeCongeService} from '../../../../../controller/service/etat-demande-conge.service';
import {EtatDemandeConge} from '../../../../../controller/model/etat-demande-conge.model';

@Component({
    selector: 'app-demande-conge-edit',
    templateUrl: './demande-conge-edit.component.html',
    styleUrls: ['./demande-conge-edit.component.scss']
})
export class DemandeCongeEditComponent implements OnInit {


    constructor(private messageService: MessageService,
                private demandeCongeService: DemandeCongeService,
                private etatDemandeCongeService: EtatDemandeCongeService) {
    }

    ngOnInit(): void {
        this.etatDemandeCongeService.findAll().subscribe(data => this.itemset = data);

    }


    public edit() {
        this.submitted = true;
        if (this.selected.code.trim()) {
            if (this.selected.id) {
                this.demandeCongeService.edit().subscribe(data => {
                    this.selected = data;
                    this.items[this.demandeCongeService.findIndexById(this.selected.id)] = this.selected;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Demande mise a jour ',
                        life: 3000
                    });
                });
            }

            this.editDialog = false;
            this.selected = new DemandeConge();
        }
    }

    public hideEditDialog() {
        this.editDialog = false;
    }

    get selected(): DemandeConge {
        return this.demandeCongeService.selected;
    }

    set selected(value: DemandeConge) {
        this.demandeCongeService.selected = value;
    }

    get editDialog(): boolean {
        return this.demandeCongeService.editDialog;
    }

    set editDialog(value: boolean) {
        this.demandeCongeService.editDialog = value;
    }

    get submitted(): boolean {
        return this.demandeCongeService.submitted;
    }

    set submitted(value: boolean) {
        this.demandeCongeService.submitted = value;
    }

    get items(): Array<DemandeConge> {
        return this.demandeCongeService.items;
    }

    set items(value: Array<DemandeConge>) {
        this.demandeCongeService.items = value;
    }

    get itemset(): Array<EtatDemandeConge> {
        return this.etatDemandeCongeService.items;
    }

    set itemset(value: Array<EtatDemandeConge>) {
        this.etatDemandeCongeService.items = value;
    }
}
