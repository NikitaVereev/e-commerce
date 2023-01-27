import { FC } from 'react'
import styles from './Store.module.scss'

const Store: FC = () => {
	return (
		<div>
			Store
			<div className={styles.circle}></div>
			<div className={styles.circle}></div>
		</div>
	)
}

export default Store
