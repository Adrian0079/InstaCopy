import { Avatar, Box, List, ListItem, ListItemText, ListSubheader, Stack, Typography } from '@mui/material'
import React from 'react'
import pe1 from '../images/pe1.png'
import pe2 from '../images/pe2.png'
import pe3 from '../images/pe3.png'
import pe4 from '../images/pe4.png'
import pe5 from '../images/pe5.png'
import pe6 from '../images/pe6.png'
import pe7 from '../images/pe7.png'
import pe8 from '../images/pe8.png'
import fim1 from '../images/fim1.png'
import fim2 from '../images/fim2.png'
import fim3 from '../images/cobra.jpg'
import { Bookmark, BookmarkBorder, ChatBubbleOutline, FavoriteBorder, Send, SentimentDissatisfied, SentimentSatisfiedAlt } from '@mui/icons-material'


const Feed = () => {
  return (
    <Box flex={4.9}>
      <Stack  direction="row" border={3} mt={7} justifyContent="flex-end"
        spacing={2.8} mr={6}
      >
        <Box border={0} justifyContent="center" textAlign="center">
          <Avatar alt='' src={pe1} sx={{ height:56, width: 56, border:"2px #ff0c60 solid"}}/>
          <Typography color="initial" alignItems="center" fontSize={12.5}>jose.rt</Typography>
        </Box>
        <Box border={0} justifyContent="center" textAlign="center">
          <Avatar alt='' src={pe2} sx={{ height:56, width: 56, border:"2px #ff0c60 solid"}}/>
          <Typography color="initial" alignItems="center" fontSize={12.5}>jose.rt</Typography>
        </Box>
        <Box border={0} justifyContent="center" textAlign="center">
        <Avatar alt='' src={pe3} sx={{ height:56, width: 56, border:"2px #ff0c60 solid"}}/>
        <Typography color="initial" alignItems="center" fontSize={12.5}>jose.rt</Typography>
        </Box>
        <Box border={0} justifyContent="center" textAlign="center">
        <Avatar alt='' src={pe4} sx={{ height:56, width: 56, border:"2px #ff0c60 solid"}}/>
        <Typography color="initial" alignItems="center" fontSize={12.5}>jose.rt</Typography>
        </Box>
        <Box border={0} justifyContent="center" textAlign="center"> 
        <Avatar alt='' src={pe5} sx={{ height:56, width: 56, border:"2px #ff0c60 solid"}}/>
        <Typography color="initial" alignItems="center" fontSize={12.5}>jose.rt</Typography>
        </Box>
        <Box border={0} justifyContent="center" textAlign="center">
        <Avatar alt='' src={pe6} sx={{ height:56, width: 56, border:"2px #ff0c60 solid"}}/>
        <Typography color="initial" alignItems="center" fontSize={12.5}>jose.rt</Typography>
        </Box>
        <Box border={0} justifyContent="center" textAlign="center">
        <Avatar alt='' src={pe7} sx={{ height:56, width: 56, border:"2px #ff0c60 solid"}}/>
        <Typography color="initial" alignItems="center" fontSize={12.5}>jose.rt</Typography>
        </Box>
        <Box border={0} justifyContent="center" textAlign="center">
        <Avatar alt='' src={pe8} sx={{ height:56, width: 56, border:"2px #ff0c60 solid"}}/>
        <Typography color="initial" alignItems="center" fontSize={12.5}>jose.rt</Typography>
        </Box>
        
      </Stack>
      <Stack border={0} height="100%" width="100%"  alignItems="flex-end" mt={5.1} direction="column">
        {/* Card======================> */}
        <Stack border={0} height="50rem" width={470} mr={17.4} boxShadow={4}>

          <Stack border={0} height={56} justifyContent="flex-start" direction="row">
            
              <Avatar alt='' src={pe8} sx={{ height:37, width: 37, border:"2px #ff0c60 solid", marginTop:"7.2px"}}/>
              <Stack border={0} width={500} direction="row" alignItems="center" ml={0.8} >
                <Typography color="initial" alignItems="center" 
                fontSize={12.5}>jose.rt{'\u00A0\u00A0'}•{'\u00A0\u00A0'}7h</Typography>
                  <Stack border={0} width={50} height="100%" ml={37} alignItems="flex-end" justifyContent="center">
                    <Typography>•••</Typography>
                  </Stack>
              </Stack>
          </Stack>

          <img src={fim1} alt="Lamborghini1" width="100%" height={500} />
          <Stack border={0} direction="row"> {/* container*/}
            <Stack border={0} height={50} width="95%" alignItems="center" direction="row" spacing={1.5}>
              <FavoriteBorder />
              <ChatBubbleOutline />
              <Send />
            </Stack>
            <Stack border={0} alignItems="center" justifyContent="center">
                <BookmarkBorder />
            </Stack>


          </Stack>{/* container*/}
          


          <Typography fontSize={13}>13.243 Me gusta</Typography>

          
          <Typography fontSize={13}><strong>Lamborghini</strong> Its playground is where other drivers' comfort zones end.
            The V10 is its partner on dusty, wild and thrilling routes
            Meet Huracán Sterrato.
          </Typography>
            
          <Typography color="#1f4f7d" fontSize={13.3}>#Lambo#Velocity#White</Typography>
          <Typography fontSize={11.8} fontWeight="bold">Ver traducción</Typography>
          <Typography fontSize={13} color="gray">Ver los 117 comentarios</Typography>
          <Typography fontSize={13}><strong>micha8jackson</strong> Very cool 🔥🔥</Typography>
          <Typography fontSize={13}><strong>gercollector</strong> Excellent. 👏.</Typography>
          <Typography fontSize={13} color="gray">Ver los 334 comentarios</Typography>
          <Stack direction="row"> 
            <Typography fontSize={13} color="gray">Agrega un comentario...</Typography>
            <SentimentSatisfiedAlt sx={{width:20, height:20, color: "gray", marginLeft:38}}/>
          </Stack>

        </Stack>

        {/* Card======================> */}

        {/* Card 2======================> */}
        <Stack border={0} height="50rem" width={470} mr={17.4} boxShadow={4}>

          <Stack border={0} height={56} justifyContent="flex-start" direction="row">
            
              <Avatar alt='' src={pe8} sx={{ height:37, width: 37, border:"2px #ff0c60 solid", marginTop:"7.2px"}}/>
              <Stack border={0} width={500} direction="row" alignItems="center" ml={0.8} >
                <Typography color="initial" alignItems="center" 
                fontSize={12.5}>jose.rt{'\u00A0\u00A0'}•{'\u00A0\u00A0'}7h</Typography>
                  <Stack border={0} width={50} height="100%" ml={37} alignItems="flex-end" justifyContent="center">
                    <Typography>•••</Typography>
                  </Stack>
              </Stack>
          </Stack>

          <img src={fim2} alt="Lamborghini1" width="100%" height={500} />
          <Stack border={0} direction="row"> {/* container*/}
            <Stack border={0} height={50} width="95%" alignItems="center" direction="row" spacing={1.5}>
              <FavoriteBorder />
              <ChatBubbleOutline />
              <Send />
            </Stack>
            <Stack border={0} alignItems="center" justifyContent="center">
                <BookmarkBorder />
            </Stack>


          </Stack>{/* container*/}



          <Typography fontSize={13}>13.243 Me gusta</Typography>


          <Typography fontSize={13}><strong>Lamborghini</strong> Its playground is where other drivers' comfort zones end.
            The V10 is its partner on dusty, wild and thrilling routes
            Meet Huracán Sterrato.
          </Typography>
            
          <Typography color="#1f4f7d" fontSize={13.3}>#Lambo#Velocity#White</Typography>
          <Typography fontSize={11.8} fontWeight="bold">Ver traducción</Typography>
          <Typography fontSize={13} color="gray">Ver los 117 comentarios</Typography>
          <Typography fontSize={13}><strong>micha8jackson</strong> Very cool 🔥🔥</Typography>
          <Typography fontSize={13}><strong>gercollector</strong> Excellent. 👏.</Typography>
          <Typography fontSize={13} color="gray">Ver los 334 comentarios</Typography>
          <Stack direction="row"> 
            <Typography fontSize={13} color="gray">Agrega un comentario...</Typography>
            <SentimentSatisfiedAlt sx={{width:20, height:20, color: "gray", marginLeft:38}}/>
          </Stack>

        </Stack>
        {/* Card 2======================> */}

        {/* Card 3======================> */}
        <Stack border={0} height="50rem" width={470} mr={17.4} boxShadow={4}>

          <Stack border={0} height={56} justifyContent="flex-start" direction="row">
            
              <Avatar alt='' src={pe8} sx={{ height:37, width: 37, border:"2px #ff0c60 solid", marginTop:"7.2px"}}/>
              <Stack border={0} width={500} direction="row" alignItems="center" ml={0.8} >
                <Typography color="initial" alignItems="center" 
                fontSize={12.5}>jose.rt{'\u00A0\u00A0'}•{'\u00A0\u00A0'}7h</Typography>
                  <Stack border={0} width={50} height="100%" ml={37} alignItems="flex-end" justifyContent="center">
                    <Typography>•••</Typography>
                  </Stack>
              </Stack>
          </Stack>

          <img src={fim3} alt="Lamborghini1" width="100%" height={500} />
          <Stack border={0} direction="row"> {/* container*/}
            <Stack border={0} height={50} width="95%" alignItems="center" direction="row" spacing={1.5}>
              <FavoriteBorder />
              <ChatBubbleOutline />
              <Send />
            </Stack>
            <Stack border={0} alignItems="center" justifyContent="center">
                <BookmarkBorder />
            </Stack>


          </Stack>{/* container*/}



          <Typography fontSize={13}>13.243 Me gusta</Typography>


          <Typography fontSize={13}><strong>Lamborghini</strong> Its playground is where other drivers' comfort zones end.
            The V10 is its partner on dusty, wild and thrilling routes
            Meet Huracán Sterrato.
          </Typography>
            
          <Typography color="#1f4f7d" fontSize={13.3}>#Lambo#Velocity#White</Typography>
          <Typography fontSize={11.8} fontWeight="bold">Ver traducción</Typography>
          <Typography fontSize={13} color="gray">Ver los 117 comentarios</Typography>
          <Typography fontSize={13}><strong>micha8jackson</strong> Very cool 🔥🔥</Typography>
          <Typography fontSize={13}><strong>gercollector</strong> Excellent. 👏.</Typography>
          <Typography fontSize={13} color="gray">Ver los 334 comentarios</Typography>
          <Stack direction="row"> 
            <Typography fontSize={13} color="gray">Agrega un comentario...</Typography>
            <SentimentSatisfiedAlt sx={{width:20, height:20, color: "gray", marginLeft:38}}/>
          </Stack>

        </Stack>


        {/* Card 3======================> */}



        <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
        color:"red"
      }}
      subheader={<li />}
    >
      {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader sx={{color:"red"}}>{`I'm sticky ${sectionId}`}</ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`} sx={{color:"red"}}>
                <ListItemText primary={`Item ${item}`}  sx={{color:"red"}}/>
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>

      </Stack>
    </Box>
  )
}

export default Feed