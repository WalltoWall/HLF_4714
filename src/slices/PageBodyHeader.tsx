import * as React from 'react'

import { useSiteSettings } from '../hooks/useSiteSettings'
import { BoundedBox } from '../components/BoundedBox'
import { Link } from '../components/Link'

const PageBodyHeader = () => {
  const siteSettings = useSiteSettings()

  return (
    <BoundedBox
      as="header"
      style={{ backgroundColor: 'black', color: 'white' }}
    >
      <p>
        <Link href="/">{siteSettings.siteName}</Link>
      </p>
    </BoundedBox>
  )
}

export const mapDataToContext = () => ({
  bg: 'black',
})

export default PageBodyHeader
