import { cart } from '@/src/data/cart.data'
import { FC, useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import styles from '../Header.module.scss'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	const [openBasket, setOpenBasket] = useState(false)

	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		setOpenBasket(current => !current)
	}
	return (
		<li className={openBasket ? styles.active : ''} onClick={handleClick}>
			<button>
				<FiShoppingCart />
				<span>0</span>
			</button>
			<div>
				<div className={styles.wrapper}>
					<div className={styles.popupTitle}>
						<h2>Basket</h2>
						<button onClick={() => setOpenBasket(true)}>
							<FaWindowClose />
						</button>
					</div>
					<div className={styles.basket_content}>
						{cart.map(item => (
							<CartItem key={item.id} item={item} />
						))}
					</div>
				</div>
			</div>
		</li>
	)
}

export default Cart
