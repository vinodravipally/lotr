# Design Strategy

Built the SDK using vanilla JS, tried to avoid any dependencies but had to use node-fetch

Built the npm package as a module so I can write and export each independent method

Exposed all the methods provided in the [the-one-api](https://the-one-api.dev/)

## Pending Tasks

- Build test suite
- Code documentation
- Add pagination
- Add Filtering
- Add Authentication and Authorization so dynamic tokens can be generated for the-one-api (the current SDK doesn't scale)
- Build a URL constants file to decouple http request specifications from the code
- Refactor and code clean up
