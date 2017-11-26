# Fast Loops

A collection of small, high-performant & immutable iteration utilities for Arrays and Objects.

<img alt="TravisCI" src="https://travis-ci.org/rofrischmann/fast-loops.svg?branch=master"> <a href="https://codeclimate.com/github/rofrischmann/fast-loops/coverage"><img alt="Test Coverage" src="https://codeclimate.com/github/rofrischmann/fast-loops/badges/coverage.svg"></a> <img alt="npm downloads" src="https://img.shields.io/npm/dm/fast-loops.svg"> <img alt="npm version" src="https://badge.fury.io/js/fast-loops.svg">

## Installation
```sh
yarn add fast-loops
```
Alternatively use `npm i --save fast-loops`.

## Why?
Because JavaScript's native "functional" APIs such as `forEach`, `reduce`, `map` and `filter` are slow. There're many different utility packages out there already, e.g. lodash. But lodash's `reduce` method itself is 4.5kb gzipped which is way too much for a simple Array/Object reduce utility.

## License
fast-loops is licensed under the [MIT License](http://opensource.org/licenses/MIT).<br>
Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).<br>
Created with ♥ by [@rofrischmann](http://rofrischmann.de).