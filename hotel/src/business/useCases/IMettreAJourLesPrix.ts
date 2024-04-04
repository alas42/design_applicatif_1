import { IChambrePresenter } from "../../presenters/IChambrePresenter";

export interface IMettreAJourLesPrix {

	execute(prix: number): void;
}