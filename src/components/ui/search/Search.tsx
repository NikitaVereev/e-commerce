import { FC, useState } from 'react'
import styles from './Search.module.scss'

import { FiSearch } from 'react-icons/fi'

const Search: FC = () => {
	const [isSearch, setIsSearch] = useState('')
	console.log(isSearch)
	return (
		<div className={styles.search}>
			<input
				type='text'
				value={isSearch}
				onChange={e => setIsSearch(e.target.value)}
				placeholder='Поиск'
			/>
			<button onClick={() => {}}>
				<FiSearch />
			</button>
		</div>
	)
}

export default Search
