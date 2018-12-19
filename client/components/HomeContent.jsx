import React from 'react'
import {Card} from 'semantic-ui-react'

const items = [
  {
    image: '/images/GWay3.png',
    header: 'Practice',
    description: 'Increase your knowledge of the questions you will be asked with these flashcards.',
    meta: 'Practice makes perfect'
  },
  {
    image: '/images/GWay4.png',
    header: 'Test',
    description: '32 or more is a pass! If you are my student aim for 35/35 then get in touch with me to organise taking you to sit the test',
    meta: 'Actual Tests'
  },
  {
    image: '/images/GWay5.png',
    header: 'Challenge',
    description: 'Challenge your classmates or parents by logging into the MyDrive Quiz',
    meta: 'kahoot'
  }
]

const HomeContent = () => <Card.Group centered items={items} />

export default HomeContent
