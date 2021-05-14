import {Equipe} from './equipe.model';
import {Collaborateur} from './collaborateur.model';

export class MembreEquipe {
  public id: number;
  public collaborateur: Collaborateur;
  public equipe: Equipe;
  constructor() {
    this.equipe = new Equipe();
    this.collaborateur = new Collaborateur();
  }
}
