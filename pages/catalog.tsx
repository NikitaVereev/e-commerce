import GameStore from '@/src/components/screens/game-store/GameStore'
import { products } from '@/src/data/product.data'
import { FC } from 'react'

const store: FC = () => {
	return <GameStore products={products} />
}

export default store
