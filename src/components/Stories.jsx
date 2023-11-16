import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system';

// Estilos para los avatares de las historias
const StoryAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(7),
    height: theme.spacing(7),
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.1)',
    '&:not(:last-child)': {
      marginRight: theme.spacing(2),
    },
  }));

const Stories = () => {
  // Datos de las historias (nombres de usuario e imágenes de avatares)
  const storiesData = [
    { username: 'user1', imageUrl: 'url1' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    { username: 'user2', imageUrl: 'url2' },
    // Agrega más datos de historias según sea necesario
  ];

  return (
    <Box sx={{ overflowX: 'auto' }}>
      <Grid container spacing={2}>
        {storiesData.map((story, index) => (
          <Grid item key={index}>
            <Avatar alt={story.username} src={story.imageUrl} />
            <Typography variant="subtitle2">{story.username}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Stories