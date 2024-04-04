import { Chambre } from "../business/entities/Chambre";
import { IChambreService } from "../business/useCases/IChambreService";
import { IChambreDao } from "./IChambreDao";

export class ChambreServiceImpl implements IChambreService {

	chambreDao: IChambreDao;
	constructor(chambreDao: IChambreDao){
		this.chambreDao = chambreDao;
	}
	recupererChambres(): Chambre[] {
		return this.chambreDao.recupererLesChambres();
	}
	mettreAJourLesPrix(prix: number) {
		this.chambreDao.recupererLesChambres().forEach((chambre) => chambre.changerPrix(prix))
	}
}