import {Equipe} from './equipe.model';

export class EtatEquipe {
  public id: number;
  public libelle: string;
  public code: string;
  constructor() {
    this.libelle = '';
    this.code = '';
  }
}
