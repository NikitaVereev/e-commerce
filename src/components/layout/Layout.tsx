import { TChildren } from '@/src/components/types/types'
import { FC } from 'react'
import Header from './header/Header'

const Layout: FC<TChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<div>{children}</div>
		</>
	)
}

export default Layout
