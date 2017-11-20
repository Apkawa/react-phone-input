import React from 'react'
import render from 'u24-common/lib/react/utils/render'
import { Helmet } from 'react-helmet'

import { setLang } from 'u24-calculator/common'

import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import pages from '../pages'

const PageRender = ({match: {params: {page}}}) => {
  const Component = pages[page]
  return (
    <Component/>
  )
}

class StyleToggle extends React.Component {
  state = {
    type: 'desktop',
    lang: 'ru',
  }

  render_desktop () {
    return (
      <Helmet>
        <link rel="stylesheet" href="https://u24.services/static/desktop/css/u24.css?r=1497006980"/>
      </Helmet>
    )
  }

  render_mobile () {
    return (
      <Helmet>
        <link rel="stylesheet" href="https://mobile-app.u24.services/js/common.css"/>
        <link rel="stylesheet" href="https://mobile-app.u24.services/css/app.css"/>
      </Helmet>
    )
  }
  render_nothing() {
    return null
  }

  render () {
    const {type} = this.state
    return (
      <div>
        {this['render_' + type]()}
        <select onChange={(e) => {
          this.setState({type: e.target.value})
        }}>
          {['desktop', 'mobile', 'nothing'].map((v) => (
            <option value={v}>{v}</option>
          ))}
        </select>
        <select onChange={(e) => {
          window.LANG = e.target.value
          this.setState({lang: e.target.value})
        }}>
          {['ru', 'en'].map((v) => (
            <option value={v}>{v}</option>
          ))}
        </select>
      </div>
    )
  }

}

const App = () => (
  <Router>
    <div>
      <StyleToggle/>
      <ul>
        {_.map(pages, (page, key) => (
          <li><Link to={`/${key}`}>{key}</Link></li>
        ))}
      </ul>
      <hr/>

      <Route path="/:page" component={PageRender}/>
    </div>
  </Router>
)

$(() => {
  render(document.getElementById('root'), App, {})
})
