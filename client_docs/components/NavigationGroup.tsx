import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import type { PathSegment } from '../types'

interface Props {
  label: string
  segments: PathSegment[]
  closeNav: () => void
}

export let NavigationGroup = ({ label, segments, closeNav }: Props) => {
  return (
    <Disclosure as="div" className="font-medium">
      {({ open }) => {
        return (
          <>
            <Disclosure.Button
              className={clsx(
                'flex items-center w-full space-x-1 text-docsGray-900',
                'focus:ring-2 focus:outline-none',
              )}
            >
              <h4 className="font-bold text-16 leading-1">{label}</h4>

              <ChevronDownIcon
                className={clsx(
                  'w-5 h-5 transform',
                  open ? 'rotate-180' : 'rotate-0',
                )}
              />
            </Disclosure.Button>

            <Disclosure.Panel as="ul" className="pt-5 space-y-3">
              {segments.map((path) => (
                <li key={path.href} className="leading-1 text-14">
                  <Link
                    to={path.href}
                    className={clsx(
                      'block transition',
                      'hover:text-docsCyan-600',
                      'focus:ring-2 focus:outline-none',
                    )}
                    onClick={closeNav}
                  >
                    {path.label}
                  </Link>
                </li>
              ))}
            </Disclosure.Panel>
          </>
        )
      }}
    </Disclosure>
  )
}
