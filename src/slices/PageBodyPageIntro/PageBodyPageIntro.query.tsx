import { graphql } from 'gatsby'

export const fragment = graphql`
	fragment PageBodyPageIntro on PrismicPageDataBodyPageIntro {
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
