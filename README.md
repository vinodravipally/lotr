# lotr
![npm (scoped)](https://img.shields.io/npm/v/@vinodreddyr/lotr)

This SDK allows seamless integration with lotr APIs  assisting in building cool applications with "Lord of the Rings" data that use JavaScript, providing an easy interface to communicate with [The One API](https://the-one-api.dev/).

## Requirements

To use this SDK, you will need:

- [Node.js **v6.3.0 or above**](https://nodejs.org/)

Node installation will include [NPM](https://www.npmjs.com/), which is
responsible for dependency management.

## Installation

### Node.js

`npm i @vinodreddyr/lotr`

`import { getBooks } from '@vinodreddyr/lotr/index.js'`

## SDK Versioning

This SDK uses [Semantic Versioning](http://semver.org/)

It has three main parts, each corresponding to importance of a release: “MAJOR.MINOR.PATCH”.

example: `v1.0.0` `v1.2.0` `v2.0.0`

## Requests

Use the provided methods from the SDK to fetch LOTR data. Use `.then()`/`.catch()` to handle successful and failed requests.

```js
lotr.getBooks()
  .then(data => {
    // Response handling
  })
  .catch(error => {
    // Error handling
  });
```
## Methods

### Book

- `getBooks()`
- `getBook(book_id)`
- `getBookChapters(book_id)`
- `getChapters()`
- `getChapter(chatper_id)`

### Movie

- `getMovies()`
- `getMovie(movie_id)`

### Character

- `getCharacters()`
- `getCharacter(character_id)`

### Quote

- `getQuotes()`
- `getQuote(quote_id)`
- `getCharacterQuotes(character_id)`
- `getMovieQuotes(movie_id)`
