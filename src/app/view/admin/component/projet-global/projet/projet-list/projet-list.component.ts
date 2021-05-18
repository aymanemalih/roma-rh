import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ProjetService} from '../../../../../../controller/service/projet.service';
import {LotService} from '../../../../../../controller/service/lot.service';
import {Projet} from '../../../../../../controller/model/projet.model';

@Component({
    selector: 'app-projet-list',
    templateUrl: './projet-list.component.html',
    styleUrls: ['./projet-list.component.scss']
})
export class ProjetListComponent implements OnInit {
    cols: any[];

    constructor(private messageService: MessageService,
                private confirmationService: ConfirmationService,
                private service: ProjetService,
                private serviceItems: LotService) {
    }

    ngOnInit(): void {
        this.initCol();
        this.service.findAll().subscribe(data => this.items = data);
    }

    public delete(selected: Projet) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + selected.code + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteByCode().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new Projet();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Projet Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected Projets?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultipleByCode().subscribe(data => {
                    this.service.deleteMultipleIndexById();
                    this.selectes = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Projets Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public openCreate() {
        this.selected = new Projet();
        this.submitted = false;
        this.createDialog = true;
    }

    public edit(projet: Projet) {
        this.selected = {...projet};
        this.editDialog = true;
    }

    public view(projet: Projet) {
        this.selected = {...projet};
        this.viewDialog = true;
    }

    private initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'}
        ];
    }

    get selected(): Projet {
        return this.service.selected;
    }

    set selected(value: Projet) {
        this.service.selected = value;
    }

    get items(): Array<Projet> {
        return this.service.items;
    }

    set items(value: Array<Projet>) {
        this.service.items = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get selectes(): Array<Projet> {
        return this.service.selectes;
    }

    set selectes(value: Array<Projet>) {
        this.service.selectes = value;
    }

    findItems(selected: Projet) {
        this.serviceItems.findByProjetCode(selected.code).subscribe(
            data => {
                this.serviceItems.items = data;
            }
        );
    }


}
