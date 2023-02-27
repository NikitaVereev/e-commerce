import Button from '@/src/components/ui/button/Button'
import Search from '@/src/components/ui/search/Search'
import { FC } from 'react'
import styles from './Thanks.module.scss'

const Thanks: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<h2>Спасибо, что выбираете нас!</h2>
				<p>
					А если вы еще не с нами - регистрируйтесь и получите индивидуальную
					скидку и игру в подарок!
				</p>
			</div>
			<div className={styles.searching}>
				<Search />
				<Button className={styles.btn}>Зарегистрироваться</Button>
			</div>
		</div>
	)
}

export default Thanks
