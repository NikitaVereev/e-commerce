import Product from '@/src/components/screens/product/Product'
import { FC } from 'react'
import { games } from '@/src/data/product.data'

const ProductPage: FC = ({ games }: any) => {
	return (
		<Product
			//@ts-ignore
			games={games}
		/>
	)
}

export default ProductPage
