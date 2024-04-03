import {Hotel, Chambre, ChambreServiceImpl} from '../src/hotel'

describe("chambre de l'hotel", () => {
	test("Quand je recupère les chambres, elles me sont données", () => {
		//given
		const chambresAttendues: Chambre[] = [
			new Chambre(0, 1, 50),
			new Chambre(0, 2, 50),
			new Chambre(1, 101, 53.5),
			new Chambre(1, 102, 53.5),
			new Chambre(1, 103, 53.5),
			new Chambre(2, 201, 61),
			new Chambre(2, 201, 61),
			new Chambre(3, 301, 66.5)
		];
		const chambreServiceImpl: ChambreServiceImpl = new ChambreServiceImpl();
		const hotel: Hotel = new Hotel(chambreServiceImpl);
		//when

		//then
		expect(hotel.recupererChambres()).toEqual(chambresAttendues);
	});
});
  