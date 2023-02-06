import { ICart } from '../components/types/cart.interface'
import { products } from './product.data'

export const cart: ICart[] = [
	{
		id: 1,
		product: products[0],
		quantity: 1
	},
	{
		id: 2,
		product: products[1],
		quantity: 1
	}
]
