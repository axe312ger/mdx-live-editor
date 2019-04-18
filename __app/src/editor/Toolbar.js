const tagsToReplace = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
}

function encode(str) {
  return str.replace(/[&<>]/g, tag => tagsToReplace[tag] || tag)
}

export default function toolbar({ toolbar = null, components = [] }) {
  const mdxToolbar = components.map(({ title, icon, tagname }) => ({
    name: 'custom',
    action: function customFunction(editor) {
      const selection = editor.codemirror.doc.getSelection()
      editor.codemirror.doc.replaceSelection(
        `<${tagname}>\n\n${selection}\n\n</${tagname}>`
      )
    },
    className: `fa fa-${icon}`,
    title
  }))
  const mdxHelpButton = {
    name: 'custom',
    action: function customFunction(editor) {
      const helpWindow = document.querySelector('.editor-preview-active-side')

      if (!helpWindow) {
        return
      }
        helpWindow.innerHTML = components
          .map(
            ({ title, description, demo }) =>
              `<h1>${title}</h1><p>${description}</p><pre><code>${encode(
                demo
              )}</code></pre>`
          )
          .join('<hr/>')
    },
    className: `fa fa-question-circle`,
    title: 'Help'
  }

  return [
    ...(Array.isArray(toolbar)
      ? toolbar
      : [
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
          'fullscreen',
          '|'
        ]),
    ...mdxToolbar,
    mdxHelpButton
  ]
}
