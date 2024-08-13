import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 2, 
        mt: 'auto', 
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' 
            ? theme.palette.grey[200] 
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="black">Tech Trends</Typography>
            <Typography variant="body2" color="black">
              © {new Date().getFullYear()} Tech Trends. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="black">Quick Links</Typography>
            <Link href="#" variant="body2" display="block">Home</Link>
            <Link href="#" variant="body2" display="block">About</Link>
            <Link href="#" variant="body2" display="block">Contact</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="black">Follow Us</Typography>
            <Link href="#" variant="body2" display="block">Facebook</Link>
            <Link href="#" variant="body2" display="block">Twitter</Link>
            <Link href="#" variant="body2" display="block">Instagram</Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
