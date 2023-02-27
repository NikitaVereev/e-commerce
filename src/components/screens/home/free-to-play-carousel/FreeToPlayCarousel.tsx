import styles from './FreeToPlayCarousel.module.scss'
import { FC, useState } from 'react'
import cn from 'classnames'

import FreeToPlayCarouselItem from './free-to-play-carousel-item/FreeToPlayCarouselItem'

import { IoMdArrowRoundForward, IoMdArrowRoundBack } from 'react-icons/io'
import { IProductList } from '@/src/components/types/product.types'
import Button from '@/src/components/ui/button/Button'

const FreeToPlayCarousel: FC<IProductList> = ({ products }) => {
	const [slide, setSlide] = useState(0)

	let isWidth = 260

	const prev = () => {
		if (slide === 0) {
			setSlide(0)
		} else {
			setSlide(slide + isWidth)
		}
	}
	const next = () => {
		if (slide > -((products.length - 3) * isWidth)) {
			setSlide(slide - isWidth)
		} else if (slide < -((products.length - 4) * isWidth)) {
			setSlide(slide - slide)
		}
		console.log(slide, products.length - 4)
	}

	return (
		<div className={cn('container', styles.wrapper)}>
			<div className={styles.heading}>
				<h2>Бесплатно</h2>
				<div className={styles.buttons}>
					<Button onClick={prev}>
						<IoMdArrowRoundBack />
					</Button>
					<Button onClick={next}>
						<IoMdArrowRoundForward />
					</Button>
				</div>
			</div>
			<div style={{ transform: `translateX(${slide}px)` }}>
				{products
					.filter(product => product.price === 'Бесплатно')
					.map(product => (
						<FreeToPlayCarouselItem product={product} key={product.id} />
					))}
			</div>
		</div>
	)
}

export default FreeToPlayCarousel
