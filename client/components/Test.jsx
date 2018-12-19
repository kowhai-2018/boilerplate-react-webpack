import React, {Component} from 'react'
import BottomMenu from './BottomMenu'
import TopMenu from './TopMenu'
import { Button, Header, Segment, TransitionablePortal, Container } from 'semantic-ui-react'

export default class Test extends Component {
  state = { open: false }
  
    handleClick = () => this.setState({ open: !this.state.open })
  
    handleClose = () => this.setState({ open: false })
  
    render() {
      const { open } = this.state
  
      return (
        <div>
          <TopMenu />
            <h1>Test</h1>
            <Container>
              {/* <Image src={this.props.image}/> */}
            </Container>
               <Button
                content={open ? 'Close Portal' : 'Open Portal'}
                negative={open}
                positive={!open}
                onClick={this.handleClick}
              />  
          <TransitionablePortal onClose={this.handleClose} open={open}>
            <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
              <Header>Answer</Header>
              {/* <p>{this.props.answer}</p> */}
            </Segment>
          </TransitionablePortal>
        <BottomMenu />
        </div>
      )
    }
  }
