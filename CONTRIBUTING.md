# Contributing

Thanks for being willing to contribute! It's our goal to make contributing to this project as easy and transparent as possible.

**Working on your first Pull Request?** You can learn how from this **free** series
[How to Contribute to an Open Source Project on GitHub][egghead].

## Project setup

1. Fork and clone the repo
2. `$ npm install` to install dependencies
3. Create a branch for your PR

## Adding a keyboard

Create a new file in the `src/languages` directory for your keyboard language. The system follows [IETF's language tags](https://tools.ietf.org/html/rfc5646) but replacing the standard hyphen for an underscore: `en-US => en_US`.

The system for capturing your language's keyboardevent keys is up to you, but make sure to **default export an array of strings** from your document. You can look at [`en_US`](/src/languages/en_US.js) for an example.

After you have created your new language file:

1. Import it in `src/index.js`
2. [Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_array_literals) your array **in `key_array`**
3. Add/move your language to the ["Current"](/README.md#current) section of the README
4. Add your name, language, and flag to the ["Collaborators"](/README.md#collaborators) section of the README
5. Submit a pull request

## Issues

This project uses GitHub issues to track public bugs. Please ensure your description is clear and has sufficient instructions to be able to reproduce the issue.

## License

By contributing to this project, you agree that your contributions will be licensed
under the LICENSE file in the root directory of this source tree.

[egghead]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github