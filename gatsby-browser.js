const a11y = require('react-a11y')
const React = require('react')
const ReactDOM = require('react-dom')

exports.onClientEntry = function onClientEntry (_, pluginOptions) {
  if (process.env.NODE_ENV === 'development') {
    a11y(React, Object.assign(pluginOptions, { ReactDOM }))
  }
}
