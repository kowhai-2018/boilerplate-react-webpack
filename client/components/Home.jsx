import React, {Component} from 'react'
import BottomMenu from './BottomMenu'
import HomeContent from './HomeContent'
import TopMenu from './TopMenu'
import {Divider} from 'semantic-ui-react'

export default class Home extends Component {
  render () {
    return (
      <div>
        <TopMenu />
        <h1>Home</h1>
        <Divider />
        <HomeContent />
        <BottomMenu />
      </div>
    )
  }
}
