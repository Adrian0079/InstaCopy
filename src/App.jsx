import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, Stack, makeStyles } from '@mui/material'
import styled from 'styled-components'
import SideBar from './components/SideBar'
import Feed  from './components/Feed'
import RightBar from './components/RightBar'


const BtFollow = styled(Button)({
    
    height: "30px",
    width:"61px",
    color: "#149df7", 
    backgroundColor: 'white',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#00376b',
    }
})


function App() {  


  return (
    <>
      <Box border={5}>
        <Stack border={3} direction='row' justifyContent="space-evenly">
        <SideBar />
        <Feed/>
        <RightBar />
        </Stack>
      </Box>
      
    </>
  )
}

export default App
