import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HpTitle = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,  // Scroll down by the full height of the viewport
      behavior: 'smooth',  // Smooth scrolling
    });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',  // Full viewport height
        overflow: 'hidden',  // Hide any overflow content
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          position: 'absolute',  // Absolute positioning to cover the full container
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',  // Hide any overflow content
        }}
      >
        <video src='./bgvid.mp4' autoPlay muted loop style={{width: '100%', height: '100%',objectFit: 'cover'}}/>
      </Box>
      {/* Gradient Overlay for Bottom Border Blend */}
      <Box
        sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '20%',  // Adjust the height for the gradient effect
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))', // Gradient color
          }}
      />

      {/* Content Section */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          height: '100%',  // Full height of the container
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          padding: { xs: '20px', md: '40px' },  // Add responsive padding
        }}
      >
        <Box maxWidth="md">
          <Typography align='center' gutterBottom sx={{fontWeight:'bold', fontSize:'70px', color:'white'}}>
            TECH TRENDS
          </Typography>
          <Typography variant="h5" align='center' gutterBottom sx={{color:'white'}}>
            Your Hub for the Latest in Gadgets, AI, and Cutting-Edge Technology. Stay Updated, Stay Ahead.
          </Typography>
          <Button 
            variant="contained" 
            onClick={handleScroll} 
            sx={{ 
              mt: 10,  // Add margin to the top for spacing
              color: 'white', 
              backgroundColor: '#ff5001', 
              '&:hover': { 
                backgroundColor: 'black',  // Darken the button color on hover
              } 
            }}
          >
            <KeyboardArrowDownIcon/>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HpTitle;
