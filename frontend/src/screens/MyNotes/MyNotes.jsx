import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Link, useNavigate } from 'react-router-dom'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'

import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNotes, listNotes } from '../../actions/NotesActions'
import ErrorMessage from '../../components/ErrorMessage'
import Loading from '../../components/Loading'
// import AccordionContext from 'react-bootstrap/AccordionContext';
const MyNotes = ({search}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo}=userLogin
  const noteList=useSelector(state=>state.noteList)
  const {loading,error,notes}=noteList
  const noteUpdate=useSelector(state=>state.noteUpdate)
  const {success:successUpdate}=noteUpdate
  const noteCreate=useSelector(state=>state.noteCreate)
  const {success:successCreate}=noteCreate
  const noteDelete=useSelector(state=>state.noteDelete)
  const {loading:loadingDelete,error:errorDelete,success:successDelete}=noteDelete
  // const [notes,setNotes]=useState([]);
  const deleteNote=(id)=>{
    // window.confirm will give a dialog box with OK and cancel
    if(window.confirm('Are you sure you want to delete this note')){
        dispatch(deleteNotes(id))
    }
  }
  // console.log(notes)
  useEffect(()=>{
    dispatch(listNotes())
    if(!userInfo){
      navigate('/')
    }
  },[successCreate,userInfo,successDelete,successUpdate,dispatch])
  return (
    <MainScreen title={`Welcome back ${userInfo && userInfo.name}`}>
        <Link to='/createNote'>
        <Button style={{marginLeft:10,marginBottom:6}} size='lg'>
            Create a new note
        </Button>
        </Link>
        {errorDelete && <ErrorMessage variant='danger'>{errorDelete}</ErrorMessage>}
        {loadingDelete && <Loading/>}
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
        {loading && <Loading/>}
        { notes?.reverse().filter(filteredNote=>(filteredNote.title.toLowerCase().includes(search.toLowerCase()))).map((item)=>{
         return(
          <Accordion defaultActiveKey={['0']} key={item.id}>
            <Accordion.Item eventKey='0'>
         <Card style={{margin:10}} key={item.id}>
            <Card.Header style={{display:"flex"}}>
              <span
              style={{
                color:'black',
                textDecoration:'none',
                flex:'1',
                cursor:'pointer',
                alignSelf:'center',
                fontSize:18,
              }}>
               {/* {item.title} */}
               <Accordion.Button as={Card.Text} variant='link'>{item.title}</Accordion.Button>
                {/* <CustomToggle eventKey='0'>{item.title}</CustomToggle> */}
              </span>
                 <div>
                
                   <Button href={`/note/${item._id}`}>Edit</Button>
                    <Button variant='danger' className='ml-2 mr-2' onClick={()=>deleteNote(item._id)}>Delete</Button>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey='0'> 
                <Card.Body>
                <h4><Badge bg='success' text='light'>Category-{item.category}</Badge></h4>
                  <blockquote className="blockquote mb-0">
                  <p>
                {' '}{item.content}{' '}
                </p>
                <footer className="blockquote-footer">
                  Created on {" "}
                  <cite title='source-title'>
                    {item.createdAt.substring(0,10)}
                  </cite>
                </footer>
                </blockquote>
                 </Card.Body>
              </Accordion.Collapse>
          </Card>
          </Accordion.Item>
          </Accordion>
         )
          })
        }
    </MainScreen>
  )
}

export default MyNotes