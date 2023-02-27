import { IProductList } from '@/src/components/types/product.types'
import { FC } from 'react'
import PreviewItem from './preview-item/PreviewItem'
import styles from './Preview.module.scss'
import cn from 'classnames'

const Preview: FC<IProductList> = ({ products }) => {
	return (
		<div className={cn('container', styles.wrapper)}>
			{products
				.map(product => <PreviewItem product={product} key={product.id} />)
				.slice(0, 3)}
		</div>
	)
}

export default Preview
