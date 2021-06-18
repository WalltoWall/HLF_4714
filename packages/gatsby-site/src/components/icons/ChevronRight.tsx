import * as React from 'react'

export const ChevronRight = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg viewBox="0 0 8 15" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeWidth={1.5}
        transform="matrix(.70710678 -.70710678 .70710678 .70710678 -5.416388 7.435929)"
      >
        <path d="m0 8.71875h9" />
        <path d="m8.71875 0-.241274 9.272971" />
      </g>
    </svg>
  )
}
