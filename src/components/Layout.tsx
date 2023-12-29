import React from 'react'

import { DevPanel } from './DevPanel'
import { PageContainer } from './PageContainer'
import { Header } from './Header'
import { Footer } from './Footer'

export type LayoutProps = {
	children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<PageContainer>
				<Header />
				<main id="main">{children}</main>
				<Footer />
			</PageContainer>

			{process.env.NODE_ENV === 'development' && <DevPanel />}
		</>
	)
}
