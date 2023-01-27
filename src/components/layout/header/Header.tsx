import Link from 'next/link'
import { FC, useState } from 'react'
import styles from './Header.module.scss'
import { FiShoppingCart } from 'react-icons/fi'
import { RiHeart3Line } from 'react-icons/ri'
import { CgClose } from 'react-icons/cg'

const Header: FC = () => {
	const [openBasket, setOpenBasket] = useState(false)
	const [openFavorites, setOpenFavorites] = useState(false)
	const basketClick = (e: never) => {
		setOpenBasket(current => !current)
	}
	const favoriteClick = (e: never) => {
		setOpenFavorites(current => !current)
	}

	const nav = [
		{
			name: 'Home',
			link: '/'
		},
		{
			name: 'Streams',
			link: '/streams'
		},
		{
			name: 'Game Store',
			link: '/store'
		},
		{
			name: 'News',
			link: '/news'
		}
	]

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul>
					{nav.map((item, idx) => (
						<li key={idx}>
							<Link href={item.link}>{item.name}</Link>
						</li>
					))}
				</ul>
			</nav>
			<nav className={styles.nav_user}>
				<ul>
					<li className={openBasket ? styles.active : ''} onClick={basketClick}>
						<button>
							<FiShoppingCart />
						</button>
						<div>
							<div className={styles.nav_user_basket}>
								<div className={styles.basket_title}>
									<h2>Basket</h2>
									<button onClick={() => setOpenBasket(true)}>
										<CgClose />
									</button>
								</div>
							</div>
						</div>
					</li>
					<li
						className={openFavorites ? styles.active : ''}
						onClick={favoriteClick}
					>
						<button>
							<RiHeart3Line />
						</button>
						<div>
							<div className={styles.nav_user_basket}>
								<div className={styles.basket_title}>
									<h2>Favorites</h2>
									<button onClick={() => setOpenFavorites(true)}>
										<CgClose />
									</button>
								</div>
							</div>
						</div>
					</li>
					<li></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
