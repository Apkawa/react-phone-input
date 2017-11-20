'use strict'
const _ = require('lodash')
const path = require('path')

const req = require.context('.', true, /^(.*\.(jsx$))[^.]*$/igm)
req.keys().forEach((key) => {
  req(key)
})

const pagesMap = _.fromPairs(_.map(req.keys(), (key) => [path.basename(key, '.jsx'), req(key)]))

export default pagesMap

