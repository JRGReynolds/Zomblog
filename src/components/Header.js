import React from 'react';
import {  AppBar, Typography, Toolbar, Box, Button } from '@mui/material'


const Header = () => {
  return (
    <AppBar 
    sx={{ 
      background: 
    "linear-gradient(90deg, rgba(86,0,92,1) 0%, rgba(61,9,121,1) 50%, rgba(0,178,195,1) 100%)",
    }}
    >
      <Toolbar>
        <Typography variant="h4">ZomBlog</Typography>
        <Box display="flex" marginLeft="auto" >
          <Button variant ="contained" sx={{ margin: 1, borderRadius: 10 }} color="secondary">
            Login
          </Button>
          <Button variant ="contained" sx={{ margin: 1, borderRadius: 10  }} color="secondary">Signup</Button>
        </Box>
      </Toolbar>

    </AppBar>
  );
};

export default Header