import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Container, Menu} from 'semantic-ui-react'

export default class TopMenu extends Component {
  render () {
    return (
      <Menu borderless className='ui teal two item inverted menu' color='green' fixed='top' inverted>
        <Container>
          <Menu.Item as={Link} to='/' className='active item'>NZ Learner Licence App</Menu.Item>
          <Menu.Item as={Link} to='/contact' className='item'>Contact</Menu.Item>
        </Container>
      </Menu>
    )
  }
}
