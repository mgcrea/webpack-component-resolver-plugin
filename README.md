# Webpack Component Resolver Plugin

[![project status](https://img.shields.io/badge/status-deprecated-red.svg?style=flat)](https://github.com/mgcrea/component-webpack-resolver-plugin) [![license](https://img.shields.io/github/license/mgcrea/component-webpack-resolver-plugin.svg?style=flat)](https://tldrlegal.com/license/mit-license) [![build status](http://img.shields.io/travis/mgcrea/component-webpack-resolver-plugin/master.svg?style=flat)](http://travis-ci.org/mgcrea/component-webpack-resolver-plugin) [![dependencies status](https://img.shields.io/david/mgcrea/component-webpack-resolver-plugin.svg?style=flat)](https://david-dm.org/mgcrea/component-webpack-resolver-plugin) [![devDependencies status](https://img.shields.io/david/dev/mgcrea/component-webpack-resolver-plugin.svg?style=flat)](https://david-dm.org/mgcrea/component-webpack-resolver-plugin#info=devDependencies) [![coverage status](http://img.shields.io/codeclimate/coverage/github/mgcrea/component-webpack-resolver-plugin.svg?style=flat)](https://codeclimate.com/github/mgcrea/component-webpack-resolver-plugin) [![climate status](https://img.shields.io/codeclimate/github/mgcrea/component-webpack-resolver-plugin.svg?style=flat)](https://codeclimate.com/github/mgcrea/component-webpack-resolver-plugin)

Webpack2 plugin to resolve components based on their dirname when an index file is not present.

Let you drop `index.js` files when you only want to export one file/component:

## Deprecation notice

This plugin has been deprecated and will no longer be maintained, the prefered way is to use the [babel-plugin-component-resolver](https://github.com/mgcrea/babel-plugin-component-resolver) to achieve the same result.

## Usage

When you require a folder:

```js
import BarComponent from './BarComponent';
```

You usually have to use an `index.js` file as an export proxy:

```
├── BarComponent
│   ├── BarComponent.js
│   └── index.js
```

With this plugin, you can clean up the structure and have working directory imports:

```
├── BarComponent
│   └── BarComponent.js
```

### Quickstart

```
npm i --save-dev component-webpack-resolver-plugin
```

1.  You can use the raw plugin

    ```js
    import ComponentResolverPlugin from 'component-webpack-resolver-plugin';
    // or // const ComponentResolverPlugin = require('component-webpack-resolver-plugin').default;

    resolve: {
      plugins: [new ComponentResolverPlugin('existing-directory', 'undescribed-raw-file')];
    }
    ```

1.  Or the provided factory function

    ```js
    import {factory as componentResolverPluginFactory} from 'component-webpack-resolver-plugin';
    // or // const componentResolverPluginFactory = require('component-webpack-resolver-plugin').factory;

    resolve: {
      plugins: [componentResolverPluginFactory()];
    }
    ```

### Available scripts

| **Script**    | **Description**                |
| ------------- | ------------------------------ |
| start         | Alias of test:watch            |
| test          | Run mocha unit tests           |
| test:watch    | Run and watch mocha unit tests |
| lint          | Run eslint static tests        |
| compile       | Compile the library            |
| compile:watch | Compile and watch the library  |

## Authors

**Olivier Louvignes**

- http://olouv.com
- http://github.com/mgcrea

## License

```
The MIT License

Copyright (c) 2016 Olivier Louvignes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
