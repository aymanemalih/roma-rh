import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {ProjetService} from '../../../../../../controller/service/projet.service';
import {Projet} from '../../../../../../controller/model/projet.model';
import {ProjetEquipeService} from '../../../../../../controller/service/projet-equipe.service';

@Component({
    selector: 'app-projet-view',
    templateUrl: './projet-view.component.html',
    styleUrls: ['./projet-view.component.scss']
})
export class ProjetViewComponent implements OnInit {

    constructor(private messageService: MessageService,
                private serviceItems: ProjetEquipeService,
                private service: ProjetService) {
    }

    ngOnInit(): void {
    }

    public hideViewDialog() {
        this.serviceItems.items = null;
        this.viewDialog = false;
    }

    get selected(): Projet {
        return this.service.selected;
    }

    set selected(value: Projet) {
        this.service.selected = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    findItems(selected: Projet) {
        this.serviceItems.findByProjetCode(selected.code).subscribe(
            data => {
                this.serviceItems.items = data;
            }
        );
    }


}

