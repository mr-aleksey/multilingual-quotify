# Multilingual Quotify

Multilingual Quotify is a TypeScript library that allows you to wrap strings or arrays of strings in language-specific quotes based on the provided locale and quote type (single or double).

## Installation

To install Multilingual Quotify, run the following command:

```sh
npm install multilingual-quotify
```

## Usage
To use Multilingual Quotify, simply import the wrapInQuotes function along with the required types:

```ts
import { wrapInQuotes } from 'multilingual-quotify';

// Wrap a single string
const wrappedString = wrapInQuotes('Hello, world!', 'en', 'double');
console.log(wrappedString); // Output: “Hello, world!”

// Wrap an array of strings
const wrappedStrings = wrapInQuotes(['Привет', 'мир'], 'ru', 'single');
console.log(wrappedStrings); // Output: ['„Привет“', '„мир“']
```

## Parameters
The wrapInQuotes function accepts the following parameters:

* `input` (string or array of strings): The string or array of strings to be wrapped in quotes.
* `locale` (Locale): The locale code, determining the language-specific quotes to be used.
* `quoteType` (QuoteType): The type of quotes to be used: 'single' or 'double'.

## Supported Locales
The following locales are supported:

* English (en)
* Russian (ru)
* French (fr)
* German (de)
* Spanish (es)
* Italian (it)
* Danish (da)
* Norwegian (no)
* Swedish (sv)
* Finnish (fi)
* Dutch (nl)
* Polish (pl)
* Hungarian (hu)
* Czech (cs)
* Slovak (sk)
* Romanian (ro)
* Turkish (tr)
* Japanese (ja)
* Chinese (zh)
* Korean (ko)
