import {Collaborateur} from './collaborateur.model';
import {Etatprojet} from './etatprojet.model';
import {Client} from './client.model';
import {ProjetEquipe} from './projet-equipe.model';

export class Projet {
  public id: number;
  public libelle: string;
  public code: string;
  public description: string;
  public nro: string;
  public avancement: number;
  public nombreJoureHommeRetard: number;
  public nombreJoureHommeEffectif: number;
  public etatProjet: Etatprojet;
  public responsable: Collaborateur;

  public dateDemarragePrevu: Date;
  public dateFinPrevu: Date;

  public dateDemarrageEffective: Date;
  public dateFinEffective: Date;

  public client: Client;
  public projetEquipes = new Array<ProjetEquipe>();

  constructor() {
    this.libelle = '';
    this.code = '';
    this.nro = '';
  }
}

