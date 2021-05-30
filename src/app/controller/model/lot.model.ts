import {Projet} from './projet.model';
import {Collaborateur} from './collaborateur.model';
import {EtatLot} from './etat-lot.model';

export class Lot {
  public id: number;
  public libelle: string;
  public code: string;
  public sro: string;
  public description: string;
  public projet: Projet;
  public etatLot: EtatLot;
  public avancement: number;
  public nombreJoureHommeRetard: number;
  public nombreJoureHommePrevu: number;
  public nombreJoureHommeEffectif: number;
  public responsable: Collaborateur;
  public dateDemarragePrevu: Date;
  public dateFinPrevu: Date;
  public dateDemarrageEffective: Date;
  public dateFinEffective: Date;
  constructor() {
    this.libelle = '';
    this.code = '';
    this.description = '';
  }
}

