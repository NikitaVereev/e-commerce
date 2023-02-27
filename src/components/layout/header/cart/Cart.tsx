import Button from '@/src/components/ui/button/Button'
import { useTypedSelector } from '@/src/hooks/useTypedSelector'
import { FC, useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import styles from '../Header.module.scss'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	const state = useTypedSelector(state => state.cart.items)
	const [openBasket, setOpenBasket] = useState(false)
	const totalPrice = state.reduce(
		//@ts-ignore
		(acc, item) => acc + item.product.price * item.quantity,
		0
	)

	return (
		<li className={openBasket ? styles.active : ''}>
			<Button onClick={() => setOpenBasket(!openBasket)}>
				<FaShoppingCart />
				<span>{state.length === 0 ? '' : state.length}</span>
			</Button>

			<div>
				<div className={styles.wrapper}>
					<div className={styles.popupTitle}>
						<h2>Basket</h2>
						<button>
							<FaWindowClose onClick={() => setOpenBasket(!openBasket)} />
						</button>
					</div>
					<div className={styles.itemWrapper}>
						{state.map(item => (
							<CartItem key={item.id} item={item} />
						))}
					</div>
					<div className={styles.totalPrice}>
						<h3>
							Total: <span>{totalPrice}</span>
						</h3>
						<Button onClick={() => {}}>To Pay</Button>
					</div>
				</div>
			</div>
		</li>
	)
}

export default Cart
