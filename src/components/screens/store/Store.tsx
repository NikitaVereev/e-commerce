import { FC } from 'react'

import styles from './Store.module.scss'
import StoreContent from './StoreContent'

const Store: FC = () => {
	return (
		<div className={styles.store}>
			<StoreContent />
			<div className={styles.circle}></div>
			<div className={styles.circle}></div>
		</div>
	)
}

export default Store
