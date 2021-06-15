import React from 'react'
import type { StoryModule, PathSegment } from '../types'

type NavGroups = Record<string, PathSegment[]>

export function useNavGroups(
  storyModules: Record<string, StoryModule>,
): NavGroups {
  let [navGroups, setSidebarNav] = React.useState<NavGroups>({})

  React.useEffect(() => {
    let groups: NavGroups = {}

    Object.values(storyModules).map(({ meta }) => {
      if (!meta) return

      let [parent, item] = meta.path

      // If a group exists for this parent, use it. Otherwise, create it.
      groups[parent.label] = groups[parent.label] ?? []
      let group = groups[parent.label]

      group.push(item)
    })

    setSidebarNav(groups)
  }, [storyModules])

  return navGroups
}
