import React, { useEffect, useRef, useState } from 'react'

import mdxLiveEditor from '@mdx-live/editor'
import styled from 'styled-components'
import '@axe312/easymde/dist/easymde.min.css'

import Grid from './mdx/Grid'
import defaultMarkdownValue from './default.md'

const Textarea = styled.textarea`
  min-width: 100vw;
  min-height: 100vh;
`

const components = [
  {
    tagname: 'Grid',
    component: Grid,
    title: 'Grid',
    description: 'Display content next to each other',
    icon: 'grip-horizontal',
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
  const editorRef = useRef(null)
  const [editor, setEditor] = useState(null)

  useEffect(() => {
    if (!editor) {
      setEditor(
        mdxLiveEditor({
          components,
          replacements,
          easymde: { element: editorRef.current }
        })
      )
    }
  })

  return (
    <Textarea ref={editorRef} id="editor" defaultValue={defaultMarkdownValue} />
  )
}
