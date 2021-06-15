import React from 'react'
import { DeviceMobileIcon, DesktopComputerIcon } from '@heroicons/react/solid'

import { useActiveStory } from '../hooks/useActiveStory'
import type { StoryModule } from '../types'
import { Breadcrumbs } from './Breadcrumbs'
import { IconButton } from './IconButton'

interface Props {
  storyModules: Record<string, StoryModule>
}

export let SliceContent = ({ storyModules }: Props) => {
  let [size, setSize] = React.useState<'desktop' | 'mobile'>('desktop')
  let { story, components } = useActiveStory(storyModules)

  return (
    <main className="w-full p-8 mx-auto max-w-7xl">
      {story ? (
        <div className="space-y-12">
          <div className="space-y-1">
            {story.meta?.path && <Breadcrumbs path={story.meta.path} />}

            <h1 className="font-extrabold text-docsGray-900 text-32">
              {story.meta?.title}
            </h1>

            <p className="text-16 max-w-[70ch]">{story.meta?.description}</p>
          </div>

          {components.map(({ Component, label }, idx) => (
            <div key={story?.meta?.title ?? '' + idx} className="space-y-4">
              <div className="flex items-center space-x-4">
                <h2 className="font-extrabold text-24 text-docsGray-900">
                  {label}
                </h2>

                <div className="flex space-x-2">
                  <IconButton
                    label="Toggle Mobile View"
                    isActive={size === 'mobile'}
                    icon={DeviceMobileIcon}
                    onClick={() => setSize('mobile')}
                  />
                  <IconButton
                    label="Toggle Desktop View"
                    isActive={size === 'desktop'}
                    icon={DesktopComputerIcon}
                    onClick={() => setSize('desktop')}
                  />
                </div>
              </div>

              <div className="p-4 rounded shadow-inner bg-docsGray-100">
                <div className="min-w-[375px]">
                  <Component />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Failed to load this Slice.</div>
      )}
    </main>
  )
}
