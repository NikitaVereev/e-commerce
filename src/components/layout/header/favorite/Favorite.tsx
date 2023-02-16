import Button from '@/src/components/ui/button/Button'
import { favorite } from '@/src/data/favorite.data'
import { FC, useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import styles from '../Header.module.scss'
import FavoriteItem from './favorite-item/FavoriteItem'

const Favorite: FC = () => {
	const [openBasket, setOpenBasket] = useState(false)

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		setOpenBasket(current => !current)
	}
	return (
		<li className={openBasket ? styles.active : ''} onClick={handleClick}>
			<Button>
				<FaHeart />
				<span></span>
			</Button>
			<div>
				<div className={styles.wrapper}>
					<div className={styles.popupTitle}>
						<h2>Favorite</h2>
						<button onClick={() => setOpenBasket(true)}>
							<FaWindowClose />
						</button>
					</div>
					<div className={styles.itemWrapper}>
						{favorite.map(item => (
							<FavoriteItem key={item.id} item={item} />
						))}
					</div>
				</div>
			</div>
		</li>
	)
}

export default Favorite
