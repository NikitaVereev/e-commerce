import { FC } from 'react'
import { IProduct } from '../../types/product.types'

import styles from './Store.module.scss'
import StoreContent from './StoreContent'

const Store: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<div className={styles.store}>
			<StoreContent products={products} />
			<div className={styles.circle}></div>
			<div className={styles.circle}></div>
		</div>
	)
}

export default Store
