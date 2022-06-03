
import React, { useState } from 'react';
import {  AppBar, 
        Typography, 
        Toolbar, 
        Box, 
        Button, 
        Tabs, 
        Tab, 
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../store';



<script src="https://kit.fontawesome.com/b1bbd7b33a.js" crossorigin="anonymous"></script>


const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn); 
const dispatch = useDispatch();
  const [value, setValue] = useState() ;
  return (
    <AppBar 
    position="sticky"
    sx={{ 
      background: 
    "linear-gradient(90deg, rgba(86,0,92,1) 0%, rgba(61,9,121,1) 50%, rgba(0,178,195,1) 100%)",
    }}
    >
      <Toolbar>
        <Typography variant="h4">ZomBlog </Typography>
        { isLoggedIn && <Box display="flex" marginLeft={"auto"} marginRight="auto">
        <Tabs
           textColor="inherit"
           value={value} 
           onChange={(e,val) => setValue(val)}
           >
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"/>
            <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog"/>
          </Tabs>


        </Box>}
        <Box display="flex" marginLeft="auto" >
        { !isLoggedIn && <> 
        <Button 
          LinkComponent={Link}
          to="/auth"
          variant="contained" 
          sx={{ margin: 1, borderRadius: 10 }} 
          color="secondary"
          >
            Login
          </Button>
          <Button 
          LinkComponent={Link}
          to="/auth"
          variant="contained" 
          sx={{ margin: 1, borderRadius: 10  }} 
          color="secondary"
          >
            Signup
          </Button> 
          </>
          }
         { isLoggedIn && 
         <Button 
         onClick={()=>dispatch(authActions.logout())}
          LinkComponent={Link}
          to="/auth"
          variant="contained" 
          sx={{ margin: 1, borderRadius: 10  }} 
          color="secondary"
          >
            Logout
          </Button> }
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header