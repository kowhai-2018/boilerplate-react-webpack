import React from 'react'
import TopMenu from './TopMenu'
import BottomMenu from './BottomMenu'
import {Segment} from '../../node_modules/semantic-ui-react'

const Contact = () => (
  <React.Fragment>
    <TopMenu />
    <h1>Contact</h1>
    <Segment.Group>
      <Segment inverted color='teal'><h2>Phone : 0272141322</h2></Segment>
      <Segment inverted color='teal'><h2>email : kamodrivingschool@outlook.com</h2></Segment>
    </Segment.Group>
    <BottomMenu />
  </React.Fragment>
)
export default Contact
