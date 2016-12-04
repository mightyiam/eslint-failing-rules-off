const getFailing = require('eslint-failing-rules')
const off = require('eslint-off-rules')

module.exports = (eslint, files) => off(getFailing(eslint, files))
