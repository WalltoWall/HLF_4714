import { useLocation } from 'react-router-dom'
import type { StoryModule } from '../types'

interface StoryComponent {
  label: string
  Component: () => JSX.Element
}

export function useActiveStory(storyModules: Record<string, StoryModule>) {
  let location = useLocation()

  let story = Object.values(storyModules).find(({ meta }) => {
    if (!meta) return false

    let [, item] = meta.path

    return item.href === location.pathname
  })

  if (!story) return { story: undefined, components: [] }

  let components: StoryComponent[] = Object.entries(story)
    .filter(([key]) => key !== 'meta')
    .map(([key, Component]) => {
      return { Component, label: key }
    })

  return { story, components }
}
