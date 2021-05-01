import React from 'react'
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types'

const defaultElement = 'div'

interface OwnProps
  extends Omit<React.ComponentProps<'div'>, 'dangerouslySetInnerHTML'> {
  html: string
}

export type HTMLContentProps<
  T extends React.ElementType = typeof defaultElement
> = PolymorphicPropsWithoutRef<OwnProps, T>

export const HTMLContent = <
  T extends React.ElementType = typeof defaultElement
>({
  as,
  html,
  ...props
}: HTMLContentProps<T>) => {
  const Element: React.ElementType = as || defaultElement

  return <Element dangerouslySetInnerHTML={{ __html: html }} {...props} />
}
