import { IProductList } from '@/src/components/types/product.types'
import { FC } from 'react'
import PopularGamesItem from './popular-games-item/PopularGamesItem'
import styles from './PopularGames.module.scss'
import cn from 'classnames'

const PopularGames: FC<IProductList> = ({ products }) => {
	return (
		<div className={cn('container', styles.wrapper)}>
			{products
				.map(product => <PopularGamesItem key={product.id} product={product} />)
				.slice(0, 1)}
			<div>
				{products
					.map(product => (
						<PopularGamesItem key={product.id} product={product} />
					))
					.slice(1, 5)}
			</div>
		</div>
	)
}

export default PopularGames
