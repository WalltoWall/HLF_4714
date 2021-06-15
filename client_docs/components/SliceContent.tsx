import React from 'react'
import { DeviceMobileIcon, DesktopComputerIcon } from '@heroicons/react/solid'

import { useActiveStory } from '../hooks/useActiveStory'
import type { StoryModule } from '../types'
import { IconButton } from './IconButton'
import { ContentLayout } from './ContentLayout'

interface Props {
  storyModules: Record<string, StoryModule>
}

export let SliceContent = ({ storyModules }: Props) => {
  let [size, setSize] = React.useState<'desktop' | 'mobile'>('desktop')
  let { story, components } = useActiveStory(storyModules)

  return (
    <ContentLayout
      path={story?.meta?.path}
      title={story?.meta?.title}
      description={story?.meta?.description}
    >
      {components.map(({ Component, label }, idx) => (
        <div key={label + idx} className="space-y-4">
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
    </ContentLayout>
  )
}
