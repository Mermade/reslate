# Slate v3 POC

![Build](https://github.com/Mermade/reslate/workflows/Build/badge.svg)

Proof-of-concept Slate v3 using [eleventy](https://www.11ty.dev/) as the static site generator.

![screenshot](https://github.com/Mermade/reslate/blob/main/docs/screenshot.jpg?raw=true)

## Features

* **Out-of-the-box syntax highlighting** for [over 200 languages](https://prismjs.com/#supported-languages), no configuration required.

## Install

Requires an LTS version of Node.js

* Clone the repository
* `npm i`

or

* Create your Node.js project (`npm init`)
* Add `reslate` as a (dev)dependency (`npm i [--save-dev] reslate`)
* `npx reslate init`

## Running

* To build: `npm run build`
* To debug: `npm run debug`
* To serve: `npm run serve` and browse to http://localhost:4567

(If installed as a dependency, use `npx reslate [build|debug|serve]`)

## TODO

* [ ] [Watch](https://www.belter.io/eleventy-sass-workflow/) scss files
* [ ] Option to use lunr server-side / across multiple files [#1006](https://github.com/slatedocs/slate/discussions/1006)
* [ ] GitHub emoji shortcuts (as in Shins), yea or nay?
* [ ] Specify additional CSS includes in header?

## Additional plugin possibilities

* https://www.11ty.dev/docs/config/#transforms-example-minify-html-output
