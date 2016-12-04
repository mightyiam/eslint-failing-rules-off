[![Build Status](https://travis-ci.org/mightyiam/eslint-failing-rules-off-config.svg?branch=master)](https://travis-ci.org/mightyiam/eslint-failing-rules-off-config)
[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

# eslint-failing-rules-off-config

Returns an ESLint config with all the failing rules "off".

## Usage

### Example

```js
const { writeFileSync } = require('fs')
const offConfig = require('eslint-failing-rules-off-config')

const config = offConfig(['**/*.js'])
writeFileSync('.eslintrc.json', JSON.stringify(config))
```

### API

#### fn(eslint, files)

- `eslint`:
  What `eslint@^3` exports
- `files`:
  Same as input for [`executeOnFiles`](http://eslint.org/docs/developer-guide/nodejs-api#executeonfiles)

Checks for failing rules using [eslint-failing-rules](https://www.npmjs.com/package/eslint-failing-rules).
Returns an ESLint configuration object which has all of the failing rules set to "off".
