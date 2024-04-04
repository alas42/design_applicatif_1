import { Chambre } from '../../../src/business/entities/Chambre'
import { IHotelRepository } from '../../../src/business/repositories/IHotelRepository'
import { HotelRepository } from '../../../src/gateways/HotelRepository'
import { IMettreAJourLesPrix } from '../../../src/business/useCases/IMettreAJourLesPrix'
import { MettreAJourLesPrixUseCase } from '../../../src/business/useCases/MettreAJourLesPrixUseCase'
import { Hotel } from '../../../src/business/entities/Hotel'

describe("use case: mettre a jour les prix d'une chambre", () => {
  test('Mettre a jour les prix des chambres changent leurs prix', () => {
    const hotel: Hotel = new Hotel()
    const hotelRepository: IHotelRepository = new HotelRepository(hotel)
    const listDeChambres: Chambre[] = [
      new Chambre(0, 1, 50),
      new Chambre(0, 2, 50),
      new Chambre(1, 101, 53.5),
      new Chambre(1, 102, 53.5),
      new Chambre(1, 103, 53.5),
      new Chambre(2, 201, 61),
      new Chambre(2, 201, 61),
      new Chambre(3, 301, 66.5),
    ]
    jest.spyOn(hotel, 'recupererChambres').mockReturnValueOnce(listDeChambres)
    const mettreAJourLesPrix: IMettreAJourLesPrix = new MettreAJourLesPrixUseCase(
      hotelRepository
    )
    //when

    mettreAJourLesPrix.execute(100)
    expect(hotelRepository.recupererHotel().recupererChambres())
      .toMatchInlineSnapshot(`
Array [
  Chambre {
    "PRIX_MAX": 200,
    "_etage": EtageChambre {
      "value": 0,
    },
    "_numero": NumeroChambre {
      "value": 1,
    },
    "_prix": PrixChambre {
      "value": 50,
    },
  },
  Chambre {
    "PRIX_MAX": 200,
    "_etage": EtageChambre {
      "value": 0,
    },
    "_numero": NumeroChambre {
      "value": 2,
    },
    "_prix": PrixChambre {
      "value": 50,
    },
  },
  Chambre {
    "PRIX_MAX": 200,
    "_etage": EtageChambre {
      "value": 1,
    },
    "_numero": NumeroChambre {
      "value": 101,
    },
    "_prix": PrixChambre {
      "value": 53.5,
    },
  },
  Chambre {
    "PRIX_MAX": 200,
    "_etage": EtageChambre {
      "value": 1,
    },
    "_numero": NumeroChambre {
      "value": 102,
    },
    "_prix": PrixChambre {
      "value": 53.5,
    },
  },
  Chambre {
    "PRIX_MAX": 200,
    "_etage": EtageChambre {
      "value": 1,
    },
    "_numero": NumeroChambre {
      "value": 103,
    },
    "_prix": PrixChambre {
      "value": 53.5,
    },
  },
  Chambre {
    "PRIX_MAX": 200,
    "_etage": EtageChambre {
      "value": 2,
    },
    "_numero": NumeroChambre {
      "value": 201,
    },
    "_prix": PrixChambre {
      "value": 61,
    },
  },
  Chambre {
    "PRIX_MAX": 200,
    "_etage": EtageChambre {
      "value": 2,
    },
    "_numero": NumeroChambre {
      "value": 201,
    },
    "_prix": PrixChambre {
      "value": 61,
    },
  },
  Chambre {
    "PRIX_MAX": 200,
    "_etage": EtageChambre {
      "value": 3,
    },
    "_numero": NumeroChambre {
      "value": 301,
    },
    "_prix": PrixChambre {
      "value": 66.5,
    },
  },
]
`)
  })
})
