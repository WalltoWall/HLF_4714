import React from 'react'
import { StoryMetadata } from '../types'
import { Breadcrumbs } from './Breadcrumbs'

interface Props {
  children: React.ReactNode
  path?: StoryMetadata['path']
  title?: string
  description?: string
}

export let ContentLayout = ({ children, path, title, description }: Props) => {
  return (
    <main className="w-full px-5 py-8 xl:px-8 max-w-7xl">
      <div className="space-y-12">
        <div className="space-y-1">
          {path && <Breadcrumbs path={path} />}

          {title && (
            <h1 className="font-extrabold text-docsGray-900 text-32">
              {title}
            </h1>
          )}

          {description && <p className="text-16 max-w-prose">{description}</p>}
        </div>

        {children}
      </div>
    </main>
  )
}
