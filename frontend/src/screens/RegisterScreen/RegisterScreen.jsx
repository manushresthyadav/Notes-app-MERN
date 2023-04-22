import React, { useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Form } from 'react-bootstrap'

const RegisterScreen = () => {
  const [email,setEmail]=useState('')
  const [name,setName]=useState('')
  const [pic,setPic]=useState('https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg')
    const [pass,setPass]=useState('')
    const [confirmPass,setConfirmPass]=useState('')
    const [message,setMessage]=useState(null)
    const [picMessage,setPicMessage]=useState(null)
    const [err,setErr]=useState(false)
    const[loading,setLoading]=useState(false)
    const submitHandler=(e)=>{
      e.preventDefault()
    }

  return (
    <MainScreen title='REGISTER'>
      <div className='loginContainer'>
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder='Enter Name'/>
        </Form.Group>

        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Enter Email'/>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            placeholder='Enter Password'/>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            value={confirmPass}
            onChange={(e)=>setConfirmPass(e.target.value)}
            placeholder='Confirm Password'/>
        </Form.Group>


        <Form.Group controlId="pic" className=''>
        <Form.Label>Profile picture</Form.Label>
        <Form.Control 
        className=''
        type="file"
        // value={pic}
        // onChange={(e)=>setName(e.target.value)}
        id='custom-file'
        Label='upload profile picture'
        custom 
        placeholder='Select a profile picture'/>
      </Form.Group>
      <Button variant='primary' type='submit' className='mt-3'>Submit</Button>
        </Form>
    </div>
    </MainScreen>
  )
}

export default RegisterScreen