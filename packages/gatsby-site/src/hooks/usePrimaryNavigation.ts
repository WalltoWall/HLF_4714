import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { PrimaryNavigationQuery } from '../types.generated'

export function usePrimaryNavigation() {
  const queryData = useStaticQuery<PrimaryNavigationQuery>(graphql`
    query PrimaryNavigation {
      prismicNavigation(uid: { eq: "primary" }) {
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

  // We're intentionally ignoring the useMemo dependency here since queryData
  // will never update in practice.
  return React.useMemo(() => {
    return (
      queryData.prismicNavigation?.data?.nav_items
        ?.map((item) => ({
          label: item?.label?.text,
          url: item?.link?.url,
        }))
        .filter((item) => item.label && item.url) ?? []
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
