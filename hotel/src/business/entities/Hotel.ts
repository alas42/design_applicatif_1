import { Chambre } from "./Chambre";
import { IChambreService } from "../useCases/IChambreService";

export class Hotel {
	public service: IChambreService;

	constructor(service: IChambreService) {
		this.service = service;
	}

	recupererChambres(): Chambre[] {
		return this.service.recupererChambres();
	}

	public mettreAJourLesPrix(prixRdc: number) {
		this.service.mettreAJourLesPrix(prixRdc);
	}
}
