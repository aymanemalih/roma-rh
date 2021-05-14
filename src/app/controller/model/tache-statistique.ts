import {Lot} from './lot.model';

export class TacheStatistique {
  public responsableId: number = null;
  public membreEquipeId: number = null;
  public lotId: number = null;
  public equipeId: number = null;
  public clientId: string = null;
  public sroId: number = null;
  public groupeTacheId: number = null;
  public nroId: number = null;

  public projetId: number = null;
  public semaine: number = null;
  public mois: number = null;
  public annee: number = null;

  public periodeId: number = null;

  public lot: Lot = null;
  public totalPeriode: number = null;
  public totalHeure: number = null;

  public dateDemarrageEffectiveMin: Date = null;
  public dateDemarrageEffectiveMax: Date = null;

  public dateDemarrageEffective: Date = null;
  public dateFinEffective: Date = null;

  public code: string = null;
}
