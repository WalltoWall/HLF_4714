import React from 'react'

import { useActiveStory } from '../hooks/useActiveStory'
import type { StoryModule } from '../types'
import { ContentLayout } from './ContentLayout'
import { RichTextContainer } from './RichTextContainer'

interface Props {
  storyModules: Record<string, StoryModule>
}

export let DocsContent = ({ storyModules }: Props) => {
  let { story } = useActiveStory(storyModules)
  let ContentComp = story?.meta?.content

  return (
    <ContentLayout
      path={story?.meta?.path}
      title={story?.meta?.title}
      description={story?.meta?.description}
    >
      <RichTextContainer>{ContentComp && <ContentComp />}</RichTextContainer>
    </ContentLayout>
  )
}
