import {EtatGroupeTache} from './etat-groupe-tache.model';
import {Equipe} from './equipe.model';
import {Lot} from './lot.model';
import {CategorieGroupeTache} from './categorie-groupe-tache.model';

export class GroupeTache {
  public id: number;
  public libelle: string;
  public code: string;
  public description: string;
  public avancement: number;
  public poids: number;
  public nombreJoureHommeRetard: number;
  public nombreJoureHommePrevu: number;
  public nombreJoureHommeEffectif: number;
  public equipe: Equipe;
  public lot: Lot;
  public categorieGroupeTache: CategorieGroupeTache;
  public etatGroupeTache: EtatGroupeTache;
  public dateDemarragePrevu: Date;
  public dateDemarrageEffective: Date;
  public dateFinPrevu: Date;
  public dateFinEffective: Date;
}
