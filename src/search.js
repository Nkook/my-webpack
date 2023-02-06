// document.write('hhhh')

'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import logo from './images/logo.png'
import './search.less'

class Search extends React.Component {
  render() {
    return <div className='search-text'>
      Search Texthhhhhhh
      <img src={ logo } />
    </div>
  }
}

// 把search组件渲染出来，放到页面的root节点上
ReactDOM.render(
  <Search />,
  document.getElementById('root')
)
