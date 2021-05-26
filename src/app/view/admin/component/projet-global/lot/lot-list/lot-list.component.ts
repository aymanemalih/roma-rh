import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {LotService} from '../../../../../../controller/service/lot.service';
import {GroupeTacheService} from '../../../../../../controller/service/groupe-tache.service';
import {Lot} from '../../../../../../controller/model/lot.model';

@Component({
    selector: 'app-lot-list',
    templateUrl: './lot-list.component.html',
    styleUrls: ['./lot-list.component.scss']
})
export class LotListComponent implements OnInit {
    cols: any[];

    constructor(private messageService: MessageService,
                private confirmationService: ConfirmationService,
                private service: LotService,
                private serviceItems: GroupeTacheService) {
    }

    ngOnInit(): void {
        this.initCol();
    }

    public delete(selected: Lot) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + selected.code + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteByCode().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new Lot();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Lot Deleted',
                        key: 'lot',
                        life: 3000
                    });
                });
            }
        });
    }

    public deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected Lots?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultipleByCode().subscribe(data => {
                    this.service.deleteMultipleIndexById();
                    this.selectes = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Lots Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public openCreate() {
        this.selected = new Lot();
        this.submitted = false;
        this.createDialog = true;
    }

    public edit(lot: Lot) {
        this.selected = {...lot};
        this.editDialog = true;
    }

    public view(lot: Lot) {
        this.selected = {...lot};
        this.viewDialog = true;
    }

    private initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'}
        ];
    }

    get selected(): Lot {
        return this.service.selected;
    }

    set selected(value: Lot) {
        this.service.selected = value;
    }

    get items(): Array<Lot> {
        return this.service.items;
    }

    set items(value: Array<Lot>) {
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

    get selectes(): Array<Lot> {
        return this.service.selectes;
    }

    set selectes(value: Array<Lot>) {
        this.service.selectes = value;
    }

    findItems(selected: Lot) {
        this.serviceItems.findByLotCode(selected.code).subscribe(
            data => {
                this.serviceItems.items = data;
            }
        );
        this.selected = selected;
    }


}
