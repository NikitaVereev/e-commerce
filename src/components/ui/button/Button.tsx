import { FC } from 'react'
import { TChildren } from '../../types/types'
import styles from './Button.module.scss'

const Button: FC<TChildren> = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className={styles.btn}>
			{children}
		</button>
	)
}

export default Button
