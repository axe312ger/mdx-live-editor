


---
## 2018-04-19

### missing fontAwesome icons 

problem: demo assigns `grip-horizontal` to Grid toolbar button. It doesn't show up b/c it's from fontawesome v5.

solution: 
- use different icon (`th-large`) from fontawesome v4
- switch cdn to use.fontawesom.com for v5. but eww they are getting crazy commercial.

in `node_modules/@axe312/easymde/src/js/easymde.js`

```
/**
 * Interface of EasyMDE.
 */
function EasyMDE(options) {
    // Handle options parameter
    options = options || {};

    // Used later to refer to it"s parent
    options.parent = this;

    // Check if Font Awesome needs to be auto downloaded
    var autoDownloadFA = true;

    var fontAwesomeURL = 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
    var fontAwesomeURLpattern = '//use.fontawesome.com/releases/'

    if (options.autoDownloadFontAwesome === false) {
        autoDownloadFA = false;
    }

    if (options.autoDownloadFontAwesome !== true) {
        var styleSheets = document.styleSheets;
        for (var i = 0; i < styleSheets.length; i++) {
            if (!styleSheets[i].href)
                continue;

            // if (styleSheets[i].href.indexOf('//maxcdn.bootstrapcdn.com/font-awesome/') > -1) {
            if (styleSheets[i].href.indexOf(fontAwesomeURLpattern) > -1) {
                autoDownloadFA = false;
            }
        }
    }

    if (autoDownloadFA) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        // link.href = 'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css';
        link.href = fontAwesomeURL;
        document.getElementsByTagName('head')[0].appendChild(link);
    }

```

### yarn can't resolve forked packages that haven't been published

https://github.com/axe312ger/mdx-live-editor/pull/2

problem: `mdx-live-editor` requires forks of npm packages that are not published on npm or yarn registries. Perhaps you have them `yarn link`ed on your dev box? 

```bash
# master was at f3da3ff
$ git clone mdx-live-editor
$ cd mdx-live-editor
$ yarn
yarn install v1.15.2
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
error An unexpected error occurred: "https://registry.yarnpkg.com/@axe312/babel-plugin-inline-import/-/babel-plugin-inline-import-4.0.0.tgz: Request failed \"404 Not Found\"".
# same thing happens w/ '@axe312/easymde'
```

The two commits show alternative approaches to fixing the error:
- use forked package [github url in package.json](https://yarnpkg.com/en/docs/cli/add#toc-adding-dependencies): this fetches the up-to-date fork source code from your repos
- use [yarn alias](https://yarnpkg.com/en/docs/cli/add#toc-yarn-add-alias) to to rename original packages to name of forked packages: this fetches the original packages from npm/yarn registry, but allows the `mdx-live-editor` source code to refer to them in imports as if they were the forked version. Not good approach if you plan on modifying your forks.

either way, both solutions allow `git clone`ing then `yarn` installing to work successfully while retaining the alternate names of the forked packages (i.e. `import EasyMDE from '@axe312/easymde'`). If you ever publish your forks, you would just need to change the `package.json`s in this repo.

I really like this project - thanks for publishing it! I am working on something kinda similar (and also saw the `[blocks/blocks](https://github.com/blocks/blocks)` project announcement, so I will see you around and perhaps even have some contributions someday.