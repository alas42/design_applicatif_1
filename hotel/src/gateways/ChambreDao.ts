import { Chambre } from "../business/entities/Chambre";
import { IChambreDao } from "./IChambreDao";

export class ChambreDao implements IChambreDao{
	private _chambres: Chambre[] = [
		new Chambre(0, 1, 50),
		new Chambre(0, 2, 50),
		new Chambre(1, 101, 53.5),
		new Chambre(1, 102, 53.5),
		new Chambre(1, 103, 53.5),
		new Chambre(2, 201, 61),
		new Chambre(2, 201, 61),
		new Chambre(3, 301, 66.5)
	];
	recupererLesChambres(): Chambre[] {
		return this._chambres;
	}
	
	mettreAJourLesChambres(chambres: Chambre[]): void {
		this._chambres = chambres;
	}
}