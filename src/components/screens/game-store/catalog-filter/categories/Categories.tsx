import { ICategories } from '@/src/components/types/categories.interface'

import { Checkbox, FormControlLabel } from '@mui/material'
import { FC } from 'react'

interface ICheckCategory {
	category: ICategories
	changeChecked: (x: number) => void
}

const Categories: FC<ICheckCategory> = ({ changeChecked, category }) => {
	const { checked, name, id } = category
	return (
		<li>
			<FormControlLabel
				label={category.name}
				control={
					<Checkbox checked={checked} onChange={() => changeChecked(id)} />
				}
			/>
		</li>
	)
}

export default Categories
