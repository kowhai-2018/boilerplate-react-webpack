import React, {Component} from 'react'
import BottomMenu from './BottomMenu'
import TopMenu from './TopMenu'
import {Button, Segment, Container} from 'semantic-ui-react'
import PopupAnswers from './PopupAnswers'
import QuizImage from './QuizImage'
import quiz1 from '../flashcards/quiz1'

export default class Test extends Component {
  constructor (props) {
    super(props)

    this.state = {
      quiz1: quiz1.quiz1,
      currentCard: {}
    }
  }
  componentDidMount () {
    const currentCards = this.state.quiz1
    this.setState({

      quiz1: currentCards,
      currentCard: this.nextCard(currentCards)
    })
  }

  nextCard (currentCards) {
    let quiz1 = currentCards[Math.floor(Math.random() * currentCards.length)]
    return quiz1
  }

  updateCard () {
    const currentCards = this.state.quiz1
    this.setState({
      currentCard: this.nextCard(currentCards)
    })
  }

  clickHandler = event => {
    const currentCards = this.state.quiz1
    this.setState({
      currentCard: this.nextCard(currentCards)
    })
  }

  render () {
    return (
      <div>
        <TopMenu />
        <h1>Test</h1>
        <QuizImage image={this.state.currentCard.image} />
        <Segment>
        <PopupAnswers Answer = {this.state.currentCard.Answer} />
        <Button onClick={this.clickHandler}>Next Question</Button>
        </Segment>
        <BottomMenu />
      </div>
    )
  }
}
