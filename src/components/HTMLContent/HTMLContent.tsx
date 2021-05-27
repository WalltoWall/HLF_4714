import React from 'react'
import clsx from 'clsx'
import type {
  PolymorphicPropsWithoutRef,
  PolymorphicPropsWithRef,
  PolymorphicForwardRefExoticComponent,
} from 'react-polymorphic-types'

import * as styles from './HTMLContent.module.css'

const defaultElement = 'div'

interface OwnProps
  extends Omit<React.ComponentProps<'div'>, 'dangerouslySetInnerHTML'> {
  html: string
  variant?:
    | 'centeredText'
    | 'twoColumnText'
    | 'textWithImage'
    | 'callToAction'
    | 'disclaimer'
}

export type HTMLContentProps<
  T extends React.ElementType = typeof defaultElement,
> = PolymorphicPropsWithRef<OwnProps, T>

//@ts-ignore
export const HTMLContent: PolymorphicForwardRefExoticComponent<
  OwnProps,
  typeof defaultElement
> = React.forwardRef(function HTMLContent<
  T extends React.ElementType = typeof defaultElement,
>(
  {
    as,
    html,
    className,
    variant = 'centeredText',
    ...props
  }: PolymorphicPropsWithoutRef<OwnProps, T>,
  ref: React.ForwardedRef<Element>,
) {
  const Element: React.ElementType = as || defaultElement

  return (
    <Element
      ref={ref}
      className={clsx(className, styles[variant])}
      dangerouslySetInnerHTML={{ __html: html }}
      {...props}
    />
  )
})
