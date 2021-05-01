import * as React from 'react'
import { PageProps, graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { withUnpublishedPreview } from 'gatsby-source-prismic'
import MapSlicesToComponents from '@walltowall/react-map-slices-to-components'

import { NotFoundPageQuery } from '../types.generated'
import { slicesMap } from '../slices/PageBody'
import { mapDataToPropsEnhancer, PageTemplate } from '../templates/page'
import { useSiteSettings } from '../hooks/useSiteSettings'

import { Layout } from '../components/Layout'

/**
 * Mapping of Prismic custom type API IDs to their templates. Add mappings here
 * as custom types and templates are created.
 *
 * @see https://github.com/angeloashmore/gatsby-source-prismic/blob/master/docs/previews.md#withUnpublishedPreview
 */
const customTypeToTemplate = {
  page: PageTemplate,
}

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
      <Helmet>
        <title>
          {page?.data?.meta_title ??
            page?.data?.title?.text ??
            'Page not found'}{' '}
          | {siteSettings.siteName}
        </title>
        {page?.data?.meta_description && (
          <meta name="description" content={page?.data?.meta_description} />
        )}
      </Helmet>

      <MapSlicesToComponents
        list={page?.data?.body}
        map={slicesMap}
        meta={meta}
        mapDataToPropsEnhancer={mapDataToPropsEnhancer}
      />
    </Layout>
  )
}

export default withUnpublishedPreview(NotFoundPage, {
  templateMap: customTypeToTemplate,
})

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
          __typename
          ... on Node {
            id
          }
          ...SlicesPageBody
        }
      }
    }
  }
`
