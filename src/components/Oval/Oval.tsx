import * as React from 'react'
import clsx from 'clsx'

import * as styles from './Oval.module.css'

interface OvalProps extends React.ComponentProps<'svg'> {
  variant: 'opaque' | 'solid' | 'opaqueReverse' | 'solidReverse'
}

export const Oval = ({ variant, className, ...props }: OvalProps) => {
  const variantClassName = styles[variant as string]

  return (
    <svg
      className={clsx(variantClassName, className)}
      viewBox="0 0 1440 3047"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={4893}
        cy={4588}
        fill="currentColor"
        fillRule="evenodd"
        r={4500}
        transform="matrix(-1 0 0 1 5515 -88)"
      />
    </svg>
  )
}
