import { Avatar, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography, createTheme } from '@mui/material'
import React from 'react'
import eli from '../images/Eli.png'
import chesp from '../images/chesp.png'
import anne from '../images/anne.jpg'
import styled from 'styled-components'
import yo from '../images/yo.jpg'
import nouser from '../images/nouser.jpg'
import { ThemeProvider } from '@emotion/react'



const BttAll = styled(Button)({
    marginLeft:"65px",
    fontSize:"11px",
    height: "25px",
    width:"85px",
    color: "black", 
    backgroundColor: 'white',
    transition: 'color 0.3s ease',
    '&:hover': {
      backgroundColor: "white",
      color: 'gray',
    }
})

const Bttfollow = styled(Button)({
    marginLeft:"65px",
    fontSize:"11px",
    height: "30px",
    width:"61px",
    color: "#149df7", 
    backgroundColor: 'white',
    transition: 'color 0.3s ease',
    '&:hover': {
      backgroundColor: "white",
      color: '#00376b',
    }
})



const RightBar = () => {

    const theme1 = createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1160,
            xl: 1536,
          },
        },
      });

  return (
    <ThemeProvider theme={theme1}>
    <Box flex={3} sx={{ display: {xs: "none", sm: "none", md: "none", lg:"block"} }}>
        <Box position="fixed">{/*Fixed*/}
        <Box width="100%" height={50}>

        </Box>
        <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="JAGB" src={yo} />
                </ListItemAvatar>
                <ListItemText
                primary="eladrian079_fx"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                    </Typography>
                    {" Adrian Guillen"}
                    </React.Fragment>
                }
                />
        </ListItem>
        {/* ---------- */}
        <Box width={304} height={30} border={0} display="flex"> 
            <Typography color="darkgray" fontSize={13.5} ml={2}>Sugerencias para ti</Typography>
            <BttAll>Ver todo</BttAll>
        </Box>
        {/* -------------- */}
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Elizabeth Olsen" src={eli} />
                </ListItemAvatar>
                <ListItemText
                primary="Elizabeth Olsen"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                    </Typography>
                    {"Sugerencia para ti"}
                    <Bttfollow>Seguir</Bttfollow>
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Travis Howard" src={chesp} />
                </ListItemAvatar>
                <ListItemText
                primary="Chespirito"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        
                    </Typography>
                    {" Sugerencia para ti"}
                    <Bttfollow>Seguir</Bttfollow>
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Cindy Baker" src={anne} />
                </ListItemAvatar>
                <ListItemText
                primary="Anne Hathaway"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        
                    </Typography>
                    {' Sugerencia para ti'}
                    <Bttfollow>Seguir</Bttfollow>
                    </React.Fragment>
                }
                />
            </ListItem>
    </List>
    </Box>{/*Fixed*/}
    </Box>
    </ThemeProvider>
  )
}

export default RightBar