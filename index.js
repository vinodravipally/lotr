import fetch from 'node-fetch';

export function getBooks(){
  // open API no authorization needed
  fetch('https://the-one-api.dev/v2/book')
    .then((response) => response.text())
    .then((books) => {
        return books;
    }).catch((error) => {
        throw new TypeError(error);
    });
};

export function getBook(book_id){
  // call https://the-one-api.dev/v2/book/{id}
  // set authorization header with the token
  const url = 'https://the-one-api.dev/v2/book/'+book_id;
  fetch(url, {
    headers: {
        "Authorization": "Bearer AxoX8sb7aJLhtwQd1Nbn",
    },
  }).then((response) => response.json())
    .then(book => {
        return book;
    }).catch((error) => {
        throw new TypeError(error);
    });
};

export function getBookChapters(book_id){
  // call https://the-one-api.dev/v2/book/{id}/chapter
  // set authorization header with the token
  const url = 'https://the-one-api.dev/v2/book/'+book_id+'chapter';
  fetch(url, {
    headers: {
        "Authorization": "Bearer AxoX8sb7aJLhtwQd1Nbn",
    },
  }).then((response) => response.json())
    .then(bookChapters => {
        return bookChapters;
    }).catch((error) => {
        throw new TypeError(error);
    });
};

export function getChapters(){
  // call https://the-one-api.dev/v2/chapter
  // set authorization header with the token
  const url = 'https://the-one-api.dev/v2/chapter';
  fetch(url, {
    headers: {
        "Authorization": "Bearer AxoX8sb7aJLhtwQd1Nbn",
    },
  }).then((response) => response.json())
    .then(chapters => {
        return chapters;
    }).catch((error) => {
        throw new TypeError(error);
    });
};

export function getChapter(chatper_id){
  // call https://the-one-api.dev/v2/chapter/{id}
  // set authorization header with the token
  const url = 'https://the-one-api.dev/v2/chapter/'+chatper_id;
  fetch(url, {
    headers: {
        "Authorization": "Bearer AxoX8sb7aJLhtwQd1Nbn",
    },
  }).then((response) => response.json())
    .then(chapter => {
        return chapter;
    }).catch((error) => {
        throw new TypeError(error);
    });
};

export function getMovies(){
  // call https://the-one-api.dev/v2/movie
  // set authorization header with the token
  const url = 'https://the-one-api.dev/v2/movie';
  fetch(url, {
    headers: {
        "Authorization": "Bearer AxoX8sb7aJLhtwQd1Nbn",
    },
  }).then((response) => response.json())
    .then(movies => {
        return movies;
    }).catch((error) => {
        throw new TypeError(error);
    });
};

export function getMovie(movie_id){
  // call https://the-one-api.dev/v2/movie/{id}
  // set authorization header with the token
  const url = 'https://the-one-api.dev/v2/movie/'+ movie_id;
  fetch(url, {
    headers: {
        "Authorization": "Bearer AxoX8sb7aJLhtwQd1Nbn",
    },
  }).then((response) => response.json())
    .then(movie => {
        return movie;
    }).catch((error) => {
        throw new TypeError(error);
    });
};

export function getCharacters(){
  // call https://the-one-api.dev/v2/character
  // set authorization header with the token
  const url = 'https://the-one-api.dev/v2/character';
  fetch(url, {
    headers: {
        "Authorization": "Bearer AxoX8sb7aJLhtwQd1Nbn",
    },
  }).then((response) => response.json())
    .then(characters => {
        return characters;
    }).catch((error) => {
        throw new TypeError(error);
    });
};

export function getCharacter(character_id){
  // call https://the-one-api.dev/v2/character/{id}
  // set authorization header with the token
  const url = 'https://the-one-api.dev/v2/character/'+ character_id;
  fetch(url, {
    headers: {
        "Authorization": "Bearer AxoX8sb7aJLhtwQd1Nbn",
    },
  }).then((response) => response.json())
    .then(character => {
        return character;
    }).catch((error) => {
        throw new TypeError(error);
    });
};

export function getQuotes(){
  // call https://the-one-api.dev/v2/quote
  // set authorization header with the token
  const url = 'https://the-one-api.dev/v2/quote';
  fetch(url, {
    headers: {
        "Authorization": "Bearer AxoX8sb7aJLhtwQd1Nbn",
    },
  }).then((response) => response.json())
    .then(quotes => {
        return quotes;
    }).catch((error) => {
        throw new TypeError(error);
    });
};

export function getQuote(quote_id){
  // call https://the-one-api.dev/v2/quote/{id}
  // set authorization header with the token
  const url = 'https://the-one-api.dev/v2/quote/'+ quote_id;
  fetch(url, {
    headers: {
        "Authorization": "Bearer AxoX8sb7aJLhtwQd1Nbn",
    },
  }).then((response) => response.json())
    .then(quote => {
        return quote;
    }).catch((error) => {
        throw new TypeError(error);
    });
};

export function getCharacterQuotes(character_id){
  // call https://the-one-api.dev/v2/character/{id}/quote
  // set authorization header with the token
  const url = 'https://the-one-api.dev/v2/character/'+ character_id + '/quote';
  fetch(url, {
    headers: {
        "Authorization": "Bearer AxoX8sb7aJLhtwQd1Nbn",
    },
  }).then((response) => response.json())
    .then(characterQuotes => {
        return characterQuotes;
    }).catch((error) => {
        throw new TypeError(error);
    });
};

export function getMovieQuotes(movie_id){
  // call https://the-one-api.dev/v2/movie/{id}/quote
  // set authorization header with the token
  const url = 'https://the-one-api.dev/v2/movie/'+ movie_id + '/quote';
  fetch(url, {
    headers: {
        "Authorization": "Bearer AxoX8sb7aJLhtwQd1Nbn",
    },
  }).then((response) => response.json())
    .then(movieQuotes => {
        return movieQuotes;
    }).catch((error) => {
        throw new TypeError(error);
    });
};
