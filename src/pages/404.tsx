import * as React from 'react'
import { type PageProps, graphql } from 'gatsby'
import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews'
import { Layout } from '../components/Layout'
import { SliceRenderer, type SliceContext } from '../components/SliceRenderer'

type Props = PageProps<Queries.NotFoundPageQuery>

export const NotFoundPage = ({ data }: Props) => {
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

export { Head } from './{PrismicPage.url}'

export default withPrismicUnpublishedPreview(NotFoundPage)

export const query = graphql`
	query NotFoundPage {
		prismicPage(uid: { eq: "404" }) {
			_previewable
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
