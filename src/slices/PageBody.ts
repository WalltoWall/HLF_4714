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

// 2. Add your slice
const slices = {
  PageBodyTexturedImage,
  PageBodyPageIntro,
  PageBodyCenteredText,
}

// 3. Add your slice fragment
export const fragment = graphql`
  fragment SlicesPageBody on PrismicPageBodySlicesType {
    ...PageBodyTexturedImage
    ...PageBodyPageIntro
    ...PageBodyCenteredText
    # The following slices do not have fragments:
  }
`

//@ts-expect-error
export const slicesMap = reshapeSlicesMap(slices)
