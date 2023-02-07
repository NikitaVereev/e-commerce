import Link from 'next/link'
import { FC, useState } from 'react'
import styles from './Header.module.scss'

import { RiHeart3Line } from 'react-icons/ri'
import { CgClose } from 'react-icons/cg'
import Cart from './cart/Cart'
import Favorite from './favorite/Favorite'

const Header: FC = () => {
	const [openFavorites, setOpenFavorites] = useState(false)

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
			link: '/game-store'
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
					<Cart />
					<Favorite />
					<li></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
