/* eslint-disable  */
import React, { useState } from 'react'
import styled from 'styled-components'
import MDX from '@mdx-js/runtime'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/gfm/gfm'
import 'typeface-fira-mono'
import 'typeface-inter'

import './codemirror-theme.css'

const Wrapper = styled.div`
  display: grid;
  grid-auto-columns: 50%;
  grid-auto-rows: 100%;
  grid-gap: 1rem;

  max-width: 100%;
  max-height: 100%;
  overflow: hidden;

  & .CodeMirror {
    height: 100%;
    padding: 1rem;
    font-family: 'Fira Mono', monospace;
  }
`

const Editor = styled.div`
  grid-column: 1;
  overflow-y: scroll;
  border-right: 1px solid grey;
`

const Preview = styled.div`
  font-family: inter, sans-serif;
  grid-column: 2;
  overflow-y: scroll;
  border-left: 1px solid grey;
  padding: 1rem;
`

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      info: null
    }
  }
  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error: error,
      info: info
    })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        hasError: false
      })
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops, something went wrong :(</h1>
          <pre>
            <code>The error: {this.state.error.toString()}</code>
          </pre>
          <pre>
            <code>Where it occured: {this.state.info.componentStack}</code>
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

export default function MdxLiveEditor({
  components = [],
  replacements = {},
  toolbar = null,
  codemirror = {},
  defaultValue
}) {
  const [value, setValue] = useState(defaultValue || null)

  const scope = components.reduce(
    (scope, { tagname, component }) => ({
      ...scope,
      [tagname]: component
    }),
    {}
  )

  const config = {
    codemirror: {
      ...{
        mode: { name: 'gfm' },
        lineNumbers: false,
        lineWrapping: false,
        allowDropFileTypes: ['text/plain'],
        theme: 'mdx-live'
      },
      ...codemirror
    }
  }

  return (
    <Wrapper>
      <Editor>
        <CodeMirror
          value={value}
          options={config.codemirror}
          onBeforeChange={(editor, data, value) => {
            setValue(value)
          }}
          onChange={(editor, data, value) => {}}
        />
      </Editor>
      <Preview>
        <ErrorBoundary value={value}>
          <MDX components={replacements} scope={scope}>
            {value}
          </MDX>
        </ErrorBoundary>
      </Preview>
    </Wrapper>
  )
}
