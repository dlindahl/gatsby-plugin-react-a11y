import a11y from 'react-a11y'
import React from 'react'
import ReactDOM from 'react-dom'

exports.onClientEntry = (_, pluginOptions) => {
  if (process.env.NODE_ENV === 'development') {
    a11y(React, Object.assign(pluginOptions, { ReactDOM }))
  }
}
