import { Chambre } from "./Chambre";

export class Hotel {
	private _chambres: Chambre[] = [];
	
	constructor() {
	}

	recupererChambres(): Chambre[] {
		return this._chambres;
	}

	public mettreAJourLesPrix(prixRdc: number) {
		this._chambres.forEach((chambre) => chambre.changerPrix(prixRdc));
	}
}
