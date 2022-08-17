import { Box, Grid } from '@mui/material'
import TextField from '@mui/material/TextField';
import React from 'react'
import { Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginContext } from './App';

// This component is for Login
export default function Login() {
  let navi = useNavigate();
  let { login } = useContext(loginContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const Validate = () => {
    let flag = 0;
    if (email !== '' && password !== '') {
      if (login.length < 1)
        alert('You are not a registered user')
      login.map((item) => {
        if ((item.phoneEmail === email || item.fullName === email || item.username === email) && item.password === password)
          flag = 1;
      })
      if (flag === 1)
        navi('/homepage')
      else
        alert('You are not a registered user')
    }
    else
      alert('All fields are required')
  }
  return (
    <>
      <Box sx={{
        border: '1px solid #C9C9C9', width: 480, justifyContent: 'center', margin: '1rem auto'
      }}>
        <Grid sx={{ m: 7 }}><img src='images/instagram-logo.png' alt='' width='250' height='75' /></Grid>
        <Grid>
          <TextField id="outlined-basic" value={email} onChange={(event => setEmail(event.target.value))} label="Phone number, username or email address" variant="outlined" sx={{ width: '25rem', backgroundColor: '#F7F7F7', mb: 1 }} />
        </Grid>

        <Grid>
          <TextField id="outlined-basic" value={password} onChange={(event => setPassword(event.target.value))} label="Password" type='password' variant="outlined" sx={{ width: '25rem', backgroundColor: '#F7F7F7', mb: 2 }} />
        </Grid>
        <Button variant="contained" onClick={Validate} sx={{ width: '25rem', fontWeight: 'bold', backgroundColor: '#0095f6' }}>Log In</Button>
        <Grid color='#9F9F9F' sx={{ width: '25rem', margin: '1rem auto' }}>
          <Divider sx={{ fontWeight: 'bold' }}>OR</Divider>
        </Grid>
        <Grid container justifyContent='center' color='#4267B2' sx={{ fontWeight: 'bold', fontSize: '1.2rem', p: 2, alignItems: 'center' }}>
          <Grid> <FacebookIcon sx={{ fontSize: '2rem', mr: 1 }} /></Grid><Grid >Log in with Facebook</Grid>
        </Grid>
        <Grid sx={{ mb: 5 }}><a href='https://www.instagram.com/accounts/password/reset/' style={{ textDecoration: 'none', color: '#00376b' }}>Forgotten your password?</a></Grid>
      </Box>
      <Box sx={{
        border: '1px solid #C9C9C9', width: 480, justifyContent: 'center', margin: '-1rem auto', pt: 4, pb: 4, fontSize: '1.2rem'
      }}>
        Don't have an account? <NavLink to='/Signup' style={{ textDecoration: 'none', color: '#0493EC', fontWeight: 'bold' }}>Sign up</NavLink>
      </Box>
      <Grid sx={{ mt: 5, mb: 3, fontSize: '1.2rem' }}>Get the app.</Grid>
      <Grid container justifyContent='center'>
        <Grid>
          <a href='https://apps.apple.com/app/instagram/id389801252?vt=lo'>
            <img src='images/app-store.png' height='44px' />
          </a>
        </Grid>
        <Grid>
          <a href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DE293CC97-ECCF-489B-8750-05797640CB1F%26utm_content%3Dlo%26utm_medium%3Dbadge'>
            <img src='images/play-store.png' height='44px' />
          </a>
        </Grid>
      </Grid>
    </>
  )
}
