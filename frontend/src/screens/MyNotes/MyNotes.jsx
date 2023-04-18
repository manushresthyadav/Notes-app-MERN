import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'

import axios from 'axios'
// import AccordionContext from 'react-bootstrap/AccordionContext';
const MyNotes = () => {
  const [notes,setNotes]=useState([]);
  const deleteNote=(id)=>{
    // window.confirm will give a dialog box with OK and cancel
    if(window.confirm('Are you sure you want to delete this note')){

    }
    else{
      // user clicked cancel 
      // do nothing 
    }
  }
  const fetchNotes=async()=>{
    const {data}=await axios.get('http://localhost:5000/api/notes')
    // console.log(data)
    setNotes(data);
  }
  console.log(notes)
  useEffect(()=>{
    fetchNotes()
  },[])
  return (
    <MainScreen title='Welcome back user'>
        <Link to='/createnote'>
        <Button style={{marginLeft:10,marginBottom:6}} size='lg'>
            Create a new note
        </Button>
        </Link>
        {
          notes.map((item)=>{
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
                   <Button href={`/notes/${item.id}`}>Edit</Button>
                    <Button variant='danger' className='ml-2 mr-2' onClick={()=>deleteNote(item.id)}>Delete</Button>
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
                  Created on date-
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