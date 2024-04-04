import { Chambre } from "../entities/Chambre";

export interface IChambreService {
	recupererChambres(): Chambre[];
	mettreAJourLesPrix(prix: number): void;
}