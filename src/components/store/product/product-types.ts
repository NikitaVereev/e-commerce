import { IProduct } from '../../types/product.types'

export interface IItem {
	product: string
	quantity: number
}

export interface IInitialState {
	items: IProduct[]
}

export interface IAddToCartPayload extends Omit<IProduct, 'id'> {}
