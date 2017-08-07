[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

# ESLint-Config-HEDCo


ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code and the `eslint-config-hedco` has the customized rules based on it. In many ways, it is similar to JSLint and JSHint with a few exceptions:

### Installation

If you want to use it, follow the [eslint](https://github.com/eslint/eslint) installation sequence first and then you can do so using npm:

```
$ npm install eslint-config-hedco --save
```


## Configuration

You'll have a `.eslintrc` or `.eslintrc.js` file in your directory. In it, you must put the `extends:'hedco'` in the JSON where you'll see some rules configured like this:

```json
{
    "extends": "hedco",
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

The names `"semi"` and `"quotes"` are the names of [rules](http://eslint.org/docs/rules) in ESLint. The first value is the error level of the rule and can be one of these values:

* `"off"` or `0` - turn the rule off
* `"warn"` or `1` - turn the rule on as a warning (doesn't affect exit code)
* `"error"` or `2` - turn the rule on as an error (exit code will be 1)

The three error levels allow you fine-grained control over how ESLint applies rules (for more configuration options and details, see the [configuration docs](http://eslint.org/docs/user-guide/configuring)).

[npm-image]: https://img.shields.io/npm/v/eslint-config-hedco.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/eslint-config-hedco
[downloads-image]:https://img.shields.io/npm/dm/eslint-config-hedco.svg?style=flat-square
[downloads-url]: https://www.npmjs.com/package/eslint-config-hedco
