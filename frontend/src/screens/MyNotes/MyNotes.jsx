import React from 'react'
import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import Notes from '../../assets/Notes'

const MyNotes = () => {
  const deleteNote=()=>{}
  return (
    <MainScreen title='Welcome back user'>
        <Link to='/createnote'>
        <Button style={{marginLeft:10,marginBottom:6}} size='lg'>
            Create a new note
        </Button>
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
          </Card>
         )
          })
        }
        </Link>
    </MainScreen>
  )
}

export default MyNotes