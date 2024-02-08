import { useStaticQuery, graphql } from 'gatsby'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'

const YEAR = new Date().getFullYear().toString()

export const useSiteSettings = () => {
	const staticData = useStaticQuery<Queries.PrismicSiteSettingsQuery>(graphql`
		query PrismicSiteSettings {
			prismicSettings {
				_previewable
				data {
					site_name {
						text
					}
					site_description {
						text
					}
					site_copyright {
						text
					}
					site_disclaimer {
						html
					}
				}
			}
		}
	`)
	const data = useMergePrismicPreviewData(staticData)
	const settings = data?.prismicSettings?.data

	return {
		siteName: settings?.site_name?.text,
		siteDescription: settings?.site_description?.text,
		siteCopyright: settings?.site_copyright?.text?.replace?.(
			/\$YEAR/g,
			YEAR,
		),
		siteDisclaimerHTML: settings?.site_disclaimer?.html,
	}
}
