import React, {Component} from 'react'
import BottomMenu from './BottomMenu'
import TopMenu from './TopMenu'
import FCQuestion from './FCQuestion'
import cards from '../flashcards/cards.js'

import {Divider, Button, Reveal, Grid} from '../../node_modules/semantic-ui-react'

export default class Practice extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cards: cards.cards,
      currentCard: {}
    }
  }
  componentDidMount () {
    const currentCards = this.state.cards
    this.setState({

      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard (currentCards) {
    let card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return card
  }

  updateCard () {
    const currentCards = this.state.cards
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  clickHandler = event => {
    const currentCards = this.state.cards
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render () {
    return (
      <div>
        <TopMenu />
        <h1>Practice</h1>
        <Divider />
        <Grid verticalAlign='middle' centered columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Reveal animated='small fade'>
                <Reveal.Content visible>
                  <FCQuestion image={this.state.currentCard.image} questions={this.state.currentCard.questions} />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <FCQuestion answers = {this.state.currentCard.answers} />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Button onClick={this.clickHandler}>Next Card</Button>
          </Grid.Row>
        </Grid>
        <BottomMenu />
      </div>
    )
  }
}
