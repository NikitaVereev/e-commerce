import { IProduct } from '@/src/components/types/product.types'

export interface ICart {
	id: number
	product: IProduct
	quantity: number
}
