import { Chambre } from "../business/entities/Chambre";
import { IChambrePresenter } from "./IChambrePresenter";

export class ChambrePresenter implements IChambrePresenter {
	private _chambres: Chambre[] = [];

	seed(chambres: Chambre[]): void {
		this._chambres = chambres;
	}

	getChaine(): string {
		let chaine: string = "";
		this._chambres.forEach((chambre) => {
			chaine += "Chambre numero : " + chambre.numero + " - etage : " +
				chambre.etage + " prix : " + chambre.prix + " |\n";
		});
		return chaine;
	}
}