import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import type { StoryModule } from '../types'
import logoUrl from '../../src/assets/logo.svg'
import { NavigationGroup } from './NavigationGroup'
import { useNavGroups } from '../hooks/useNavGroups'

interface Props {
  storyModules: Record<string, StoryModule>
}

export let Sidebar = ({ storyModules }: Props) => {
  let [isOpen, setIsOpen] = React.useState(false)
  let navGroups = useNavGroups(storyModules)

  function closeNav() {
    setIsOpen(false)
  }

  return (
    <>
      <button
        className={clsx(
          isOpen ? 'block' : 'hidden',
          'lg:hidden',
          'fixed inset-0 bg-docsGray-900 bg-opacity-50 w-full',
          'z-10 focus:outline-none',
        )}
        onClick={closeNav}
      />
      <nav
        className={clsx(
          isOpen ? 'block' : 'hidden',
          'lg:block',
          'px-4 py-8 border-r-2 border-docsGray-200 bg-docsGray-50',
          'fixed lg:relative z-10',
          'min-h-screen',
        )}
      >
        <div className="space-y-12 lg:sticky lg:top-8">
          <Link
            to="/"
            className="block focus:ring-2 focus:outline-none"
            onClick={closeNav}
          >
            <img
              src={logoUrl}
              alt="Hawaii Leadership Forum"
              loading="lazy"
              decoding="async"
              width={300}
              height={92}
            />
          </Link>

          <div className="space-y-5">
            {Object.entries(navGroups).map(([groupLabel, segments]) => {
              return (
                <NavigationGroup
                  key={groupLabel}
                  label={groupLabel}
                  closeNav={closeNav}
                  segments={segments}
                />
              )
            })}

            <NavigationGroup
              label="Style Guide"
              closeNav={closeNav}
              segments={[
                { href: '/style-guide/colors', label: 'Colors' },
                { href: '/style-guide/typography', label: 'Typography' },
              ]}
            />
          </div>
        </div>
      </nav>

      <button
        className={clsx(
          'fixed right-8 bottom-8',
          'block lg:hidden',
          'shadow-lg rounded-full p-4 ',
          'bg-gradient-to-t from-docsCyan-600 to-docsCyan-500',
          'transform transition hover:translate-y-[-2px]',
          'focus:ring-2 focus:outline-none z-10',
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <XIcon className={clsx('w-7 h-7', 'text-white')} />
        ) : (
          <MenuIcon className={clsx('w-7 h-7', 'text-white')} />
        )}
      </button>
    </>
  )
}
