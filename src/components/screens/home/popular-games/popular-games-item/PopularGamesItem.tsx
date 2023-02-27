import { IProduct } from '@/src/components/types/product.types'
import { FC } from 'react'
import styles from './PopularGamesItem.module.scss'
import Image from 'next/image'
import Button from '@/src/components/ui/button/Button'

const PopularGamesItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.image}>
				<Image src={product.pageImg} alt={product.name} layout='fill' />
			</div>
			<div className={styles.description}>
				<div>
					<h4>{product.name}</h4>
					<p>{product.description?.slice(0, 80)}...</p>
				</div>
				<div className={styles.bottom}>
					<h3>{product.price} р.</h3>
					<Button>Перейти к игре</Button>
				</div>
			</div>
		</div>
	)
}

export default PopularGamesItem
