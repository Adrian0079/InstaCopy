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
        msm:760,
        md: 900,
        lg: 1263,
        xl: 1536,
      },
    },
  });
  
  


  return (

    <ThemeProvider theme={theme1}>
    <Box border={0} sx={{ 
      flex:{xs: 0.4, sm: 0.4, md: 0.4, lg: 1.77}, 
      display:{xs:"none", sm:"none", msm:"inline-block"}
      }}>
      <Box position="fixed">{/*Fixed*/}
      <img src={instap} alt="insta_Logo" width="100%"/>
      <List>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Home sx={{
                width:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
                height:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
                
              }}/>
              </ListItemIcon>
              <ListItemText primary="Inicio" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>

         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Search sx={{
                width:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
                height:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
              }}/>
              </ListItemIcon>
              <ListItemText primary="Buscar" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }
              }/>
            </ListItemButton>
          </ListItem>

          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Explore sx={{
                width:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
                height:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
              }}/>
              </ListItemIcon>
              <ListItemText primary="Explorar" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>

         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <OndemandVideo sx={{
                width:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
                height:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
              }}/>
              </ListItemIcon>
              <ListItemText primary="Reels" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>

         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MapsUgc sx={{
                width:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
                height:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
              }}/>
              </ListItemIcon>
              <ListItemText primary="Mensajes" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>

         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Favorite sx={{
                width:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
                height:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
              }}/>
              </ListItemIcon>
              <ListItemText primary="Notificaciones" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>

         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddCircleOutline sx={{
                width:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
                height:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
              }}/>
              </ListItemIcon>
              <ListItemText primary="Crear" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>

          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inbox sx={{
                width:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
                height:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
              }}/>
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
                <Inbox sx={{
                width:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
                height:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
              }}/>
              </ListItemIcon>
              <ListItemText primary="Threads" 
              sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}/>
            </ListItemButton>
          </ListItem>

          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ControlPoint sx={{
                width:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
                height:{xs:"35px", sm:"35px", md:"35px", lg:"30px"},
                
              }}/>
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