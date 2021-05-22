import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {ProjetService} from "../../../../../../controller/service/projet.service";
import {EquipeService} from "../../../../../../controller/service/equipe.service";
import {ProjetEquipeService} from "../../../../../../controller/service/projet-equipe.service";
import {Equipe} from "../../../../../../controller/model/equipe.model";
import {ProjetEquipe} from "../../../../../../controller/model/projet-equipe.model";
import {Projet} from "../../../../../../controller/model/projet.model";
import {Lot} from "../../../../../../controller/model/lot.model";

@Component({
    selector: 'app-projet-equipe-edit-list',
    templateUrl: './projet-equipe-edit-list.component.html',
    styleUrls: ['./projet-equipe-edit-list.component.scss']
})
export class ProjetEquipeEditListComponent implements OnInit {

    cols: any[];

    constructor(private messageService: MessageService,
                private projetService: ProjetService,
                private confirmationService: ConfirmationService,
                private equipeService: EquipeService,
                private service: ProjetEquipeService) {
    }

    ngOnInit(): void {
        this.initCol();
        this.equipeService.findAll().subscribe(data => this.itemsEquipes = data);
        this.service.findByProjetCode(this.projetService.selected.code).subscribe(data => this.items = data);
    }

    private initCol() {
        this.cols = [
            {field: 'Libelle', header: 'Libelle'}
        ];
    }

    set itemsEquipes(value: Array<Equipe>) {
        this.equipeService.items = value;
    }

    get itemsEquipes(): Array<Equipe> {
        return this.equipeService.items;
    }

    get selected(): ProjetEquipe {
        return this.service.selected;
    }

    set selected(value: ProjetEquipe) {
        this.service.selected = value;
    }

    get selectedProjet(): Projet {
        return this.projetService.selected;
    }

    set selectedProjet(value: Projet) {
        this.projetService.selected = value;
    }

    get items(): Array<ProjetEquipe> {
        return this.projetService.selected.projetEquipes;
    }

    set items(value: Array<ProjetEquipe>) {
        this.projetService.selected.projetEquipes = value;
    }

    get selectes(): Array<ProjetEquipe> {
        return this.service.selectes;
    }

    set selectes(value: Array<ProjetEquipe>) {
        this.service.selectes = value;
    }

// tslint:disable-next-line:typedef
    public save() {
        this.selected.projet = this.projetService.selected;
        this.service.save().subscribe(data => {
            this.items.push({...data});
            this.messageService.add({
                severity: 'success',
                summary: 'Successful',
                detail: 'ProjetEquipe sera ajouter',
                life: 3000
            });
        });
        this.selected = new ProjetEquipe();
    }


    // tslint:disable-next-line:typedef
    public delete(selected: ProjetEquipe) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + selected.equipe.libelle + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteById().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new ProjetEquipe();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Equipe Deleted',
                        life: 3000
                    });
                });
            }
        });
    }


}
