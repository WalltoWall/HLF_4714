import * as React from 'react'
import clsx from 'clsx'
import { type PageProps, type HeadProps } from 'gatsby'
import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews'
import { Layout } from '../components/Layout'
import { ButtonLink } from '../components/ButtonLink'
import { sansCaps, serifHeading } from '../typography'
import { useSiteSettings } from '../hooks/useSiteSettings'

export const NotFoundPage = (_props: PageProps) => {
	return (
		<Layout>
			<div className="min-h-[50svh] flex flex-col justify-center items-center space-y-6 md:space-y-9">
				<p
					className={clsx(
						sansCaps,
						'text-gray-17 text-center md:-mb-3',
					)}
				>
					Not Found
				</p>

				<h1
					className={clsx(
						serifHeading,
						'text-gray-25 text-center text-balance max-w-[40ch]',
					)}
				>
					Sorry, we weren't able to find anything for the requested
					page.
				</h1>
				<ButtonLink href="/">Back to Home</ButtonLink>
			</div>
		</Layout>
	)
}

export const Head = (_props: HeadProps) => {
	const siteSettings = useSiteSettings()
	const description = siteSettings.siteDescription ?? ''

	return (
		<>
			<title>Not Found | {siteSettings.siteName}</title>
			<meta name="description" content={description} />
		</>
	)
}

export default withPrismicUnpublishedPreview(NotFoundPage)
