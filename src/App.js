import React, { useEffect } from 'react'

import EasyMDE from '@axe312/easymde'
import '@axe312/easymde/dist/easymde.min.css'
import { renderToStaticMarkup } from 'react-dom/server'
import raw from 'raw.macro'

import Renderer from './Renderer'
import './App.css'

export default function App() {
  let easymde

  const defaultMarkdownValue = raw('./default.md')

  useEffect(() => {
    easymde = new EasyMDE({
      autoDownloadFontAwesome: true,
      forceSync: true,
      autofocus: true,
      indentWithTabs: false,
      spellChecker: false,
      previewRender: plainText => {
        try {
          return renderToStaticMarkup(<Renderer>{plainText}</Renderer>)
        } catch (err) {
          console.error(err)
          return renderToStaticMarkup(
            <>
              <h1>{err.name}</h1>
              <p>{err.message}</p>
            </>
          )
        }
      },
      toolbar: [
        'heading-1',
        'heading-2',
        'heading-3',
        '|',
        'bold',
        'italic',
        'link',
        'image',
        '|',
        'quote',
        'unordered-list',
        'ordered-list',
        '|',
        'preview',
        'side-by-side',
        'fullscreen'
      ]
    })
    easymde.toggleSideBySide()
  }, [easymde])

  return (
    <div id="app">
      <textarea id="editor" defaultValue={defaultMarkdownValue} />
    </div>
  )
}
