import { FC } from 'react'
import { IProduct } from '../../types/product.types'

import styles from './GameStore.module.scss'
import Catalog from './Catalog'

const Store: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<div className={styles.store}>
			<Catalog products={products} />
		</div>
	)
}

export default Store
