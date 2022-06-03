import { Button, InputLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const [inputs, setInputs] = useState({

  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e .target.value
    }));
  };
  const [blog, setBlog] = useState(); 
  const labelStyles = {mb:1,mt:2,fontSize: '24px', fontWeight:'bold'}
  const id = useParams().id;
  console.log(id);
  const fetchDetails = async() => {
    const res = await axios
    .get(`http://localhost:5002/api/blog/${id}`)
    .catch(err=>console.log(err))
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    fetchDetails().then(data => {
      setBlog(data.blog)
      setInputs({title:data.blog.title,description: data.blog.description,imageURL: data.blog.image })
    });
  },[id]);
  console.log(blog);
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs);
  }

  return <div>  
    {inputs &&
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
 
 >Edit Your Blog</Typography>
 <InputLabel sx={labelStyles}>Title</InputLabel>
 <TextField name="title" onChange={handleChange} value={inputs.title} margin="normal" variant="outlined" />
 <InputLabel sx={labelStyles}>Description</InputLabel>
 <TextField name="description" onChange={handleChange} value={inputs.description} margin="normal" variant="outlined" />
 <InputLabel sx={labelStyles}>ImageURL</InputLabel>
 <TextField name="imageURL" onChange={handleChange} value={inputs.imageURL} margin="normal" variant="outlined" />
 <Button sx={{mt:2, borderRadius:4}} variant="contained" color="secondary" type="submit">Submit</Button>
 </Box>
 </form>}</div>;
  
};

export default BlogDetail;