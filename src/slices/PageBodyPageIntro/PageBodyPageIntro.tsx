import * as React from 'react'
import { graphql } from 'gatsby'

import { PageBodyPageIntroFragment } from '../../types.generated'
import { MapDataToPropsArgs } from '../../lib/mapSlicesToComponents'
import { PageTemplateEnhancerProps } from '../../templates/page'

export type PageBodyPageIntroProps = ReturnType<typeof mapDataToProps> &
  PageTemplateEnhancerProps

const PageBodyPageIntro = ({
  heading,
  navItems = [],
}: PageBodyPageIntroProps) => {
  return <section className="page-intro">PageBodyPageIntro</section>
}

export const mapDataToProps = ({
  data,
}: MapDataToPropsArgs<PageBodyPageIntroFragment, typeof mapDataToContext>) => ({
  heading: data.primary?.heading?.text,
  navItems: data.primary?.navigation?.document?.data?.nav_items?.map(
    (navItem) => ({
      label: navItem?.label?.text,
      href: navItem?.link?.url,
    }),
  ),
})

export const mapDataToContext = () => ({
  bg: Symbol('Dynamic Color'),
})

export const fragment = graphql`
  fragment PageBodyPageIntro on PrismicPageBodyPageIntro {
    primary {
      heading {
        text
      }
      navigation {
        document {
          ... on PrismicNavigation {
            data {
              nav_items {
                label {
                  text
                }
                link {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PageBodyPageIntro
