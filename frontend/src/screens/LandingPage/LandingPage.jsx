import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import '../LandingPage/LandingPage.css'
const LandingPage = () => {
  return (
    <div className='main'>
        <Container>
          <Row>
            <div className='intro-text'>
              <div>
                <h1 className='title'>Welcolme to Note Zipper</h1>
                <p className='subtitle'>One safe place for all your notes</p>
              </div>
              <div className='buttonContainer'>
              <a href="/login">
                <Button className='landingButton' size='lg'>Login</Button>
              </a>
              <a href="/register">
                <Button className='landingButton' size='lg' variant='outline-primary'>Signup</Button>
              </a>
              </div>

            </div>
          </Row>
        </Container>
    </div>
  )
}

export default LandingPage