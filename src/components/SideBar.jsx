import { AddCircle, AddCircleOutline, ControlPoint, Explore, Favorite, Home, Inbox, MapsUgc, OndemandVideo, Search } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import instap from '../images/instap.png'

const SideBar = () => {
  return (
    <Box flex={1.77} position="sticky">
      <img src={instap} alt="insta_Logo" width="100%"/>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItemButton>
          </ListItem>

         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Search />
              </ListItemIcon>
              <ListItemText primary="Buscar" />
            </ListItemButton>
          </ListItem>

          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Explore />
              </ListItemIcon>
              <ListItemText primary="Explorar" />
            </ListItemButton>
          </ListItem>

         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <OndemandVideo />
              </ListItemIcon>
              <ListItemText primary="Reels" />
            </ListItemButton>
          </ListItem>

         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MapsUgc />
              </ListItemIcon>
              <ListItemText primary="Mensajes" />
            </ListItemButton>
          </ListItem>

         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Favorite />
              </ListItemIcon>
              <ListItemText primary="Notificaciones" />
            </ListItemButton>
          </ListItem>

         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddCircleOutline />
              </ListItemIcon>
              <ListItemText primary="Crear" />
            </ListItemButton>
          </ListItem>

          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Perfil" />
            </ListItemButton>
          </ListItem>
          <Box height="23.2rem" border={0}>

          </Box>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Threads" />
            </ListItemButton>
          </ListItem>

          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ControlPoint />
              </ListItemIcon>
              <ListItemText primary="Más" />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  )
}

export default SideBar