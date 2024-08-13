import React from 'react';
import DataDisplay from './DataDisplay';
import {Typography, Container} from '@mui/material'

const Console = () => {
  
  return (
    <>
      <Container maxWidth='sm' sx={{padding:'30px'}}>
            <Typography variant='h2' align='center' color='white' gutterBottom>
                Console
            </Typography>
            <Typography variant='h5' align='center' color='white' gutterBottom>
                Your Hub for the Latest in Gadgets, AI, and Cutting-Edge Technology. Stay Updated, Stay Ahead.
            </Typography>
      </Container>
      <DataDisplay endpoint="console" category= "console"/>
    </>
  );
};

export default Console;