import React from 'react'
import clsx from 'clsx'

interface Props extends React.ComponentProps<'button'> {
  isActive: boolean
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  label: string
}

export let IconButton = ({
  icon: Icon,
  isActive,
  className,
  label,
  ...props
}: Props) => {
  return (
    <button
      className={clsx(
        'transition relative',
        isActive ? 'text-docsCyan-600' : 'text-docsGray-300',
        'focus:outline-none focus:ring-2 rounded-lg',
        className,
      )}
      {...props}
    >
      <span className="sr-only">{label}</span>
      <Icon className="w-5 h-5" />
    </button>
  )
}
