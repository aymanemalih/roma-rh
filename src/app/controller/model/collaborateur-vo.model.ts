import {Collaborateur} from './collaborateur.model';

export class CollaborateurVo {

  public collaborateur: Collaborateur;
  public sommeJourTravail: number;
  public sommeJourConge: number;
  public sommeJourNonWeekEnd: number;
  public sommeJourDecalage: number;

  public dateDemarrageEffectiveMin: Date = null;
  public dateDemarrageEffectiveMax: Date = null;
}
