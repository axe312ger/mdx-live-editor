import React from 'react'

import EasyMDE from '@axe312/easymde'
import { renderToStaticMarkup } from 'react-dom/server'
import MDX from '@mdx-js/runtime'

import Toolbar from './Toolbar'

export default function editor({ components = [], replacements = {}, toolbar = null, easymde: easymdeConfig = {} }) {
  const scope = components.reduce(
    (scope, { tagname, component }) => ({
      ...scope,
      [tagname]: component
    }),
    {}
  )

  const config = {
    ...{
      autoDownloadFontAwesome: true,
    forceSync: true,
    autofocus: true,
    indentWithTabs: false,
    spellChecker: false,
    },
    ...easymdeConfig
  }

  const easymde = new EasyMDE({
    ...config,
    previewRender: plainText => {
      try {
        return renderToStaticMarkup(
          <MDX components={replacements} scope={scope}>
            {plainText}
          </MDX>
        )
      } catch (err) {
        console.error(err)
        return renderToStaticMarkup(
          <div>
            <h1>{err.name}</h1>
            <p>{err.message}</p>
          </div>
        )
      }
    },
    toolbar: Toolbar({ components, toolbar })
  })
  easymde.toggleSideBySide()

  return easymde
}
