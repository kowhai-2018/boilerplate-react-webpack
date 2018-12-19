import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Container, Menu} from 'semantic-ui-react'

export default class BottomMenu extends Component {
  render () {
    return (
      <Menu borderless className='ui teal four item inverted menu' color='green' fixed='bottom' inverted>
        <Container>
          <Menu.Item as={Link} to='/' className='active item'>Home</Menu.Item>
          <Menu.Item as={Link} to='/practice' className='item'>Practice</Menu.Item>
          <Menu.Item as={Link} to='/test' className='item'>Test</Menu.Item>
          <Menu.Item as={Link} to='/challenge' className='item'>Challenge</Menu.Item>
        </Container>
      </Menu>
    )
  }
}
