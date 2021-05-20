/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import GatsbyLink, { GatsbyLinkProps } from 'gatsby-link'
import { isInternal, isAnchorOnly, extractAnchor } from '@walltowall/helpers'
import clsx from 'clsx'

import { focusRing } from '../lib/utilStyles'

export interface LinkProps extends Omit<GatsbyLinkProps<any>, 'to'> {
  href: string
}

export const Link = ({ href, className, ...props }: LinkProps) => {
  const cn = clsx(focusRing, className)

  if (!href) {
    return <a className={cn} {...props} />
  }
  if (isAnchorOnly(href)) {
    return <a className={cn} href={extractAnchor(href)} {...props} />
  }
  if (!isInternal(href)) {
    return (
      <a
        className={cn}
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        {...props}
      />
    )
  }

  //@ts-ignore
  return <GatsbyLink className={cn} to={href} {...props} />
}
