import { Inbox } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import instap from '../images/instap.png'

const SideBar = () => {
  return (
    <Box bgcolor="green" flex={1.77}>

      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          </List>
    </Box>
  )
}

export default SideBar