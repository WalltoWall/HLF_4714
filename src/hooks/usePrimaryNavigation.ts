import { useStaticQuery, graphql } from 'gatsby'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'

export function usePrimaryNavigation() {
	const staticData = useStaticQuery<Queries.PrimaryNavigationQuery>(graphql`
		query PrimaryNavigation {
			prismicNavigation(uid: { eq: "primary" }) {
				_previewable
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
	`)

	const data = useMergePrismicPreviewData(staticData)

	return (
		data?.prismicNavigation?.data?.nav_items
			?.map((item) => ({
				label: item?.label?.text,
				url: item?.link?.url,
			}))
			.filter((item) => item.label && item.url) ?? []
	)
}
