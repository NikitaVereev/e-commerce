import Store from '@/src/components/screens/store/Store'
import { products } from '@/src/data/product.data'
import { FC } from 'react'

const store: FC = () => {
	return <Store products={products} />
}

export default store
