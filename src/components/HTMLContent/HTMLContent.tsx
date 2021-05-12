import React from 'react'
import clsx from 'clsx'
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types'

import * as styles from './HTMLContent.module.css'

const defaultElement = 'div'

interface OwnProps
  extends Omit<React.ComponentProps<'div'>, 'dangerouslySetInnerHTML'> {
  html: string
  variant?: 'centeredText'
}

export type HTMLContentProps<
  T extends React.ElementType = typeof defaultElement,
> = PolymorphicPropsWithoutRef<OwnProps, T>

export const HTMLContent = <
  T extends React.ElementType = typeof defaultElement,
>({
  as,
  html,
  className,
  variant = 'centeredText',
  ...props
}: HTMLContentProps<T>) => {
  const Element: React.ElementType = as || defaultElement

  return (
    <Element
      className={clsx(className, styles[variant])}
      dangerouslySetInnerHTML={{ __html: html }}
      {...props}
    />
  )
}
