
export class Chambre {
	private _etage: number;
	private _numero: number;
	private _prix: number;
	private readonly PRIX_MAX: number = 200;

	constructor(
		etage: number,
		numero: number,
		prix: number
	) {
		this._etage = etage;
		this._numero = numero;
		this._prix = prix;
	}

	public changerPrix(prixRdc: number){
		if(this._etage === 1){
			this._prix = prixRdc * 1.07
		}
		else if(this._etage === 2){
			this._prix = prixRdc * 1.22
		}
		else if(this._etage === 3){
			this._prix = prixRdc * 1.33
		}
		else { this._prix = prixRdc }
		if(prixRdc > this.PRIX_MAX){
			this._prix = this.PRIX_MAX;
		}
	}
	get prix() {return this._prix}
	get etage() {return this._etage}
	get numero() { return this._numero}
}