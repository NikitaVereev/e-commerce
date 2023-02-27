import { IProductDetails } from '@/pages/product/[slug]'
import { useActions } from '@/src/hooks/useActions'
import Image from 'next/image'
import { FC } from 'react'
import Button from '../../ui/button/Button'
import { RiHeart3Line } from 'react-icons/ri'
import styles from './Product.module.scss'

import ProductInfo from './product-info/ProductInfo'
import ProductProperty from './product-property/ProductProperty'

const Product: FC<IProductDetails> = ({ product }) => {
	const { addDoCart, removeFromCart } = useActions()
	return (
		<>
			<div className={styles.heading}>
				<Image src={product.bigPoster} alt={product.title} layout='fill' />

				<div className={styles.card}>
					<h1>{product.title}</h1>
					<p className={styles.publisher}>{product.publisher}</p>
					<p className={styles.platforms}>{product.platforms}</p>
					<p>{product.price}</p>
					<div className={styles.buttons}>
						<Button onClick={() => addDoCart({ product, quantity: 1 })}>
							Add to Cart
						</Button>
						<Button>
							<RiHeart3Line />
						</Button>
					</div>
				</div>
			</div>
			<ProductInfo product={product} />
			<ProductProperty product={product} />
		</>
	)
}

export default Product
