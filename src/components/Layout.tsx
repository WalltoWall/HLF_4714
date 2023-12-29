import React from 'react'

import { DevPanel } from './DevPanel'
import { useSiteSettings } from '../hooks/useSiteSettings'

export type LayoutProps = {
	children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
	const settings = useSiteSettings()

	return (
		<>
			{/* <Helmet>
				<html lang="en" />
				<title>{settings.siteName}</title>
				<meta name="description" content={settings.siteDescription} />
				<link
					rel="stylesheet"
					href="https://use.typekit.net/erz3xap.css"
				/>
			</Helmet> */}

			<main id="main">{children}</main>

			{process.env.NODE_ENV === 'development' && <DevPanel />}
		</>
	)
}
