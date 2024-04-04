import { Chambre } from "../business/entities/Chambre";

export interface IStringPresenter {
	present(): string;
	seed(chambres: Chambre[]): void;
}