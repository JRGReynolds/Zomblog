import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const labelStyles = {mb:1,mt:2,fontSize: '24px', fontWeight:'bold'}
const AddBlog = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e .target.value
    }));
  }
  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(inputs);
  };
  return ( <div>
   <form onSubmit={handleSubmit}>
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
    <TextField name="title" onChange={handleChange} value={inputs.title} margin="normal" variant="outlined" />
    <InputLabel sx={labelStyles}>Description</InputLabel>
    <TextField name="description" onChange={handleChange} value={inputs.description} margin="normal" variant="outlined" />
    <InputLabel sx={labelStyles}>ImageURL</InputLabel>
    <TextField name="imageURL" onChange={handleChange} value={inputs.imageURL} margin="normal" variant="outlined" />
    <Button sx={{mt:2, borderRadius:4}} variant="contained" color="secondary" type="submit">Submit</Button>
    </Box>
    </form> 
  </div>);
};

export default AddBlog