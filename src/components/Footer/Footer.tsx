import React from 'react'

import { useSiteSettings } from '../../hooks/useSiteSettings'
import { BoundedBox } from '../BoundedBox'

export const Footer = () => {
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
