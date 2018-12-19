import React, {Component} from 'react'
import BottomMenu from './BottomMenu'
import TopMenu from './TopMenu'

export default class Practice extends Component {
  render () {
    return (
      <div>
        <TopMenu />
        <h1>Practice</h1>

        <BottomMenu />
      </div>
    )
  }
}
