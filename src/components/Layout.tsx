import React from 'react'
import { Helmet } from 'react-helmet-async'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'

import { DevPanel } from './DevPanel'
import { useSiteSettings } from '../hooks/useSiteSettings'
import { focusRing } from '../lib/utilStyles'

export type LayoutProps = {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const settings = useSiteSettings()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{settings.siteName}</title>
        <meta name="description" content={settings.siteDescription} />
        <link rel="stylesheet" href="https://use.typekit.net/erz3xap.css" />
      </Helmet>

      <SkipNavLink className={focusRing}>
        <p>Skip to content</p>
      </SkipNavLink>

      <SkipNavContent as="main">{children}</SkipNavContent>

      {process.env.NODE_ENV === 'development' && <DevPanel />}
    </>
  )
}
