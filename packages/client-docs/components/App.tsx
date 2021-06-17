import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Colors } from '../routes/Colors'
import { Home } from '../routes/Home'
import { Typography } from '../routes/Typography'
import type { StoryModule } from '../types'
import { DocsContent } from './DocsContent'

import { Layout } from './Layout'
import { SliceContent } from './SliceContent'

interface Props {
  storyModules: Record<string, StoryModule>
}

export let App = ({ storyModules }: Props) => {
  return (
    <Layout storyModules={storyModules}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/slices/*"
          element={<SliceContent storyModules={storyModules} />}
        />
        <Route path="/style-guide/colors" element={<Colors />} />
        <Route path="/style-guide/typography" element={<Typography />} />

        <Route
          path="/*"
          element={<DocsContent storyModules={storyModules} />}
        />
      </Routes>
    </Layout>
  )
}
