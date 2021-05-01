import React from 'react'
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types'

const defaultElement = 'div'

const variants = {
  base: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 48,
    paddingBottom: 48,
  },
} as const

interface OwnProps extends React.ComponentProps<'div'> {
  children?: React.ReactNode
  innerMaxWidth?: React.CSSProperties['maxWidth']
  variant?: keyof typeof variants
}

export type BoundedBoxProps<
  T extends React.ElementType = typeof defaultElement
> = PolymorphicPropsWithoutRef<OwnProps, T>

export const BoundedBox = <
  T extends React.ElementType = typeof defaultElement
>({
  as,
  children,
  variant = 'base',
  innerMaxWidth,
  style,
  ...props
}: BoundedBoxProps<T>) => {
  const Element: React.ElementType = as || defaultElement
  const variantStyles = variants[variant]

  return (
    <Element style={{ ...variantStyles, ...style }} {...props}>
      <div
        style={{
          maxWidth: innerMaxWidth,
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </div>
    </Element>
  )
}
