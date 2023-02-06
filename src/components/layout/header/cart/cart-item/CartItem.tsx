import { ICart } from '@/src/components/types/cart.interface'
import { FC } from 'react'
import Image from 'next/dist/client/image'
import styles from './CartItem.module.scss'

const CartItem: FC<{ item: ICart }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				src={item.product.frontImg}
				alt={item.product.name}
				width={100}
				height={100}
			/>
			<h4>{item.product.name}</h4>
			<span>{item.product.price}</span>
		</div>
	)
}

export default CartItem
