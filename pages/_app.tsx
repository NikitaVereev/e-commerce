import { Provider } from 'react-redux'

import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import type { AppProps } from 'next/app'

const cache = createCache({
	key: 'css',
	prepend: true
})

import '@/styles/globals.scss'
import Layout from '@/src/components/layout/Layout'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<CacheProvider value={cache}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</CacheProvider>
	)
}
export default App
