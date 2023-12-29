import { graphql } from 'gatsby'

export const fragment = graphql`
	fragment PageBodyTeam on PrismicPageDataBodyTeam {
		primary {
			directors_subheading {
				text
			}
			directors_heading {
				text
			}
			staff_team_heading {
				text
			}
		}
	}

	fragment AllPersons on Query {
		allPrismicPerson(
			sort: { fields: data___last_name___text, order: ASC }
		) {
			nodes {
				_previewable
				prismicId
				data {
					first_name {
						text
					}
					last_name {
						text
					}
					position_type
					title {
						text
					}
					headshot {
						gatsbyImageData(width: 400, placeholder: BLURRED)
					}
					bio {
						html
					}
					bio_link {
						url
					}
				}
			}
		}
	}
`
