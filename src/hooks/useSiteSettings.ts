import { useStaticQuery, graphql } from 'gatsby'

const YEAR = new Date().getFullYear().toString()

export const useSiteSettings = () => {
	const queryData = useStaticQuery<Queries.PrismicSiteSettingsQuery>(graphql`
		query PrismicSiteSettings {
			prismicSettings {
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

	const settings = queryData.prismicSettings?.data

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
