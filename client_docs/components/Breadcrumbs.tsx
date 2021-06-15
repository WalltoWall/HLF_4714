import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { ChevronRightIcon } from '@heroicons/react/solid'

import type { StoryMetadata } from '../types'

interface Props {
  path: StoryMetadata['path']
}

export let Breadcrumbs = ({ path }: Props) => {
  return (
    <nav className="flex items-center space-x-1">
      {path.map((segment, idx) => (
        <React.Fragment key={segment.href}>
          <Link
            to={segment.href}
            className={clsx(
              'font-medium text-14',
              'focus:outline-none focus:ring-2',
            )}
          >
            {segment.label}
          </Link>
          {idx !== 1 && (
            <ChevronRightIcon className="w-4 h-4 text-docsGray-300" />
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}
