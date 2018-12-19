import React, {Component} from 'react'
import TopMenu from './TopMenu'
import BottomMenu from './BottomMenu'

export default class Contact extends Component {
  render () {
    return (
      <div>
        <TopMenu />
        <h1>Contact</h1>
        
        <BottomMenu />
      </div>
    )
  }
}
