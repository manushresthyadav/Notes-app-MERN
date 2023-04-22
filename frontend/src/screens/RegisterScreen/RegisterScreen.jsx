import React, { useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import ErrorMessage from '../../components/ErrorMessage'
import Loading from '../../components/Loading'

const RegisterScreen = () => {
  const [email,setEmail]=useState('')
  const [name,setName]=useState('')
  const [pic,setPic]=useState('https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg')
    const [password,setPassword]=useState('')
    const [confirmPass,setConfirmPass]=useState('')
    const [message,setMessage]=useState(null)
    const [picMessage,setPicMessage]=useState(null)
    const [err,setErr]=useState(false)
    const[loading,setLoading]=useState(false)
    const submitHandler=async(e)=>{
      e.preventDefault()
      if(password!=confirmPass){
        setMessage('Passwords do not match!')
      }
      else{
        setMessage(null)
        try{
            const config={
              headers:{
                "Content-type":"application/json"
              }
            }
            setLoading(true)
            const {data}=await axios.post('http://localhost:5000/api/users',{name,email,pic,password},config)
            console.log(data)
            setLoading(false)
            localStorage.setItem('userInfo',JSON.stringify(data))
        }
        catch(error){
            setErr(error.response.data.message)
        }
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
        {err && <ErrorMessage variant='danger'>{err}</ErrorMessage>}
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