import { IChildren } from '@/src/utils/types'
import { FC } from 'react'
import Header from './header/Header'

const Layout: FC<IChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<div>{children}</div>
		</>
	)
}

export default Layout
