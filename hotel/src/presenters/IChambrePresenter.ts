import { Chambre } from "../business/entities/Chambre";

export interface IChambrePresenter {
	getChaine(): string;
	seed(chambres: Chambre[]): void;
}