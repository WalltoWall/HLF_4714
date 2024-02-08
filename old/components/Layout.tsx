import React from "react"

import { Header } from "./Header"
import { Footer } from "./Footer"

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
		</>
	)
}
