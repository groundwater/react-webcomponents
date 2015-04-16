import React from 'react'
import html from './theme-main.html'
import {componentize} from './component.js'

componentize(html)

class Root {
  render() {
    return (
      <page-root>
        <page-header>
          <t>{this.props.title}</t>
          <m>{this.props.message}</m>
        </page-header>
        <nav-bar>hi</nav-bar>
      </page-root>
    )
  }
}

const model = {
  title   : 'Hello World',
  message : 'This is a new day!',
  data    : [[1,2],[3,4]]
}

React.render(<Root {...model} />, document.body)
