# All* KeyboardEvent Keys
[![npm](https://img.shields.io/npm/v/all-keyboardevent-keys.svg)](https://npmjs.com/package/all-keyboardevent-keys) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/all-keyboardevent-keys.svg)](https://npmjs.com/package/all-keyboardevent-keys) [![npm](https://img.shields.io/npm/dt/all-keyboardevent-keys.svg)](https://npmjs.com/package/all-keyboardevent-keys)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

> Note: This library is a work in progress. Checkout [the contribution guidelines](/CONTRIBUTING.md) to see how you can help.

## Install

Add with your favorite package manager:

```sh
npm install --save all-keyboardevent-keys
# or
yarn add all-keyboardevent-keys
```

## Use

Import the default `KEY` object, then use:

```jsx
import KEY from 'all-keyboardevent-keys'
```

`KEY` is an object with nearly all available KeyboardEvent keys. You can view the [full list available here](src/index.js).

You can access word keys using dot notation:

```js
import { KEY } from 'onkey-event-manager'

KEY.Enter // 'Enter'
KEY.Tab   // 'Tab'
```

To access symbols or numbers, use bracket notation:

```js
KEY[9]    // '9'
KEY['\\'] // '\'
```

## Keyboards

Each keyboard has its own set of Keyboardevent keys. It is the goal of this project to gather all keys into a single library.

### Current

- en_US 🇺🇸

To add a keyboardevent keys for your keyboard language, please read the [contributing guide](/CONTRIBUTING.md) and make a pull request.

### Languages to add

- [ ] zh-Hans 🇨🇳
- [ ] hi 🇮🇳
- [ ] fr_FR 🇫🇷
- [ ] es_ES 🇪🇸
- [ ] en_GB 🇬🇧
- [ ] de_DE 🇩🇪

Don't see your keyboard language? [File an issue requesting it](https://github.com/SeanMcP/all-keyboardevent-keys/issues/new).

## Collaborators

- [Sean McPherson](https://github.com/seanmcp) - **author**, en_US 🇺🇸

## License

[MIT](/LICENSE)