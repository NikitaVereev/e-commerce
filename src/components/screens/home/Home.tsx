import { FC } from 'react'
import MainCarousel from './main-carousel/MainCarousel'
import Preview from './preview/Preview'
import { products } from '@/src/data/product.data'

import ProductCarousel from './product-carousel/ProductCarousel'
import FreeToPlayCarousel from './free-to-play-carousel/FreeToPlayCarousel'
import PopularGames from './popular-games/PopularGames'
import Thanks from './thanks/Thanks'
import News from './news/News'

const Home: FC = () => {
	return (
		<>
			<MainCarousel products={products} />
			<Preview products={products} />
			<ProductCarousel products={products} />
			<PopularGames products={products} />
			<Thanks />
			<FreeToPlayCarousel products={products} />
			<News />
		</>
	)
}

export default Home
