import { Box, Button, TextField, Typography } from '@mui/material';
import React, {useState} from 'react'

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false)
  return  <div>
      <form>
        <Box 
        maxWidth={400}
        display="flex" 
        flexDirection={"column"} 
        alignItems="center" 
        justifyContent={"center"}
        boxShadow="10px 10px 20px #cccc"
        padding={3}
        margin='auto'
        marginTop={5}
        borderRadius={5}
        >
     
          <Typography 
          variant="h4"
          padding={3} 
          textAlign="center"
          > {isSignup ? "Login" : "Signup"}
          </Typography>

         {isSignup &&<TextField placeholder="Name" margin="normal"/>
         } <TextField type={'email'} placeholder="Email" margin="normal"/>
          <TextField type={'password'} placeholder="Password" margin="normal"/>
          <Button
          variant="contained" 
          sx= {{borderRadius: 3, marginTop: 3}} 
          color="secondary"
          > Submit</Button>
          <Button onClick={()=>setIsSignup(!isSignup)} sx={{ borderRadius: 3, marginTop: 3 }}
          >
             {isSignup ? "Login" : "Signup"}
          
          </Button>
        </Box>
      </form>
    </div>;
};


export default Auth;