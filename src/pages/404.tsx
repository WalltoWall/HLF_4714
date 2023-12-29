import * as React from 'react'
import { PageProps, graphql } from 'gatsby'
import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews'
import MapSlicesToComponents from '@walltowall/react-map-slices-to-components'

import { NotFoundPageQuery } from '../types.generated'
import { slicesMap } from '../slices/PageBody'
import { mapDataToPropsEnhancer, PageTemplate } from '../templates/page'
import { useSiteSettings } from '../hooks/useSiteSettings'

import { Layout } from '../components/Layout'

export const NotFoundPage = ({
	data,
	location,
}: PageProps<NotFoundPageQuery>) => {
	const siteSettings = useSiteSettings()
	const page = data?.prismicPage

	/**
	 * Metadata made available in a slice's `mapDataToProps` and
	 * `mapDataToContext` functions.
	 *
	 * @see https://github.com/angeloashmore/react-map-to-components#maptocomponents
	 */
	const meta = {
		rootData: data,
		location,
	}

	return (
		<Layout>
			{/* <Helmet>
        <title>
          {page?.data?.meta_title ??
            page?.data?.title?.text ??
            'Page not found'}{' '}
          | {siteSettings.siteName}
        </title>
        {page?.data?.meta_description && (
          <meta name="description" content={page?.data?.meta_description} />
        )}
      </Helmet> */}

			<MapSlicesToComponents
				list={page?.data?.body}
				map={slicesMap}
				meta={meta}
				mapDataToPropsEnhancer={mapDataToPropsEnhancer}
			/>
		</Layout>
	)
}

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
					... on PrismicSliceType {
						id
					}
					...SlicesPageBody
				}
			}
		}
	}
`
