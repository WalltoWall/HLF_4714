import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment PageBodyTextWithImage on PrismicPageDataBodyTextWithImage {
    primary {
      subheading {
        text
      }
      heading {
        text
      }
    }
    items {
      image {
        alt
        gatsbyImageData(width: 800, placeholder: BLURRED)
      }
      text {
        html
      }
      button_text {
        text
      }
      button_link {
        url
      }
    }
  }
`
