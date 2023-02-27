export interface IReview {
	title: string
	description: string
}

export interface IProduct {
	id: number
	name: string
	slug: string
	type: string
	platforms: string[]
	frontImg: string
	pageImg: string
	review: IReview
	price: number | string
	newPrice?: number
	publisher: string
	description?: string
	voice: string[]
	screenLanguages: string[]
	video: string
	images: string[]
	secondImg: string
}

export interface IProductList {
	products: IProduct[]
}
