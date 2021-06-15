import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Layout } from './Layout'
import { Content } from './Content'

let storyModules = import.meta.globEager('../../src/**/*.stories.tsx')

export let App = () => {
  return (
    <Layout storyModules={storyModules}>
      <Routes>
        <Route path="*" element={<Content storyModules={storyModules} />} />
      </Routes>
    </Layout>
  )
}
