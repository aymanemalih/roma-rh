import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {GroupeTacheService} from '../../../../../../controller/service/groupe-tache.service';
import {TacheService} from '../../../../../../controller/service/tache.service';
import {PeriodeService} from '../../../../../../controller/service/periode.service';
import {MembreEquipeService} from '../../../../../../controller/service/membre-equipe.service';
import {CategorieTacheService} from '../../../../../../controller/service/categorie-tache.service';
import {EtatTacheService} from '../../../../../../controller/service/etat-tache.service';
import {Tache} from '../../../../../../controller/model/tache.model';
import {MembreEquipe} from '../../../../../../controller/model/membre-equipe';
import {CategorieTache} from '../../../../../../controller/model/categorie-tache.model';
import {Periode} from '../../../../../../controller/model/periode.model';
import {EtatTache} from '../../../../../../controller/model/etat-tache.model';

@Component({
    selector: 'app-tache-create',
    templateUrl: './tache-create.component.html',
    styleUrls: ['./tache-create.component.scss']
})
export class TacheCreateComponent implements OnInit {
    constructor(private messageService: MessageService,
                private service: TacheService,
                private periodeService: PeriodeService,
                private membreEquipeService: MembreEquipeService,
                private categorieTacheService: CategorieTacheService,
                private etatTacheService: EtatTacheService,
                private groupeTacheService: GroupeTacheService) {
    }

    ngOnInit(): void {
        this.etatTacheService.findAll().subscribe(data => this.itemsEtats = data);
        this.periodeService.findAll().subscribe(data => this.itemsPeriodes = data);
        this.membreEquipeService.findAll().subscribe(data => this.itemsMembres = data);
        this.categorieTacheService.findAll().subscribe(data => this.itemsCategories = data);
        // this.membreEquipeService.findByEquipeCode(this.groupeTacheService.selected.equipe).subscribe(
        //     data => this.itemsMembres = data);
        // this.categorieTacheService.findByCategorieGroupeTacheCode(this.groupeTacheService.selected.categorieGroupeTache).subscribe(
        //     data => this.itemsCategories = data);
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
                    detail: 'Tache Created',
                    life: 3000
                });
            });
            this.createDialog = false;
            this.selected = new Tache();
        }
    }

    public findSelectedMember(id: number): number {
        return this.membreEquipeService.findIndexById(id);
    }

    get selected(): Tache {
        return this.service.selected;
    }

    set selected(value: Tache) {
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

    get items(): Array<Tache> {
        return this.service.items;
    }

    set items(value: Array<Tache>) {
        this.service.items = value;
    }

    get itemsMembres(): Array<MembreEquipe> {
        return this.membreEquipeService.items;
    }

    set itemsMembres(value: Array<MembreEquipe>) {
        this.membreEquipeService.items = value;
    }

    get itemsPeriodes(): Array<Periode> {
        return this.periodeService.items;
    }

    set itemsPeriodes(value: Array<Periode>) {
        this.periodeService.items = value;
    }

    get itemsCategories(): Array<CategorieTache> {
        return this.categorieTacheService.items;
    }

    set itemsCategories(value: Array<CategorieTache>) {
        this.categorieTacheService.items = value;
    }

    get itemsEtats(): Array<EtatTache> {
        return this.etatTacheService.items;
    }

    set itemsEtats(value: Array<EtatTache>) {
        this.etatTacheService.items = value;
    }

}


