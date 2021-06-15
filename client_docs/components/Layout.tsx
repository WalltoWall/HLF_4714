import React from 'react'
import clsx from 'clsx'

import { Sidebar } from './Sidebar'
import { StoryModule } from '../types'

interface Props {
  children: React.ReactNode
  storyModules: Record<string, StoryModule>
}

export let Layout = ({ children, storyModules }: Props) => {
  return (
    <div
      className={clsx(
        'relative',
        'grid xl:grid-cols-[300px,1fr] min-h-screen',
        'text-docsGray-600 font-system antialiased',
      )}
    >
      <Sidebar storyModules={storyModules} />
      {children}
    </div>
  )
}
