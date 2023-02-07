import { products } from '@/src/data/product.data'
import { FC } from 'react'
import { IProduct } from '../../types/product.types'
import Button from '../../ui/button/Button'
import CardItem from './card/CardItem'
import styles from './Store.module.scss'

const StoreContent: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.filter}>
				<h2>Categories</h2>

				<Button>Apply Filters</Button>
			</div>
			<div className={styles.content}>
				<h1 className={styles.title}>Games</h1>
				{products.map(product => (
					<CardItem key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

export default StoreContent
