import React from 'react'
import { Header, Button, Popup, Grid } from 'semantic-ui-react'

const PopupAnswers = (props) => (
  <Popup trigger={<Button>Answer</Button>} flowing hoverable>
    <Grid centered >
      <Grid.Column textAlign='center'>
        <Header as='h4'>{props.Answer}</Header>
      </Grid.Column>
    </Grid>
  </Popup>
)

export default PopupAnswers
