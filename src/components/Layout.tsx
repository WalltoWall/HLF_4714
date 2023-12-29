import React from 'react'
// import { SkipNavContent } from '@reach/skip-nav'

import { value DevPanel } from './DevPanel'
import { value useSiteSettings } from '../hooks/useSiteSettings'

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

			{/* <SkipNavContent as="main">{children}</SkipNavContent> */}

			{process.env.NODE_ENV === 'development' && <DevPanel />}
		</>
	)
}
