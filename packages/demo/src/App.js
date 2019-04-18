import React, { useEffect } from 'react'

import editor from '@mdx-live/editor'
import '@axe312/easymde/dist/easymde.min.css'

import Grid from './mdx/Grid'
import defaultMarkdownValue from './default.md'

const components = [
  {
    tagname: 'Grid',
    component: Grid,
    title: 'Grid',
    description: 'Display content next to each other',
    icon: 'columns',
    demo: `<Grid>
  <img src="https://source.unsplash.com/weekly?water" alt="" />
  <img src="https://source.unsplash.com/weekly?nature" alt="" />
  <img src="https://source.unsplash.com/weekly?air" alt="" />
</Grid>`
  }
]

const replacements = {
  h1: ({ children, ...props }) => (
    <h1 style={{ color: 'tomato' }} {...props}>
      {children}
    </h1>
  )
}

export default function App() {
  let easymde

  useEffect(() => {
    easymde = editor({ components, replacements })
  }, [easymde])

  return (
    <div id="app">
      <textarea id="editor" defaultValue={defaultMarkdownValue} />
    </div>
  )
}
