# All KeyboardEvent Keys
[![npm](https://img.shields.io/npm/v/all-keyboardevent-keys.svg)](https://npmjs.com/package/all-keyboardevent-keys) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/all-keyboardevent-keys.svg)](https://npmjs.com/package/all-keyboardevent-keys) [![npm](https://img.shields.io/npm/dt/all-keyboardevent-keys.svg)](https://npmjs.com/package/all-keyboardevent-keys)

All* KeyboardEvent Keys (\* not all yet)

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

`KEY` is an object with nearly\* all available KeyboardEvent keys. You can view the [full list available here](src/index.js).

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

> \*Currently a U.S. English keyboard

## License

[MIT](/LICENSE)