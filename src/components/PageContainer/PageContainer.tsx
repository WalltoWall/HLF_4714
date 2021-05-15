import React from 'react'
import clsx from 'clsx'

import * as styles from './PageContainer.module.css'

interface PageContainerProps {
  children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="relative flex flex-col min-h-screen max-w-[1240px] mx-auto px-2">
      <div
        className={clsx(
          'absolute inset-y-0 w-2 left-0 pointer-events-none',
          styles.leftBorderGradient,
        )}
      />
      <div
        className={clsx(
          'absolute inset-y-0 right-0 w-2 pointer-events-none',
          styles.rightBorderGradient,
        )}
      />
      {children}
    </div>
  )
}
