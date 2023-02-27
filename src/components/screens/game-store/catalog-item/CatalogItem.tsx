import { IProduct } from '@/src/components/types/product.types'
import Button from '@/src/components/ui/button/Button'
import { useActions } from '@/src/hooks/useActions'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './CatalogItem.module.scss'

const CatalogItem: FC<{ product: IProduct }> = ({ product }) => {
	const { addDoCart, removeFromCart } = useActions()

	return (
		<div className={styles.cart}>
			<div key={product.id} className={styles.cartWrapper}>
				<div className={styles.image}>
					<Image
						src={product.poster}
						alt={product.title}
						width={1000}
						height={1000}
					/>
					<Link
						href={`product/${product.slug}`}
						style={{ position: 'absolute', inset: 0 }}
					/>
				</div>
				<h3>{product.title}</h3>
				<p>{product.platforms}</p>
				<div className={styles.price}>
					<p>
						{product.price}
						{product.price === 'Бесплатно' ? '' : 'p.'}
					</p>
					<Button onClick={() => addDoCart({ product, quantity: 1 })}>
						Add
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CatalogItem
