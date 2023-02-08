import Button from '@/src/components/ui/button/Button'
import { FC } from 'react'
import styles from './CatalogFilter.module.scss'
import { IFilter } from '../../../types/categories.interface'
import Categories from './categories/Categories'
import Platforms from './platforms/Platforms'

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
			{categories.map(category => (
				<Categories
					key={category.id}
					category={category}
					changeChecked={changeChecked}
				/>
			))}
			{platforms.map(platform => (
				<Platforms key={platform.id} platform={platform} />
			))}

			<Button>Apply Filters</Button>
		</ul>
	)
}

export default CatalogFilter
