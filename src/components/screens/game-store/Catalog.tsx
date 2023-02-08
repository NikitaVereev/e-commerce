import { filterList } from '@/src/data/categories.data'
import { FC } from 'react'
import { IProduct } from '../../types/product.types'
import CatalogFilter from './catalog-filter/CatalogFilter'
import CatalogItem from './catalog-item/CatalogItem'
import styles from './GameStore.module.scss'

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.filter}>
				<h2 className={styles.title}>Categories</h2>
				<CatalogFilter
					platforms={filterList.platforms}
					categories={filterList.categories}
				/>
			</div>
			<div className={styles.content}>
				<h1 className={styles.title}>Games</h1>
				<div className={styles.catalog}>
					{products.map(product => (
						<CatalogItem key={product.id} product={product} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Catalog
