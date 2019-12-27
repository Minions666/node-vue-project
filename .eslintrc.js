module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "standard"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'semi': [ "error", "always" ],
        "no-var": 0, // 禁用var，用let和const代替
    }
};