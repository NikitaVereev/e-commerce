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
import { store } from '@/src/components/store/store'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<CacheProvider value={cache}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CacheProvider>
		</Provider>
	)
}
export default App
