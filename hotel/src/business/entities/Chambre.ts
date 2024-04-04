import { EtageChambre } from "./EtageChambre";
import { NumeroChambre } from "./NumeroChambre";
import { PrixChambre } from "./PrixChambre";

export class Chambre {
	private _etage: EtageChambre = new EtageChambre();
	private _numero: NumeroChambre = new NumeroChambre();
	private _prix: PrixChambre = new PrixChambre();
	private readonly PRIX_MAX: number = 200;

	constructor(
		etage: number,
		numero: number,
		prix: number
	) {
		this._etage.value = etage;
		this._numero.value = numero;
		this._prix.value = prix;
	}

	public changerPrix(prixRdc: number){
		if(this._etage.value === 1){
			this._prix.value = prixRdc * 1.07
		}
		else if(this._etage.value === 2){
			this._prix.value = prixRdc * 1.22
		}
		else if(this._etage.value === 3){
			this._prix.value = prixRdc * 1.33
		}
		else { this._prix.value = prixRdc }
		if(prixRdc > this.PRIX_MAX){
			this._prix.value = this.PRIX_MAX;
		}
	}
	get prix() {return this._prix}
	get etage() {return this._etage}
	get numero() { return this._numero}
}