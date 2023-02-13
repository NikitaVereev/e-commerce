import { Provider } from 'react-redux'
import NextNProgress from 'nextjs-progressbar'
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
					<NextNProgress
						color='#e58e27'
						startPosition={0.3}
						stopDelayMs={200}
						height={4}
						showOnShallow={true}
					/>
					<Component {...pageProps} />
				</Layout>
			</CacheProvider>
		</Provider>
	)
}
export default App
