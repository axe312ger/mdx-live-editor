# forked - now w/ [rbx](https://dfee.github.io/rbx/) components

screenshot

---

# MDX Live Editor

> Extensible mdx editor to edit mdx and preview live in your browser.

* Based on [EasyMDE](https://github.com/Ionaru/easy-markdown-editor) and [MDX Runtime](https://mdxjs.com/advanced/runtime/)

[![](https://raw.githubusercontent.com/axe312ger/mdx-live-editor/master/demo.jpg)](https://axe312ger.github.io/mdx-live-editor/)

## Goals

* Live preview of MDX
* Flawless editing through good UX
* Guiding the non-technical user
* Standalone lib with embeddability to any web based system

# Development

This repository is a [monorepo](https://trunkbaseddevelopment.com/monorepos/) managed using [Lerna](https://lerna.js.org/). This means there are multiple [packages](https://github.com/axe312ger/mdx-live-editor/tree/packages) managed in this codebase, even though we publish them to NPM as separate packages.

## Requirements

* [yarn](https://yarnpkg.com/en/docs/install)

## Install dependencies
```
lerna bootstrap
```
