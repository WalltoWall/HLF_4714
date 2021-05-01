import React from 'react'
import GatsbyLink, { GatsbyLinkProps } from 'gatsby-link'

interface LinkProps extends Omit<GatsbyLinkProps<any>, 'to'> {
  href: string
}

export const Link = ({ href, ...props }: LinkProps) => {
  //@ts-ignore
  return <GatsbyLink to={href} {...props} />
}
