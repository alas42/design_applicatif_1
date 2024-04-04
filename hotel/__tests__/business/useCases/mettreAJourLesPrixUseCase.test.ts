import { Chambre } from '../../../src/business/entities/Chambre'
import { ChambreDao } from '../../../src/gateways/ChambreDao';
import { IChambreDao } from '../../../src/gateways/IChambreDao';
import { IMettreAJourLesPrix } from '../../../src/business/useCases/IMettreAJourLesPrix'
import { MettreAJourLesPrixUseCase } from '../../../src/business/useCases/MettreAJourLesPrixUseCase'
import { IChambrePresenter } from '../../../src/presenters/IChambrePresenter'
import { ChambrePresenter } from '../../../src/presenters/ChambrePresenter'

describe("use case: mettre a jour les prix d'une chambre", () => {
  test('Mettre a jour les prix des chambres changent leurs prix', () => {
    const chambreDao: IChambreDao = new ChambreDao()
    const presenter: IChambrePresenter = new ChambrePresenter()
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
    jest
      .spyOn(chambreDao, 'recupererLesChambres')
      .mockReturnValueOnce(listDeChambres)
    const mettreAJourLesPrix: IMettreAJourLesPrix = new MettreAJourLesPrixUseCase(
      chambreDao
    )
    //when

    mettreAJourLesPrix.execute(presenter, 100)
    expect(chambreDao.recupererLesChambres()).toMatchInlineSnapshot(`
Array [
  Chambre {
    "PRIX_MAX": 200,
    "_etage": 0,
    "_numero": 1,
    "_prix": 100,
  },
  Chambre {
    "PRIX_MAX": 200,
    "_etage": 0,
    "_numero": 2,
    "_prix": 100,
  },
  Chambre {
    "PRIX_MAX": 200,
    "_etage": 1,
    "_numero": 101,
    "_prix": 107,
  },
  Chambre {
    "PRIX_MAX": 200,
    "_etage": 1,
    "_numero": 102,
    "_prix": 107,
  },
  Chambre {
    "PRIX_MAX": 200,
    "_etage": 1,
    "_numero": 103,
    "_prix": 107,
  },
  Chambre {
    "PRIX_MAX": 200,
    "_etage": 2,
    "_numero": 201,
    "_prix": 122,
  },
  Chambre {
    "PRIX_MAX": 200,
    "_etage": 2,
    "_numero": 201,
    "_prix": 122,
  },
  Chambre {
    "PRIX_MAX": 200,
    "_etage": 3,
    "_numero": 301,
    "_prix": 133,
  },
]
`)
  })
  test('Le presenteur présente les chambres sous formes de chaines de caractères', () => {
    const chambreDao: IChambreDao = new ChambreDao()
    const presenter: IChambrePresenter = new ChambrePresenter()
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
    jest
      .spyOn(chambreDao, 'recupererLesChambres')
      .mockReturnValueOnce(listDeChambres)
    const mettreAJourLesPrix: IMettreAJourLesPrix = new MettreAJourLesPrixUseCase(
      chambreDao
    )
    //when

    mettreAJourLesPrix.execute(presenter, 100)
    expect(presenter.getChaine()).toMatchInlineSnapshot(`
"Chambre numero : 1 - etage : 0 prix : 100 |
Chambre numero : 2 - etage : 0 prix : 100 |
Chambre numero : 101 - etage : 1 prix : 107 |
Chambre numero : 102 - etage : 1 prix : 107 |
Chambre numero : 103 - etage : 1 prix : 107 |
Chambre numero : 201 - etage : 2 prix : 122 |
Chambre numero : 201 - etage : 2 prix : 122 |
Chambre numero : 301 - etage : 3 prix : 133 |
"
`)
  })
})
