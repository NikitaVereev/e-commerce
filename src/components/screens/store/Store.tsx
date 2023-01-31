import { FC, useState } from 'react'
import CardItem from './card/CardItem'
import Filter from './filter/Filter'

import styles from './Store.module.scss'

const Store: FC = () => {
	return (
		<div className={styles.store}>
			<Filter />

			<div className={styles.circle}></div>
			<div className={styles.circle}></div>
		</div>
	)
}

export default Store
