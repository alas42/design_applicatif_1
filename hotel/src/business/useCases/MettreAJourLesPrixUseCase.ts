import { IChambreDao } from "../../gateways/IChambreDao";
import { IStringPresenter } from "../../presenters/IStringPresenter";
import { Chambre } from "../entities/Chambre";
import { IMettreAJourLesPrix } from "./IMettreAJourLesPrix";

export class MettreAJourLesPrixUseCase implements IMettreAJourLesPrix{

	chambreDao: IChambreDao;

	constructor(chambreDao: IChambreDao) {
		this.chambreDao = chambreDao;
	}

	execute(presenter: IStringPresenter, prix: number): void {
		let chambres: Chambre[] = this.chambreDao.recupererLesChambres();
		chambres.forEach((chambre) => chambre.changerPrix(prix));
		this.chambreDao.mettreAJourLesChambres(chambres);
		presenter.seed(this.chambreDao.recupererLesChambres());
	}

}