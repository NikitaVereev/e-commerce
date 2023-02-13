import { IProductDetails } from '@/pages/product/[slug]'
import { FC } from 'react'
import Carousel from '../carousel/Carousel'
import styles from './ProductInfo.module.scss'

const ProductInfo: FC<IProductDetails> = ({ product }) => {
	return (
		<div
			className={styles.wrapper}
			style={{ background: `url(${product.pageImg})`, backgroundSize: 'cover' }}
		>
			<div className={styles.description}>
				<h2 className='title'>{product.review.title}</h2>
				<p className='description'>{product.review.description}</p>
			</div>
			<Carousel product={product} />
		</div>
	)
}

export default ProductInfo
