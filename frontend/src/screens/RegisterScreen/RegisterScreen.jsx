import React from 'react'
import MainScreen from '../../components/MainScreen'
import { Form } from 'react-bootstrap'

const RegisterScreen = () => {
  return (
    <MainScreen title='REGISTER'>
      <div className='loginContainer'>
        <Form>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter Name'/>
        </Form.Group>
        </Form>
    </div>
    </MainScreen>
  )
}

export default RegisterScreen