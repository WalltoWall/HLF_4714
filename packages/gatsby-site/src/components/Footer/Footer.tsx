import React from 'react'
import clsx from 'clsx'

import { useSiteSettings } from '../../hooks/useSiteSettings'
import { BoundedBox } from '../BoundedBox'
import { usePrimaryNavigation } from '../../hooks/usePrimaryNavigation'
import logoSmUrl from '../../assets/logo-sm.svg'
import { Link } from '../Link'
import { HStack } from '../HStack'
import * as styles from './Footer.module.css'
import { HTMLContent } from '../HTMLContent'

const Navigation = () => {
  const navigation = usePrimaryNavigation()

  return (
    <nav>
      <HStack
        as="ul"
        rowGap="20px"
        columnGap="8px"
        smColumnGap="16px"
        mdColumnGap="50px"
        className="items-center"
      >
        <li>
          <Link href="/" className="block">
            <span className="sr-only">Navigate to home</span>
            <img
              loading="lazy"
              decoding="async"
              src={logoSmUrl}
              className="w-5 sm:w-[26px] md:w-9"
              alt="Hawaii Leadership Forum"
              width={36}
              height={36}
            />
          </Link>
        </li>

        {navigation.map((item, idx) => {
          if (!item.label || !item.url) return null

          return (
            <li
              key={item.label + idx}
              className={clsx(
                'sans-10-1_25 font-bold sm:sans-11-1_25 lg:sans-12-1_25',
                'uppercase tracking-caps text-white',
              )}
            >
              <Link href={item.url}>{item.label}</Link>
            </li>
          )
        })}
      </HStack>
    </nav>
  )
}

export const Footer = () => {
  const siteSettings = useSiteSettings()

  return (
    <footer className="relative mt-auto space-y-6 bg-white">
      <BoundedBox>
        {siteSettings.siteDisclaimerHTML && (
          <HTMLContent
            html={siteSettings.siteDisclaimerHTML}
            className="text-center"
            variant="disclaimer"
          />
        )}
      </BoundedBox>

      <BoundedBox className={clsx('py-5', styles.gradientBg)}>
        <div className="flex flex-col items-center space-y-6">
          <Navigation />

          <p className="text-center text-white sans-11-1_45">
            {siteSettings.siteCopyright} <br />
            Website designed &amp; developed by{' '}
            <Link href="https://walltowall.com" className="underline">
              Wall-to-Wall Studios. Inc
            </Link>
          </p>
        </div>
      </BoundedBox>
    </footer>
  )
}
