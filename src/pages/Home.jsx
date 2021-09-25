import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Card, Button } from '../components/styled'

const INFO_CARDS = [
  {
    key: 'getstarted',
    name: 'Getting started',
    description: 'Getting started with this application',
    button: 'Home'
  },
  {
    key: 'example1',
    name: 'Example action',
    description: 'This is another action that can be done',
    button: 'Action 1'
  }
]
const Home = () => (
  <Container>
    <Row>
      {INFO_CARDS.map(info =>
        <Col key={info.key} sm={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>{info.name}</Card.Title>
              <Card.Text>{info.description}</Card.Text>
              <Button>{info.button}</Button>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  </Container>
)

export default Home
