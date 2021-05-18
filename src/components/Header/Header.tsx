import * as React from 'react'

import { BoundedBox } from '../BoundedBox'
import { Link } from '../Link'

import logoUrl from '../../assets/logo.svg'

export const Header = () => {
  return (
    <BoundedBox
      as="header"
      className="relative z-40 py-4 bg-white md:py-5 lg:py-6"
    >
      <div className="flex justify-center">
        <Link href="/">
          <span className="sr-only">Navigate to home</span>
          <img
            src={logoUrl}
            alt="Hawaii Leadership Forum"
            loading="lazy"
            decoding="async"
            className="w-[200px] md:w-[230px] lg:w-[260px]"
            width={200}
            height={62}
          />
        </Link>
      </div>
    </BoundedBox>
  )
}
