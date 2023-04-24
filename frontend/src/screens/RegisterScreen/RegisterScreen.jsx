import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import ErrorMessage from '../../components/ErrorMessage'
import Loading from '../../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../actions/UserActions'
import { useNavigate } from 'react-router-dom'

const RegisterScreen = () => {
  const [email,setEmail]=useState('')
  const [name,setName]=useState('')
  const [pic,setPic]=useState('https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg')
    const [password,setPassword]=useState('')
    const [confirmPass,setConfirmPass]=useState('')
    const [message,setMessage]=useState(null)
    const [picMessage,setPicMessage]=useState(null)
   const dispatch=useDispatch()
   const userRegister=useSelector(state=>state.userRegister)
   const {loading,error,userInfo}=userRegister 
    const navigate=useNavigate()
    useEffect(()=>{
      if(userInfo){
        navigate('/mynotes')
      }
    },[userInfo])

    const submitHandler=async(e)=>{
      e.preventDefault()
      if(password!==confirmPass){
        setMessage('Passwords do not match!')
      }
      else{
         dispatch(register(name,email,password,pic))
      }
    }
    const postDetails=(pics)=>{
      if(!pics){
        return setPicMessage('Please select an image')
      }
      setPicMessage(null)
      if(pics.type==='image/jpeg' || pics.type==='image/png'){
        const data=new FormData()
        data.append('file',pics)
        data.append('upload_preset','notesapp')
        data.append('cloud_name','diw9zzhlv')
        fetch('https://api.cloudinary.com/v1_1/diw9zzhlv/image/upload',{
          method:'post',
          body:data,
        }).then((res)=>res.json())
        .then((data)=>{
          console.log(data)
          setPic(data.url.toString())
        })
        .catch((err)=>{
          console.log(err)
        })
      }else{
        return setPicMessage('Please select an image')
      }
       
    }
  return (
    <MainScreen title='REGISTER'>
      <div className='loginContainer'>
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
        {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
        {loading && <Loading/> }
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
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
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

        {picMessage && <ErrorMessage variant='danger'>{picMessage}</ErrorMessage>}
        <Form.Group controlId="pic" >
        <Form.Label>Profile picture</Form.Label>
        <Form.Control 
        
        type="file"
        onChange={(e)=>postDetails(e.target.files[0])}
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