export interface IReview {
	rating: number
	review: string
}

export interface IEstimationsItem {
	CPU: string
	OZU: number
	card: string
	storage: number
}

export interface IEstimations {
	min: IEstimationsItem
	max: IEstimationsItem
}

export interface IProduct {
	id: number
	title: string
	slug: string
	genres: string[]
	platforms: string[]
	poster: string
	bigPoster: string
	estimation: IReview
	price: number | string
	newPrice: number
	publisher: string
	description: string
	year: string
	requirements: IEstimations[]
	carousel: string[]
}

export interface IProductList {
	products: IProduct[]
}
