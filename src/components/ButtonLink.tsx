import clsx from 'clsx'
import * as React from 'react'
import { focusRing } from '../lib/utilStyles'
import { ExternalLink } from './icons/ExternalLink'

import { Link, LinkProps } from './Link'

export const ButtonLink = ({ className, children, ...props }: LinkProps) => {
  return (
    <Link
      className={clsx(
        className,
        focusRing,
        'select-none',
        'py-3 px-5 md:py-4 md:px-6 bg-gray-25 inline-flex hover:bg-black',
        'focus:bg-black transition space-x-2 md:space-x-3 items-center',
      )}
      {...props}
    >
      <div className="text-white sans-caps">{children}</div>
      <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
    </Link>
  )
}
