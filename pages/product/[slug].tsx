import Product from '@/src/components/screens/product/Product'
import { IProduct } from '@/src/components/types/product.types'
import { products } from '@/src/data/product.data'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

export interface IProductDetails {
	product: IProduct
}

const ProductPage: NextPage<IProductDetails> = ({ product }) => {
	return <Product product={product} />
}
export const getStaticPaths: GetStaticPaths = async () => {
	const paths = products.map(product => {
		return {
			params: { slug: product.slug }
		}
	})
	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<IProductDetails> = async ({
	params
}) => {
	const product =
		products.find(product => product.slug === params?.slug) || ({} as IProduct)
	return {
		props: {
			product
		}
	}
}

export default ProductPage
