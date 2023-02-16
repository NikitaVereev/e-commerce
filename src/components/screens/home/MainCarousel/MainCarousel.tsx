import { products } from '@/src/data/product.data'
import { FC, useState } from 'react'
import Image from 'next/image'
import styles from './MainCarousel.module.scss'
import { IoMdArrowRoundForward } from 'react-icons/io'
import Button from '@/src/components/ui/button/Button'
import Link from 'next/link'

const MainCarousel: FC = () => {
	const [isActive, setIsActive] = useState(0)
	const [isSlide, setIsSlide] = useState(products.length)

	const next = () => {
		if (isActive < isSlide - 1) {
			setIsActive(prevState => prevState + 1)
		} else if (isActive === isSlide - 1) {
			setIsActive(prevState => prevState - (isSlide - 1))
		}
	}
	console.log(isSlide)
	return (
		<div className={styles.wrapper}>
			{products
				.filter((product, idx) => idx === isActive)
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
						<div className='wrapper'>
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
						</div>
					</div>
				))}
			<Button onClick={next}>
				<IoMdArrowRoundForward />
			</Button>

			<div className={styles.line}>
				{isActive + 1}/{products.length}
			</div>
		</div>
	)
}

export default MainCarousel
