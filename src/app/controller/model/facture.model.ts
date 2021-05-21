import {Client} from './client.model';
import {Tache} from './tache.model';
import {EtatFacture} from './etat-facture.model';

export class Facture {
    public id: number;
    public libelle: string;
    public code: string;
    public description: string;
    public TotalHeursCalcules: number;
    public TotalHeursFactures: number;
    public montantCalcule: number;
    public montantFacture: number;
    public client: Client;
    public tache: Tache;
    public etatFacture: EtatFacture;
}
