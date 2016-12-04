const { test } = require('ava')
const { spy } = require('simple-spy')
const mock = require('mock-require')
const { isEqual } = require('lodash')

const getFailingStubReturn = Symbol('getFailingStubReturn')
const getFailingStub = (eslint, files) => getFailingStubReturn
const getFailingSpy = spy(getFailingStub)
mock('eslint-failing-rules', getFailingSpy)

const offStubReturn = Symbol('offStubReturn')
const offStub = rules => offStubReturn
const offSpy = spy(offStub)
mock('eslint-off-rules', offSpy)

const subject = require('.')

test.beforeEach(() => {
  getFailingSpy.reset()
  offSpy.reset()
})

test('exports a function of arity 2', t => {
  t.is(typeof subject, 'function')
  t.is(subject.length, 2)
})

test('`getFailing` is called once with provided `eslint` and `files`', t => {
  const eslint = Symbol('eslint')
  const files = Symbol('files')
  subject(eslint, files)
  t.true(isEqual(getFailingSpy.args, [[eslint, files]]))
})

test('`off` is called once with what `getFailing` returns', t => {
  subject()
  t.true(isEqual(offSpy.args, [[getFailingStubReturn]]))
})

test('returns what `off` returns', t => {
  t.is(subject(), offStubReturn)
})
