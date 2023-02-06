import Button from '@/src/components/ui/button/Button'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import styles from './CartItem.module.scss'

const CardItem: FC = ({ products }: any) => {
	return (
		<div>
			<h1 className={styles.title}>Games</h1>
			<div className={styles.cart}>
				{products.map((item: any) => (
					<div key={item.id} className={styles.cartWrapper}>
						<div className={styles.image}>
							<Image
								src={item.frontImg}
								alt={item.name}
								width={1000}
								height={1000}
							/>
							<Link
								href={`product/${item.slug}`}
								style={{ position: 'absolute', inset: 0 }}
							/>
						</div>
						<h3>{item.name}</h3>
						<p>{item.platforms}</p>
						<div className={styles.price}>
							<p>
								{new Intl.NumberFormat('en-US', {
									style: 'currency',
									currency: 'USD'
								}).format(item.price)}
							</p>
							<Button onClick={() => {}}>Add</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default CardItem
