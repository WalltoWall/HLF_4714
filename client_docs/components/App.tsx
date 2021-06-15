import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Layout } from './Layout'
import { SliceContent } from './SliceContent'

let storyModules = import.meta.globEager('../../src/**/*.stories.tsx')

export let App = () => {
  return (
    <Layout storyModules={storyModules}>
      <Routes>
        <Route
          path="/slices/*"
          element={<SliceContent storyModules={storyModules} />}
        />
      </Routes>
    </Layout>
  )
}
