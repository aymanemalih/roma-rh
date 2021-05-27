import {Facture} from './facture.model';
import {TypePaiement} from './type-paiement.model';
import {EtatPaiement} from './etat-paiement.model';

export class Paiement {
    public id: number;
    public libelle: string;
    public code: string;
    public reference: string;
    public description: string;
    public montant: number;
    public datePaiement: Date;
    public facture: Facture;
    public etatPaiement: EtatPaiement;
    public typePaiement: TypePaiement;
}
