import { IProduct } from '../components/types/product.types'

export const products: IProduct[] = [
	{
		id: 1,
		name: 'Marvel`s Spider-Man',
		slug: 'marvels-spider-man',
		type: 'action-game',
		platforms: ['PS4'],
		frontImg:
			'https://image.api.playstation.com/cdn/UP9000/CUSA02299_00/9EixLCyiU8I5t0QWLcv75aZO3OfjVdpd.png?w=440&thumb=false',
		pageImg:
			'https://image.api.playstation.com/cdn/UP9000/CUSA02299_00/mrNNgNatLCcuwPhZa6UGKNHtSDIhoq2N.jpg?w=5000&thumb=false',
		review: {
			title: 'An authentic Spider-Man adventure',
			description: `Sony Interactive Entertainment, Insomniac Games, and Marvel have teamed up to create an authentic Spider-Man adventure. This isn’t the Spider-Man you’ve met or ever seen before. This is an experienced Peter Parker who’s more masterful at fighting big crime in Marvel's New York. At the same time, he’s struggling to balance his chaotic personal life and career while the fate of millions of New Yorkers rest upon his shoulders.`
		},
		price: 39
	},
	{
		id: 2,
		name: 'Little Nightmares ||',
		slug: 'little-nightmares-2',
		type: 'adventure',
		platforms: ['PS4 ', 'PC ', 'PS5'],
		frontImg:
			'https://image.api.playstation.com/vulcan/ap/rnd/202204/0416/e4pNnBSfhs0LIr8MHBfEcS6b.png?w=440&thumb=false',
		pageImg:
			'https://image.api.playstation.com/vulcan/ap/rnd/202204/0416/oNJh0yy7C5AJl26p5AxrpYR6.jpg?w=5000&thumb=false',
		review: {
			title: 'Become a guiding light in the terrifying night ',
			description: `Discover the sinister secrets of The Signal Tower in this horror-themed platform adventure where you control Mono, a young boy trapped in a distorted and broken world.

Joined by Six, the raincoat wearing hero from the original Little Nightmares, only you can help her from fading away into nothingness. As the relationship between Mono and Six grows, the duo must work together using a combination of stealth and an array of items to overcome tricky puzzles and horrifying enemies.

Muster your courage and begin your journey in the face of terrible threats in a mission to stop the source of evil that’s spreading throughout the land.`
		},
		price: 29
	},
	{
		id: 3,
		name: 'Bloodborne™',
		slug: 'bloodborne',
		type: 'action-game',
		platforms: ['PS4'],
		frontImg:
			'https://image.api.playstation.com/vulcan/img/rnd/202011/0713/WSZqsrnejjt85wYmUqeBQvMQ.png?w=440&thumb=false',
		pageImg:
			'https://image.api.playstation.com/vulcan/img/rnd/202010/2614/O2Z66UWrZH8zcejxopwWxhGu.png?w=5000&thumb=false',
		review: {
			title: 'An authentic Spider-Man adventure',
			description: `Sony Interactive Entertainment, Insomniac Games, and Marvel have teamed up to create an authentic Spider-Man adventure. This isn’t the Spider-Man you’ve met or ever seen before. This is an experienced Peter Parker who’s more masterful at fighting big crime in Marvel's New York. At the same time, he’s struggling to balance his chaotic personal life and career while the fate of millions of New Yorkers rest upon his shoulders.`
		},
		price: 19
	}
]
