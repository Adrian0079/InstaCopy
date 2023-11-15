import { AddCircle, AddCircleOutline, ControlPoint, Explore, Favorite, Home, Inbox, MapsUgc, OndemandVideo, Search } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, createTheme } from '@mui/material'
import React from 'react'
import instap from '../images/instap.png'
import styled from 'styled-components'
import { ThemeProvider } from '@emotion/react'


const SideBar = () => {

  const theme1 = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1263,
        xl: 1536,
      },
    },
  });
  
  


  return (

    <ThemeProvider theme={theme1}>
    <Box flex={1.77} border={2}>
      <Box position="fixed">{/*Fixed*/}
      <img src={instap} alt="insta_Logo" width="100%"/>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home sx={{border:"12px"}}/>
              </ListItemIcon>
              <ListItemText primary="Inicio" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>

         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Search />
              </ListItemIcon>
              <ListItemText primary="Buscar" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>

          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Explore />
              </ListItemIcon>
              <ListItemText primary="Explorar" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>

         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <OndemandVideo />
              </ListItemIcon>
              <ListItemText primary="Reels" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>

         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MapsUgc />
              </ListItemIcon>
              <ListItemText primary="Mensajes" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>

         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Favorite />
              </ListItemIcon>
              <ListItemText primary="Notificaciones" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>

         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddCircleOutline />
              </ListItemIcon>
              <ListItemText primary="Crear" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>

          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Perfil" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>
          <Box height="23.2rem" border={0}>

          </Box>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Threads" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>

          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ControlPoint />
              </ListItemIcon>
              <ListItemText primary="Más" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>
        </List>
        </Box> {/*Fixed*/}
    </Box>
    </ThemeProvider>
  )
  }

export default SideBar