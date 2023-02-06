import { ICart } from '@/src/components/types/cart.interface'
import { FC } from 'react'
import Image from 'next/dist/client/image'
import styles from './CartItem.module.scss'
import { RiDeleteBin6Fill } from 'react-icons/ri'

const CartItem: FC<{ item: ICart }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				src={item.product.frontImg}
				alt={item.product.name}
				width={100}
				height={100}
			/>
			<div className={styles.itemInfo}>
				<h4>{item.product.name}</h4>
				<span>
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD'
					}).format(item.product.price)}
				</span>
			</div>
			<RiDeleteBin6Fill />
		</div>
	)
}

export default CartItem
