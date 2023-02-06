import { products } from '@/src/data/product.data'
import { FC } from 'react'
import Button from '../../ui/button/Button'
import CardItem from './card/CardItem'
import styles from './Store.module.scss'

const StoreContent: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.filter}>
				<h2>Categories</h2>

				<Button>Apply Filters</Button>
			</div>
			<div className={styles.content}>
				<CardItem
					//@ts-ignore
					products={products}
				/>
			</div>
		</div>
	)
}

export default StoreContent
