import { favorite } from '@/src/data/favorite.data'
import { FC, useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { RiHeart3Line } from 'react-icons/ri'
import styles from '../Header.module.scss'
import FavoriteItem from './favorite-item/FavoriteItem'

const Favorite: FC = () => {
	const [openBasket, setOpenBasket] = useState(false)

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		setOpenBasket(current => !current)
	}
	return (
		<li className={openBasket ? styles.active : ''} onClick={handleClick}>
			<button>
				<RiHeart3Line />
				<span>0</span>
			</button>
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
