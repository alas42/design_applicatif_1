import { Hotel } from "../business/entities/Hotel";
import { IHotelRepository } from "../business/repositories/IHotelRepository";

export class HotelRepository implements IHotelRepository{
	private _hotel: Hotel = new Hotel();

	constructor(hotel: Hotel) {
		this._hotel = hotel;
	}
	public recupererHotel(): Hotel {
		return this._hotel;
	}

	public mettreAJourHotel(hotelMisAJour: Hotel): void {
		this._hotel = hotelMisAJour;
	}
}