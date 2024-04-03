export interface IChambreService {
	recupererChambres(): Chambre[];
}

export class ChambreServiceImpl implements IChambreService {
	recupererChambres(): Chambre[] {
		return [
			new Chambre(0, 1, 50),
			new Chambre(0, 2, 50),
			new Chambre(1, 101, 53.5),
			new Chambre(1, 102, 53.5),
			new Chambre(1, 103, 53.5),
			new Chambre(2, 201, 61),
			new Chambre(2, 201, 61),
			new Chambre(3, 301, 66.5)
		];
	}
}

export class Hotel {

	public service: IChambreService;

	constructor(service: IChambreService) {
		this.service = service;
	}

	recupererChambres(): Chambre[] {
		return this.service.recupererChambres();
	}
}

export class Chambre {
	private _etage: number;
	private _numero: number;
	private _prix: number;
	constructor(
		etage: number,
		numero: number,
		prix: number
	) {
		this._etage = etage;
		this._numero = numero;
		this._prix = prix;
	}
}