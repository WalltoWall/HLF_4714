/**
 * Root Prismic slices file where Page Body slices are registered for use in the
 * page template file.
 *
 * @see /docs/guide-create-a-slice.md for more details.
 */

import { graphql } from 'gatsby'

import { reshapeSlicesMap } from '../lib/mapSlicesToComponents'

// 1. Import your slice
import * as PageBodyTexturedImage from './PageBodyTexturedImage/PageBodyTexturedImage'
import * as PageBodyPageIntro from './PageBodyPageIntro/PageBodyPageIntro'
import * as PageBodyCenteredText from './PageBodyCenteredText/PageBodyCenteredText'
import * as PageBodyTwoColumnText from './PageBodyTwoColumnText/PageBodyTwoColumnText'
import * as PageBodyTextWithImage from './PageBodyTextWithImage/PageBodyTextWithImage'
import * as PageBodyTeam from './PageBodyTeam/PageBodyTeam'

// 2. Add your slice
const slices = {
  PageBodyTexturedImage,
  PageBodyPageIntro,
  PageBodyCenteredText,
  PageBodyTwoColumnText,
  PageBodyTextWithImage,
  PageBodyTeam,
}

// 3. Add your slice fragment
export const fragment = graphql`
  fragment SlicesPageBody on PrismicPageBodySlicesType {
    ...PageBodyTexturedImage
    ...PageBodyPageIntro
    ...PageBodyCenteredText
    ...PageBodyTwoColumnText
    ...PageBodyTextWithImage
    ...PageBodyTeam

    # The following slices do not have fragments:
  }
`

//@ts-expect-error
export const slicesMap = reshapeSlicesMap(slices)
