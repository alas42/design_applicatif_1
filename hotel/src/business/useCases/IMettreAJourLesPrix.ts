import { IStringPresenter } from "../../presenters/IStringPresenter";

export interface IMettreAJourLesPrix {

	execute(presenter: IStringPresenter, prix: number): void;
}