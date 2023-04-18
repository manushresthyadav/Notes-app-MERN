import React from 'react'
import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom'
import { Badge, Button, Card } from 'react-bootstrap'
import Notes from '../../assets/Notes'

const MyNotes = () => {
  const deleteNote=(id)=>{
    // window.confirm will give a dialog box with OK and cancel
    if(window.confirm('Are you sure you want to delete this note')){

    }
    else{
      // user clicked cancel 
      // do nothing 
    }
  }
  return (
    <MainScreen title='Welcome back user'>
        <Link to='/createnote'>
        <Button style={{marginLeft:10,marginBottom:6}} size='lg'>
            Create a new note
        </Button>
        </Link>
        {
          Notes.map((item)=>{
         return(
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
              }}>{item.title}</span>
                 <div>
                   <Button href={`/notes/${item.id}`}>Edit</Button>
                    <Button variant='danger' className='ml-2 mr-2' onClick={()=>deleteNote(item.id)}>Delete</Button>
                </div>
              </Card.Header>
                <Card.Body>
                <h4><Badge bg='success'>Category-{item.category}</Badge></h4>
                  <blockquote className="blockquote mb-0">
                  <p>
                {' '}{item.content}{' '}
                </p>
                <footer className="blockquote-footer">
                  Created on date-
                </footer>
                </blockquote>
                 </Card.Body>
          </Card>
         )
          })
        }
    </MainScreen>
  )
}

export default MyNotes