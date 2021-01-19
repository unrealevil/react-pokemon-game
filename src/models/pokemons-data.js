import pikachuImg from '../assets/pokemons/pikachu.png';
import charmanderImg from '../assets/pokemons/charmander.png';
import bulbasaurImg from '../assets/pokemons/bulbasaur.png';
import squirtleImg from '../assets/pokemons/squirtle.png';
import pidgeyImg from '../assets/pokemons/pidgey.png';
import mewImg from '../assets/pokemons/mew.png';

export const pokemonsData = [
    {
        name: 'Pikachu',
        type: 'electric',
        hp: 274,
        img: pikachuImg,
        attacks: [
            {
                name: "Тыкнуть  пальцем",
                maxDamage: 40,
                minDamage: 20,
                maxCount: null,
            },
            {
                name: "Дать леща",
                maxDamage: 60,
                minDamage: 45,
                maxCount: 6,
            },
            {
                name: "Прописать пендаль",
                maxDamage: 75,
                minDamage: 60,
                maxCount: 4,
            },
            {
                name: "Ушатать с вертушки",
                maxDamage: 160,
                minDamage: 130,
                maxCount: 2,
            }
        ],
        drugs: [
            {
                name: 'Приложить подорожник',
                maxHp: 50,
                minHp: 25,
                maxCount: 5,
            },
            {
                name: 'Помазать зеленкой',
                maxHp: 150,
                minHp: 50,
                maxCount: 5,
            },
        ]
    },
    {
        img: charmanderImg,
        name: 'Charmander',
        type: 'fire',
        hp: 282,
        attacks: [
            {
                name: "Дать щелбан",
                maxDamage: 40,
                minDamage: 20,
                maxCount: null,
            },
            {
                name: "Подставить подножку",
                maxDamage: 60,
                minDamage: 45,
                maxCount: 6,
            },
            {
                name: "Швырнуть спичку",
                maxDamage: 75,
                minDamage: 60,
                maxCount: 4,
            },
            {
                name: "Пульнуть из рогатки",
                maxDamage: 130,
                minDamage: 110,
                maxCount: 2,
            }
        ],
        drugs: [
            {
                name: 'Утереть сопли',
                maxHp: 40,
                minHp: 20,
                maxCount: 5,
            },
            {
                name: 'Прилечь на скамейку',
                maxHp: 160,
                minHp: 40,
                maxCount: 5,
            },
        ]
    },
    {
        img: bulbasaurImg,
        name: 'Bulbasaur',
        type: 'fire',
        hp: 294,
        attacks: [
            {
                name: "Плюнуть в харю",
                maxDamage: 40,
                minDamage: 20,
                maxCount: null,
            },
            {
                name: "Хлопнуть по ушам",
                maxDamage: 60,
                minDamage: 45,
                maxCount: 6,
            },
            {
                name: "Фигануть с локтя",
                maxDamage: 75,
                minDamage: 60,
                maxCount: 4,
            },
            {
                name: "Пробить в челюсть",
                maxDamage: 130,
                minDamage: 110,
                maxCount: 2,
            }
        ],
        drugs: [
            {
                name: 'Стряхнуть пыль',
                maxHp: 40,
                minHp: 20,
                maxCount: 5,
            },
            {
                name: 'Наклеить пластырь',
                maxHp: 160,
                minHp: 40,
                maxCount: 5,
            },
        ]
    },
    {
        img: squirtleImg,
        name: 'Squirtle',
        type: 'water',
        hp: 292,
        attacks: [
            {
                name: "Пнуть ногой",
                maxDamage: 40,
                minDamage: 20,
                maxCount: null,
            },
            {
                name: "Тыкнуть в глаз",
                maxDamage: 60,
                minDamage: 45,
                maxCount: 6,
            },
            {
                name: "Дать под дых",
                maxDamage: 75,
                minDamage: 60,
                maxCount: 4,
            },
            {
                name: "Завалить в грязь",
                maxDamage: 130,
                minDamage: 110,
                maxCount: 2,
            }
        ],
        drugs: [
            {
                name: 'Присесть на  корточки',
                maxHp: 40,
                minHp: 20,
                maxCount: 5,
            },
            {
                name: 'Охладить ушиб',
                maxHp: 160,
                minHp: 40,
                maxCount: 5,
            },
        ]
    },
    {
        img: pidgeyImg,
        name: 'Pidgey',
        type: 'air',
        hp: 284,
        attacks: [
            {
                name: "Ударить ладошкой",
                maxDamage: 40,
                minDamage: 20,
                maxCount: null,
            },
            {
                name: "Дать в глаз",
                maxDamage: 60,
                minDamage: 45,
                maxCount: 6,
            },
            {
                name: "Завалить подсечкой",
                maxDamage: 75,
                minDamage: 60,
                maxCount: 4,
            },
            {
                name: "Прыгнуть на череп",
                maxDamage: 130,
                minDamage: 110,
                maxCount: 2,
            }
        ],
        drugs: [
            {
                name: 'Глотнуть пивка',
                maxHp: 40,
                minHp: 20,
                maxCount: 5,
            },
            {
                name: 'Устроить перекур',
                maxHp: 160,
                minHp: 40,
                maxCount: 5,
            },
        ]
    },
    {
        img: mewImg,
        name: 'Mew',
        type: 'air',
        hp: 404,
        attacks: [
            {
                name: "Влепить оплеуху",
                maxDamage: 40,
                minDamage: 20,
                maxCount: null,
            },
            {
                name: "Заломать руку",
                maxDamage: 60,
                minDamage: 45,
                maxCount: 6,
            },
            {
                name: "Пробить печень",
                maxDamage: 75,
                minDamage: 60,
                maxCount: 4,
            },
            {
                name: "Ушатать с ноги",
                maxDamage: 130,
                minDamage: 110,
                maxCount: 2,
            }
        ],
        drugs: [
            {
                name: 'Поковырять в носу',
                maxHp: 40,
                minHp: 20,
                maxCount: 5,
            },
            {
                name: 'Сожрать шашлык',
                maxHp: 160,
                minHp: 40,
                maxCount: 5,
            },
        ]
    }
];
