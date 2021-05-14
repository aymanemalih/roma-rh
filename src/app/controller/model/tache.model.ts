import {EtatTache} from './etat-tache.model';
import {MembreEquipe} from './membre-equipe';
import {Periode} from './periode.model';
import {CategorieTache} from './categorie-tache.model';
import {GroupeTache} from './groupe-tache.model';


export class Tache {
  public libelle: string;
  public code: string;
  public description: string;
  public etatTache: EtatTache;
  public membreEquipe: MembreEquipe;
  public semaine: number;
  public mois: number;
  public annee: number;
  public dateDemarrageEffective: Date;
  public dateFinEffective: Date;
  public periode: Periode;
  public categorieTache: CategorieTache;
  public groupeTache: GroupeTache;
}
