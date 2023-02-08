import { ICart } from '../../types/cart.interface'

export interface IItem {
	product: string
	quantity: number
}

export interface IInitialState {
	items: ICart[]
}

export interface IAddToCartPayload extends Omit<ICart, 'id'> {}
