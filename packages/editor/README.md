# MDX live editor - editor

## Usage

```js
import editor from '@mdx-live/editor'
import Grid from './mdx/Grid'

const config = {
  // Your custom MDX components
  components: [
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
  ],

  // Overwrite markdown elements
  replacements: {
    h1: ({ children, ...props }) => (
      <h1 style={{ color: 'tomato' }} {...props}>
        {children}
      </h1>
    )
  },
  easymde: {
    // See https://github.com/Ionaru/easy-markdown-editor#configuration for available options
  }
}

const mdxLive = editor(config)
```

## configuration

By default, the first found `<textarea />` will be used to inject the editor. See [easyMDE config](#config-easymde) if you want to embed it in a specific one.

### `config.components`

Your custom mdx components. Components configuration structure:

```js
{
  // JSX tagname for editor embedding
  tagname: 'Grid',

  // Actual component to render
  component: Grid,

  // Title for toolbar
  title: 'Grid',

   // Description for help
  description: 'Display content next to each other',

  // Icon for toolbar
  icon: 'columns',

  // Demo code snippet for help
  demo: `<Grid>
  <img src="https://source.unsplash.com/weekly?water" alt="" />
  <img src="https://source.unsplash.com/weekly?nature" alt="" />
  <img src="https://source.unsplash.com/weekly?air" alt="" />
</Grid>`
    }
```

### `config.replacements`

Replace default markdown components with your own. Config see [MDX runtime](https://mdxjs.com/advanced/runtime)

### `config.easymde`

Config see [easyMDE](https://github.com/Ionaru/easy-markdown-editor#configuration)

#### Define textarea to inject the editor

Pass a reference to your textarea via `config.easymde.element`

```html
<textarea id="editor" />
```

```js
const textarea = document.getElementById('editor')

const mdxLive = editor({ easymde: { element: textarea } })
```
