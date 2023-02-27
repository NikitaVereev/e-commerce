import { IProductDetails } from '@/pages/product/[slug]'
import { FC, useState } from 'react'
import Image from 'next/image'
import styles from './Carousel.module.scss'
import Button from '@/src/components/ui/button/Button'
import cn from 'classnames'
import { BiLeftArrow } from 'react-icons/bi'
import { BiRightArrow } from 'react-icons/bi'

const Carousel: FC<IProductDetails> = ({ product }) => {
	const [isActive, setIsActive] = useState(0)
	const [length, setLength] = useState(product.carousel.length)

	const next = () => {
		if (isActive < length - 1) {
			setIsActive(prevState => prevState + 1)
		} else if (isActive === length - 1) {
			setIsActive(prevState => prevState - (length - 1))
		}
	}
	const prev = () => {
		if (isActive > 0) {
			setIsActive(prevState => prevState - 1)
		} else if (isActive === 0) {
			setIsActive(prevState => prevState + (length - 1))
		}
	}
	return (
		<div className={styles.carouselWrapper}>
			<div className={styles.mainImg}>
				<Image
					src={product.carousel[isActive]}
					alt={product.title}
					width={1000}
					height={1000}
					className={cn(product.carousel ? styles.active : '')}
				/>
				<Button onClick={prev}>
					<BiLeftArrow />
				</Button>
				<Button onClick={next}>
					<BiRightArrow />
				</Button>
			</div>
			<div className={styles.side}>
				{product.carousel.map((item, idx: number) => (
					<div
						key={idx}
						className={cn(styles.sideImg, item[isActive] ? styles.active : '')}
						onClick={() => setIsActive(idx)}
					>
						<Image src={item} alt={item} width={1000} height={1000} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Carousel
