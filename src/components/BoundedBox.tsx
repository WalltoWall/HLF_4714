import clsx from 'clsx'
import React from 'react'
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types'

const defaultElement = 'div'

const variants = {
  base: {
    paddingX: 'px-8',
  },
} as const

interface OwnProps extends React.ComponentProps<'div'> {
  children?: React.ReactNode
  innerMaxWidthClassName?: string
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
  innerMaxWidthClassName = 'max-w-content',
  className,
  ...props
}: BoundedBoxProps<T>) => {
  const Element: React.ElementType = as || defaultElement
  const variantStyles = variants[variant]

  return (
    <Element className={clsx(className, variantStyles.paddingX)} {...props}>
      <div
        className={clsx(
          'w-full mx-auto h-full flex flex-col',
          innerMaxWidthClassName,
        )}
      >
        {children}
      </div>
    </Element>
  )
}
