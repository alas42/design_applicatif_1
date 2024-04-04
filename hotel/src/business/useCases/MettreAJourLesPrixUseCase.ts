import { IChambrePresenter } from "../../presenters/IChambrePresenter";
import { Hotel } from "../entities/Hotel";
import { IHotelRepository } from "../repositories/IHotelRepository";
import { IMettreAJourLesPrix } from "./IMettreAJourLesPrix";

export class MettreAJourLesPrixUseCase implements IMettreAJourLesPrix{

	hotelRepository: IHotelRepository;

	constructor(hotelRepository: IHotelRepository) {
		this.hotelRepository = hotelRepository;
	}

	execute(prix: number): void {
		const hotel: Hotel = this.hotelRepository.recupererHotel();
		hotel.mettreAJourLesPrix(prix);
		this.hotelRepository.mettreAJourHotel(hotel);
	}
}