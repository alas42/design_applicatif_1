import { IChambrePresenter } from "../../presenters/IChambrePresenter";

export interface IMettreAJourLesPrix {

	execute(presenter: IChambrePresenter, prix: number): void;
}