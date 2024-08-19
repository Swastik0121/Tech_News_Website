import React from 'react';
import {Typography, Container, CssBaseline} from '@mui/material'

const About = () => {
  return (
  <>
    <CssBaseline/>
    <Container maxWidth='sm' sx={{padding:'30px'}}>
            <Typography variant='h3' align='center' color='white' gutterBottom>
                ABOUT OUR WEBSITE
            </Typography>
    </Container>
    <Container maxWidth='md' sx={{paddingBottom:'5px'}}>
        <Typography variant='h5' color='white'  gutterBottom sx={{textAlign:'justify'}}>
            <p>"Tech Trends" is your go-to source for the latest updates and insights in the world of technology. Our mission is to keep you informed and ahead of the curve in a rapidly evolving digital landscape.</p>
            <p>Whether it's groundbreaking innovations, emerging startups, or shifts in the tech industry, we strive to provide in-depth analysis and expert commentary.</p><p>At Tech Trends, we believe in the power of information to shape the future, and we're here to guide you through the ever-changing tech world.</p><p>Stay connected with us as we explore the trends that are defining tomorrow's technology today.</p>
        </Typography>  
    </Container>          
  </>
  )
};

export default About;