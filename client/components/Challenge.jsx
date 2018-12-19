import React, {Component} from 'react'
import BottomMenu from './BottomMenu'
import TopMenu from './TopMenu'

export default class Challenge extends Component {
  render () {
    return (
      <div>
        <TopMenu />
        <h1>Challenge</h1>

        <BottomMenu />
      </div>
    )
  }
}
