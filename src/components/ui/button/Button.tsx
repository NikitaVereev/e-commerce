import { FC } from 'react'
import { TChildren } from '../../types/types'
import styles from './Button.module.scss'
import cn from 'classnames'

const Button: FC<TChildren> = ({ children, onClick, className }) => {
	return (
		<button onClick={onClick} className={cn(styles.btn, className)}>
			{children}
		</button>
	)
}

export default Button
