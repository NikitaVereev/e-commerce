import { ICategories } from '@/src/components/types/categories.interface'
import { FC } from 'react'

const Categories: FC<{ category: ICategories }> = ({ category }) => {
	return (
		<li>
			<label>
				<input type='checkbox' />
				{category.name}
			</label>
		</li>
	)
}

export default Categories
