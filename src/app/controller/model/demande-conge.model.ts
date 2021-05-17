import {Collaborateur} from './collaborateur.model';
import {EtatDemandeConge} from './etat-demande-conge.model';

export class DemandeConge {
  public id: number;
  public code: string;
  public  dateDepart: Date;
  public  dateFin: Date;
  public  collaborateur: Collaborateur;
  public  etatDemandeConge: EtatDemandeConge;
  public messageCollaborateur: string;
  public commentaireValidateur: string;
}

