import { Chambre } from "../business/entities/Chambre";
import { IStringPresenter } from "./IStringPresenter";

export class StringPresenter implements IStringPresenter {
	private _value: string = "";

	present(): string {
		return this._value;
	}

	seed(chambres: Chambre[]): void {
		chambres.forEach((chambre) => {
			this._value += "Chambre numero : " + chambre.numero + " - etage : " +
				chambre.etage + " prix : " + chambre.prix + " |\n";
		});
	}
}