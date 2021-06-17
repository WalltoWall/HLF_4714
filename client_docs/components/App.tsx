import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Colors } from '../routes/Colors'
import { Home } from '../routes/Home'
import { Typography } from '../routes/Typography'
import { DocsContent } from './DocsContent'

import { Layout } from './Layout'
import { SliceContent } from './SliceContent'

let storyModules = import.meta.globEager('../../src/**/*.stories.tsx')

export let App = () => {
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
