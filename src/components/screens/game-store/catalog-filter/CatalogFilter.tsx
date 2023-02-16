import Button from '@/src/components/ui/button/Button'
import { FC } from 'react'
import styles from './CatalogFilter.module.scss'
import { IFilter } from '../../../types/categories.interface'
import Categories from './categories/Categories'

interface IFilterList extends IFilter {
	changeChecked: (x: number) => void
}

const CatalogFilter: FC<IFilterList> = ({
	changeChecked,
	categories,
	platforms
}) => {
	return (
		<ul>
			<h2>Фильтры</h2>
			{categories.map(category => (
				<Categories
					key={category.id}
					category={category}
					changeChecked={changeChecked}
				/>
			))}
		</ul>
	)
}

export default CatalogFilter
