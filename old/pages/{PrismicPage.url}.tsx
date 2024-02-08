import * as React from 'react'
import { graphql, type HeadProps, type PageProps } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { Layout } from '../components/Layout'
import { useSiteSettings } from '../hooks/useSiteSettings'
import { SliceRenderer, type SliceContext } from '../components/SliceRenderer'

export const PageTemplate = ({
	data,
}: PageProps<Queries.PageTemplateQuery>) => {
	const context: SliceContext = { allPersons: data.allPrismicPerson }

	return (
		<Layout>
			<SliceRenderer
				slices={data.prismicPage?.data.body}
				context={context}
			/>
		</Layout>
	)
}

export const Head = ({ data }: HeadProps<Queries.PageTemplateQuery>) => {
	const siteSettings = useSiteSettings()
	const page = data?.prismicPage

	const description =
		siteSettings.siteDescription ?? page?.data?.meta_description ?? ''
	const title = page?.data?.meta_title ?? page?.data?.title?.text ?? ''

	return (
		<>
			<title>
				{title} | {siteSettings.siteName}
			</title>
			<meta name="description" content={description} />
		</>
	)
}

export default withPrismicPreview(PageTemplate)

export const query = graphql`
	query PageTemplate($id: String!) {
		prismicPage(id: { eq: $id }) {
			_previewable
			prismicId
			data {
				title {
					text
				}
				meta_title
				meta_description
				body {
					...Slices
				}
			}
		}

		...AllPersons
	}
`
