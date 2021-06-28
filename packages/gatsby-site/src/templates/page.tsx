import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet-async'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import MapSlicesToComponents from '@walltowall/react-map-slices-to-components'

import { PageTemplateQuery } from '../types.generated'
import { PickPartial } from '../types'
import { MapDataToPropsEnhancerArgs } from '../lib/mapSlicesToComponents'
import { slicesMap } from '../slices/PageBody'

import { Layout } from '../components/Layout'
import { useSiteSettings } from '../hooks/useSiteSettings'

import { linkResolver } from '../linkResolver'

/**
 * `mapDataToPropsEnhancer` for `react-map-slices-to-components`. Props defined
 * here are added to all slices.
 *
 * @see https://github.com/WalltoWall/react-map-slices-to-components#providing-global-enhancers
 */
export const mapDataToPropsEnhancer = (
  props: object | undefined,
  {
    context,
    nextContext,
    previousType,
    previousData,
  }: MapDataToPropsEnhancerArgs,
) => {
  return {
    nextSharesBg: nextContext?.bg === context?.bg,
    id:
      previousType === 'PageBodyAnchor'
        ? (previousData?.primary?.id as string)
        : undefined,
    ...props,
  }
}

/**
 * Props added to all slices by `mapDataToPropsEnhancer` for `PageTemplate`.
 * Intersect this type with a slice's known props to get a complete list of
 * available props.
 *
 * @see https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
 */
export type PageTemplateEnhancerProps = PickPartial<
  ReturnType<typeof mapDataToPropsEnhancer>,
  'id'
>

export const PageTemplate = ({
  data,
  location,
}: PageProps<PageTemplateQuery>) => {
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
          {page?.data?.meta_title ?? page?.data?.title?.text ?? ''} |{' '}
          {siteSettings.siteName}
        </title>
        <meta
          name="description"
          content={siteSettings.siteDescription ?? page?.data?.meta_description}
        />
      </Helmet>

      <MapSlicesToComponents
        getKey={(slice, idx) => slice.id + idx}
        list={page?.data?.body}
        map={slicesMap}
        meta={meta}
        mapDataToPropsEnhancer={mapDataToPropsEnhancer}
      />
    </Layout>
  )
}

export default withPrismicPreview(PageTemplate, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME!,
    linkResolver,
  },
])

export const query = graphql`
  query PageTemplate($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      _previewable
      prismicId
      ...PrismicPageParentRecursive
      data {
        title {
          text
        }
        meta_title
        meta_description
        body {
          __typename
          ... on PrismicSliceType {
            id
          }
          ...SlicesPageBody
        }
      }
    }

    ...AllPersons
  }
`
