import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment PageBodyCenteredText on PrismicPageDataBodyCenteredText {
    primary {
      text {
        html
      }
    }
  }
`
