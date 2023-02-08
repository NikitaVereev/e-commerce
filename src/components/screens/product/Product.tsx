import { IProductDetails } from '@/pages/product/[slug]'
import { useActions } from '@/src/hooks/useActions'
import Image from 'next/image'
import { FC } from 'react'
import Button from '../../ui/button/Button'
import { RiHeart3Line } from 'react-icons/ri'
import styles from './Product.module.scss'

const Product: FC<IProductDetails> = ({ product }) => {
	const { addDoCart, removeFromCart } = useActions()
	return (
		<>
			<div className={styles.heading}>
				<Image
					src={product.pageImg}
					alt={product.name}
					width={1000}
					height={100}
				/>

				<div className={styles.card}>
					<h1>{product.name}</h1>
					<p className={styles.publisher}>{product.publisher}</p>
					<p className={styles.platforms}>{product.platforms}</p>
					<p>
						{new Intl.NumberFormat('en-US', {
							style: 'currency',
							currency: 'USD'
						}).format(product.price)}
					</p>
					<div className={styles.buttons}>
						<Button onClick={() => addDoCart({ product, quantity: 1 })}>
							Add to Cart
						</Button>
						<RiHeart3Line />
					</div>
				</div>
			</div>
			<div className={styles.description}>{product.description}</div>
			<div className={styles.info}>
				<p>{product.platforms}</p>
				<p>{product.publisher}</p>
				<p>{product.type}</p>
				<p>{product.voice}</p>
				<p>{product.screenLanguages}</p>
			</div>
		</>
	)
}

export default Product
