import Link from 'next/link'
import { FC, useState } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import Cart from './cart/Cart'
import Favorite from './favorite/Favorite'
import cn from 'classnames'
import Logo from '../../../assets/images/logo.svg'
import Search from '../../ui/search/Search'
import { FaUserAlt } from 'react-icons/fa'
import Button from '../../ui/button/Button'

const Header: FC = () => {
	const [openFavorites, setOpenFavorites] = useState(false)

	const favoriteClick = (e: never) => {
		setOpenFavorites(current => !current)
	}

	const nav = [
		{
			name: 'Home',
			link: '/',
			icon: Logo
		},
		{
			name: 'Каталог',
			link: '/catalog'
		},
		{
			name: 'Акции',
			link: '/stocks'
		},
		{
			name: 'Предзаказ',
			link: '/pre-order'
		},
		{
			name: 'Новости',
			link: '/news'
		}
	]

	return (
		<header className={styles.header}>
			<nav className={cn(styles.nav, 'wrapper')}>
				<ul>
					{nav.map((item, idx) => (
						<li key={idx}>
							<Link href={item.link}>
								{item.icon !== undefined ? (
									<Image
										src={item.icon}
										alt={item.name}
										className={styles.logo}
									/>
								) : (
									item.name
								)}
							</Link>
						</li>
					))}
					<Search />

					<Favorite />
					<li>
						<Button>
							<FaUserAlt />
						</Button>
					</li>
					<Cart />
				</ul>
			</nav>
		</header>
	)
}

export default Header
