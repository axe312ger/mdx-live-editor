import React from 'react'
import MDX from '@mdx-js/runtime'
import Grid from './mdx/Grid'

export default function Renderer({ children }) {
  const components = {
    // eslint-disable-next-line
    h1: props => <h1 style={{ color: 'tomato' }} {...props} />
  }
  const scope = {
    Demo: props => <h1>This is a demo component</h1>,
    Grid
  }
  return (
    <MDX components={components} scope={scope}>
      {children}
    </MDX>
  )
}
