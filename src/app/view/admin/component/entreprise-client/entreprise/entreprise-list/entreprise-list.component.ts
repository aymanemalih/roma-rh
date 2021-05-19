import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {EntrepriseService} from '../../../../../../controller/service/entreprise.service';
import {Entreprise} from '../../../../../../controller/model/entreprise.model';
import {ClientService} from "../../../../../../controller/service/client.service";
import {EntrepriseVo} from '../../../../../../controller/model/entreprise-vo.model';

@Component({
    selector: 'app-entreprise-list',
    templateUrl: './entreprise-list.component.html',
    styleUrls: ['./entreprise-list.component.scss']
})
export class EntrepriseListComponent implements OnInit {

    cols: any[];

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: EntrepriseService, private serviceItems: ClientService) {
    }

    ngOnInit(): void {
        this.initCol();
        this.service.findAll().subscribe(data => this.items = data);
    }

    public delete(selected: Entreprise) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + selected.code + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteByCode().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new Entreprise();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Entreprise Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected Entreprises?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultipleByCode().subscribe(data => {
                    this.service.deleteMultipleIndexById();
                    this.selectes = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Entreprises Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public openCreate() {
        this.selected = new Entreprise();
        this.submitted = false;
        this.createDialog = true;
    }
   public findByCriteria(){
        this.service.findByCriteria().subscribe(
            data=>{
                this.items = data;
            }
        )
   }
    public edit(entreprise: Entreprise) {
        this.selected = {...entreprise};
        this.editDialog = true;
    }

    public view(entreprise: Entreprise) {
        this.selected = {...entreprise};
        this.viewDialog = true;
    }

    private initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'}
        ];
    }

    get selected(): Entreprise {
        return this.service.selected;
    }

    set selected(value: Entreprise) {
        this.service.selected = value;
    }

    get items(): Array<Entreprise> {
        return this.service.items;
    }

    set items(value: Array<Entreprise>) {
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

    get selectes(): Array<Entreprise> {
        return this.service.selectes;
    }

    set selectes(value: Array<Entreprise>) {
        this.service.selectes = value;
    }

    findItems(selected: Entreprise) {
        this.serviceItems.findByEntrepriseCode(selected.code).subscribe(
            data => {
                this.serviceItems.items = data;
            }
        );
    }
    get entrepriseVo(): EntrepriseVo{
        return this.service.entrepriseVo;
    }

    set entrepriseVo(value: EntrepriseVo){
        this.service.entrepriseVo;
    }
}
