import {Collaborateur} from './collaborateur.model';
import {EtatEquipe} from './etat-equipe.model';

export class EquipeVO {
  libelle: string;
  responsable: Collaborateur;
  responsableId: number;
  etatId: number;
  etatEquipe: EtatEquipe;
}
