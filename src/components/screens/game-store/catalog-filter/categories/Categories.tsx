import { ICategories } from '@/src/components/types/categories.interface'
import styles from '../CatalogFilter.module.scss'
import { Checkbox, FormControlLabel } from '@mui/material'
import { FC } from 'react'
import { pink } from '@mui/material/colors'

interface ICheckCategory {
	category: ICategories
	changeChecked: (x: number) => void
}

const Categories: FC<ICheckCategory> = ({ changeChecked, category }) => {
	const { checked, id } = category
	return (
		<li className={styles.itemWrapper}>
			<FormControlLabel
				label={category.name}
				control={
					<Checkbox
						className={styles.checkbox}
						checked={checked}
						onChange={() => changeChecked(id)}
					/>
				}
			/>
		</li>
	)
}

export default Categories
