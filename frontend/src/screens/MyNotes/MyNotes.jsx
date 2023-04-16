import React from 'react'
import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const MyNotes = () => {
  return (
    <MainScreen title='Welcome back user'>
        <Link to='/createnote'>
        <Button style={{marginLeft:10,marginBottom:6}} size='lg'>
            Create a new note
        </Button>
        </Link>
    </MainScreen>
  )
}

export default MyNotes