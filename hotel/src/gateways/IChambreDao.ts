import { Chambre } from "../business/entities/Chambre";

export interface IChambreDao {
	recupererLesChambres(): Chambre[];
	mettreAJourLesChambres(chambres: Chambre[]): void;
}