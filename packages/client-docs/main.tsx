import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'gatsby-site/src/index.css'
import '@fontsource/pt-serif/400.css'

import { App } from './components/App'

let storyModules = import.meta.globEager('./docs/**/*.stories.tsx')

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App storyModules={storyModules} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
