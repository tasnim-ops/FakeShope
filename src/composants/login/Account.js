import React from 'react'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme();



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
}



const Account = () => {
  return (
    <div>
    <img src="https://res.cloudinary.com/ddbiyenrd/image/upload/v1680523920/my-account_hpcfhf.jpg"/>

   <ThemeProvider theme={theme}>
   <Container component="main" maxWidth="xs">
     <CssBaseline />
     <Box
       sx={{
         marginTop: 8,
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
       }}
     >
   <Avatar
  alt="Remy Sharp"
  src="https://res.cloudinary.com/ddbiyenrd/image/upload/v1676939469/tasnim/work/faces/istockphoto-518090422-612x612_ygiwfr.jpg"
  sx={{ width: 90, height: 90 }}
/>
       <Typography component="h1" variant="h5">
         Account Informations 
       </Typography>
       <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
       <TextField
                  autoComplete="User Name"
                  name="User Name"
                  required
                  fullWidth
                  id="User Name"
                  label="User Name"
                  autoFocus
                />
         <TextField
           margin="normal"
           required
           fullWidth
           id="email"
           label="Email Address"
           name="email"
           autoComplete="email"
           autoFocus
         />
         <TextField
           margin="normal"
           required
           fullWidth
           name="password"
           label="Password"
           type="password"
           id="password"
           autoComplete="current-password"
         />

         <Button
           type="submit"
           fullWidth
           variant="contained"
           sx={{ mt: 3, mb: 2 }}
         >
           Update
         </Button>
       </Box>
     </Box>
     <Copyright sx={{ mt: 8, mb: 4 }} />
   </Container>
 </ThemeProvider>
 </div>
  )
}

export default Account
