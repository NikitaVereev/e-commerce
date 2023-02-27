import { IProduct, IProductList } from '@/src/components/types/product.types'
import { FC } from 'react'
import styles from './ProviewItem.module.scss'
import Image from 'next/image'
import Button from '@/src/components/ui/button/Button'
import { IoMdArrowRoundForward } from 'react-icons/io'
import Link from 'next/link'

const PreviewItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.image}>
				<Image src={product.pageImg} alt={product.name} layout='fill' />
			</div>
			<h4>{product.name}</h4>
			<p>{product.description?.slice(0, 100)}...</p>
			<Button>
				<Link href={`product/${product.slug}`}>
					Узнать больше <IoMdArrowRoundForward />
				</Link>
			</Button>
		</div>
	)
}

export default PreviewItem
