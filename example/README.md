# Nil example app

This folder contains an example usage of `@jacarma/nil`

_See also https://github.com/jacarma/nil_

## Quick Start

_Note:_ You need to build the parent project before running this sample app

Install dependencies

```bash
npm install
```

Start website

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000)

## Usage

The `public/index.html` file contains a `<script src='bundle.js'>` tag, which means we need to create `public/bundle.js`. The `rollup.config.js` file tells Rollup how to create this bundle, starting with `src/main.js` and including all its dependencies, including [@jacarma/nil](https://github.com/jacarma/nil).

`npm run build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`npm start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:5000](http://localhost:5000).

`npm run watch` will continually rebuild the application as your source files change.

`npm run dev` will run `npm start` and `npm run watch` in parallel.

## License

[MIT](LICENSE).
