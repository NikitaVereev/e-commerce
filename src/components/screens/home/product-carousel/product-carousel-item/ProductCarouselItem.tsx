import { FC } from 'react'
import styles from './ProductCarouselItem.module.scss'
import Image from 'next/image'
import { IProduct } from '@/src/components/types/product.types'

import { FaHeart } from 'react-icons/fa'
import Link from 'next/link'
import Button from '@/src/components/ui/button/Button'

const ProductCarouselItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.image}>
				<Image
					src={product.frontImg}
					alt={product.name}
					width={1000}
					height={1000}
				/>
				<div className={styles.buttons}>
					<Button>
						<FaHeart />
					</Button>
					<Button>
						<Link href={`/product/${product.slug}`}>Перейти к игре</Link>
					</Button>
				</div>
			</div>
			<div className={styles.description}>
				<h4>{product.name}</h4>
				<div className={styles.price}>
					<span>{product.price} р.</span>
					<p>{product.newPrice} р.</p>
					<span className={styles.percent}>
						-
						{Math.floor(
							//@ts-ignore
							(product.newPrice * 100) /
								//@ts-ignore
								product.price
						)}
						%
					</span>
				</div>
			</div>
		</div>
	)
}

export default ProductCarouselItem
