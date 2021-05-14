import {Entreprise} from './entreprise.model';

export class Client {
  public id: number;
  public libelle: string;
  public code: string;
  public description: string;
  public entreprise: Entreprise;
}
