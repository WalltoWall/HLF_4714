import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment PageBodyTwoColumnText on PrismicPageDataBodyTwoColumnText {
    primary {
      left_text {
        html
      }
      right_text {
        html
      }
    }
  }
`
