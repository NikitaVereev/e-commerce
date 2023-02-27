import { FC, useState } from 'react'
import Image from 'next/image'
import styles from './MainCarousel.module.scss'
import { IoMdArrowRoundForward } from 'react-icons/io'
import Button from '@/src/components/ui/button/Button'
import Link from 'next/link'
import cn from 'classnames'
import { IProductList } from '@/src/components/types/product.types'

const MainCarousel: FC<IProductList> = ({ products }) => {
	const [isActive, setIsActive] = useState(0)
	const [isSlide, setIsSlide] = useState(products.length)
	const next = () => {
		if (isActive < isSlide - 1) {
			setIsActive(prevState => prevState + 1)
		} else if (isActive === isSlide - 1) {
			setIsActive(prevState => prevState - (isSlide - 1))
		}
	}

	setTimeout(() => {
		if (isActive === 5) {
			setIsActive(isActive - 5)
		} else {
			setIsActive(isActive + 1)
		}
	}, 5000)

	return (
		<div className={styles.wrapper}>
			{products
				.filter(product => product.id - 1 === isActive)
				.map(product => (
					<div key={product.id} className={styles.slide}>
						<div className={styles.image}>
							<Image
								alt={product.name}
								src={product.pageImg}
								width={1000}
								height={1000}
							/>
						</div>
						<div className={cn('wrapper', styles.textWrapper)}>
							<div className={styles.description}>
								<h3>{product.name}</h3>
								<p>{product.description}</p>
								<h2>{product.price} р.</h2>
								<Button className={styles.btn} onClick={() => {}}>
									<Link href={`product/${product.slug}`}>
										Перейти к игре
										<IoMdArrowRoundForward />
									</Link>
								</Button>
							</div>
							<Button onClick={next} className={styles.nextButton}>
								<IoMdArrowRoundForward />
							</Button>
						</div>
					</div>
				))}

			<div className={styles.line}>
				<span></span>
				{isActive + 1} / 6<span></span>
			</div>
		</div>
	)
}

export default MainCarousel
