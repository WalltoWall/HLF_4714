import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import {
  ChevronRightIcon,
  DeviceMobileIcon,
  DesktopComputerIcon,
} from '@heroicons/react/solid'

import { useActiveStory } from '../hooks/useActiveStory'
import type { StoryModule } from '../types'

interface IconButtonProps extends React.ComponentProps<'button'> {
  isActive: boolean
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element
}

let IconButton = ({
  icon: Icon,
  isActive,
  className,
  ...props
}: IconButtonProps) => {
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
      <Icon className="w-5 h-5" />
    </button>
  )
}

interface Props {
  storyModules: Record<string, StoryModule>
}

export let Content = ({ storyModules }: Props) => {
  let [size, setSize] = React.useState<'desktop' | 'mobile'>('desktop')
  let { story, components } = useActiveStory(storyModules)

  return (
    <main className="w-full p-8 mx-auto max-w-7xl">
      {story ? (
        <div className="space-y-12">
          <div className="space-y-1">
            <nav className="flex items-center space-x-1">
              {story.meta?.path.map((segment, idx) => (
                <React.Fragment key={segment.href}>
                  <Link
                    to={segment.href}
                    className={clsx(
                      'font-medium text-14',
                      'focus:outline-none focus:ring-2',
                    )}
                  >
                    {segment.label}
                  </Link>
                  {idx !== 1 && (
                    <ChevronRightIcon className="w-4 h-4 text-docsGray-300" />
                  )}
                </React.Fragment>
              ))}
            </nav>

            <h1 className="font-extrabold text-docsGray-900 text-32">
              {story.meta?.title}
            </h1>

            <div className="text-18">{story.meta?.description}</div>
          </div>

          {components.map(({ Component, label }, idx) => (
            <div key={story?.meta?.title ?? '' + idx} className="space-y-4">
              <div className="flex items-center space-x-4">
                <h2 className="font-extrabold text-24 text-docsGray-900">
                  {label}
                </h2>

                <div className="flex space-x-2">
                  <IconButton
                    isActive={size === 'mobile'}
                    icon={DeviceMobileIcon}
                    onClick={() => setSize('mobile')}
                  />
                  <IconButton
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
