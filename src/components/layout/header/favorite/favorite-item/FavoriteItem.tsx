import { ICart } from '@/src/components/types/cart.interface'
import { FC } from 'react'
import Image from 'next/dist/client/image'
import styles from './FavoriteItem.module.scss'
import { MdOutlineFavorite } from 'react-icons/md'

const FavoriteItem: FC<{ item: ICart }> = ({ item }) => {
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
				<span>{item.product.price}</span>
			</div>
			<MdOutlineFavorite />
		</div>
	)
}

export default FavoriteItem
