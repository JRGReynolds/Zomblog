import { Box, InputLabel, TextField, Typography } from "@mui/material";
import React from "react";

const labelStyles = {mb:1,mt:2,fontSize: '24px', fontWeight:'bold'}
const AddBlog = () => {
  return (
  <div>
   <form >
     <Box 
      border={3}
      borderColor="purple"
      borderRadius={10}
      boxShadow= "10px 10px 20px #ccc"
      padding={3}
      margin={"auto"}
      marginTop={3}
      display="flex"
      flexDirection={"column"}
      width={"80%"}
     > 
    <Typography 
    fontWeight={'bold'}
    padding={3}
    color="grey"
    variant="h4"
    textAlign='center'
    
    >Post Your Blog</Typography>
    <InputLabel sx={labelStyles}>Title</InputLabel>
    <TextField margin="normal" variant="outlined" />
    <InputLabel sx={labelStyles}>Description</InputLabel>
    <TextField margin="normal" variant="outlined" />
    <InputLabel sx={labelStyles}>Title</InputLabel>
    <TextField  margin="normal" variant="outlined" />
    <InputLabel sx={labelStyles}>ImageURL</InputLabel>
    <TextField />
    </Box>
    </form>
  </div>
  );
};

export default AddBlog