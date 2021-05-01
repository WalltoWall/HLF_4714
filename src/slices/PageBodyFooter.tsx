import React from 'react'

import { useSiteSettings } from '../hooks/useSiteSettings'
import { BoundedBox } from '../components/BoundedBox'

const PageBodyFooter = () => {
  const siteSettings = useSiteSettings()

  return (
    <BoundedBox
      as="footer"
      style={{
        backgroundColor: 'black',
        color: 'white',
        marginTop: 'auto',
      }}
    >
      <p>{siteSettings.siteCopyright}</p>
    </BoundedBox>
  )
}

export const mapDataToContext = () => ({
  bg: 'black',
})

export default PageBodyFooter
