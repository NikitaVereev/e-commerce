import { FC, useState } from 'react'
import styles from './Search.module.scss'
import cn from 'classnames'
import { FiSearch } from 'react-icons/fi'
import { TChildren } from '../../types/types'

const Search: FC<TChildren> = ({ placeholder, className }) => {
	const [isSearch, setIsSearch] = useState('')
	console.log(isSearch)
	return (
		<div className={cn(styles.search, className)}>
			<input
				type='text'
				value={isSearch}
				onChange={e => setIsSearch(e.target.value)}
				placeholder={placeholder}
			/>
			<button onClick={() => {}}>
				<FiSearch />
			</button>
		</div>
	)
}

export default Search
