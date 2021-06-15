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
      <div
        className={clsx(
          isOpen ? 'block' : 'hidden',
          'lg:hidden',
          'fixed inset-0 bg-docsGray-900 bg-opacity-50',
          'z-10',
        )}
      />
      <nav
        className={clsx(
          isOpen ? 'block' : 'hidden',
          'lg:block',
          'p-8 space-y-12 border-r-2 border-docsGray-200 bg-docsGray-50',
          'fixed lg:relative z-10',
          'min-h-screen',
        )}
      >
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
      </nav>

      <button
        className={clsx(
          'fixed right-8 bottom-8',
          'block lg:hidden',
          'shadow-xl rounded-full p-4 bg-docsCyan-500',
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
