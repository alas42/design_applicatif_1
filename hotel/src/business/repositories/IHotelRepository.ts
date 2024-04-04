import { Hotel } from "../entities/Hotel";

export interface IHotelRepository {
	recupererHotel(): Hotel;
	mettreAJourHotel(hotelMisAJour: Hotel): void;
}