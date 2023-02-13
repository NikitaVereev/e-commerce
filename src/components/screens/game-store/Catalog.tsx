import { filterList } from '@/src/data/categories.data'
import { FC, useState, useEffect } from 'react'
import { IProduct } from '../../types/product.types'
import CatalogFilter from './catalog-filter/CatalogFilter'
import CatalogItem from './catalog-item/CatalogItem'
import styles from './GameStore.module.scss'

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	const [categories, setCategories] = useState(filterList.categories)

	const [isProduct, setIsProduct] = useState(products)
	const [resultsFound, setResultsFound] = useState(true)

	const handleChangeChecked = (id: number) => {
		const categoriesStateList = categories
		const changeCheckedCategories = categoriesStateList.map(item =>
			item.id === id ? { ...item, checked: !item.checked } : item
		)
		setCategories(changeCheckedCategories)
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const applyFilters = () => {
		let updatedList = products

		const categoriesChecked = categories
			.filter(item => item.checked)
			.map(item => item.type.toLowerCase())

		if (categoriesChecked.length) {
			updatedList = updatedList.filter(item =>
				categoriesChecked.includes(item.type)
			)
		}

		updatedList = updatedList.filter(item => item.price)

		setIsProduct(updatedList)

		!updatedList.length ? setResultsFound(false) : setResultsFound(true)
	}

	useEffect(() => {
		applyFilters()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categories])

	return (
		<div className={styles.wrapper}>
			<div className={styles.filter}>
				<h2 className={styles.title}>Categories</h2>
				<CatalogFilter
					categories={categories}
					changeChecked={handleChangeChecked}
					platforms={filterList.platforms}
				/>
			</div>
			<div className={styles.content}>
				<h1 className={styles.title}>Games</h1>
				<div className={styles.catalog}>
					{resultsFound
						? isProduct.map(product => (
								<CatalogItem key={product.id} product={product} />
						  ))
						: 'GG'}
				</div>
			</div>
		</div>
	)
}

export default Catalog
