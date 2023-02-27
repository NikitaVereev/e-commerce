import { IProductDetails } from '@/pages/product/[slug]'
import { FC } from 'react'
import styles from './ProductProperty.module.scss'

const ProductProperty: FC<IProductDetails> = ({ product }) => {
	return (
		<div
			className={styles.wrapper}
			style={{
				background: `url(${product.bigPoster})`,
				backgroundSize: 'cover',
				backdropFilter: 'blur(20px)'
			}}
		>
			<div className={styles.options}>
				<div className='description'>
					<div>Genre:</div>
					<div>
						<p>{product.genres}</p>
					</div>
				</div>
				<div className='description'>
					<div>Platform:</div>
					<div>
						<p>{product.platforms}</p>
					</div>
				</div>
				<div className='description'>
					<div>Publisher:</div>
					<div>
						<p>{product.publisher}</p>
					</div>
				</div>
				<div className='description'>
					<div>Price:</div>
					<div>
						<p>{product.price}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductProperty
