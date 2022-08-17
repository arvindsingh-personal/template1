import { Box, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import React from 'react'
import { Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useContext, useState } from 'react';
import { loginContext } from './App';
import { useNavigate } from 'react-router-dom';

// This component is for Sign up
export default function Singup() {
  let { login, setLogin, setUserName } = useContext(loginContext);
  const navi = useNavigate();

  const [phoneEmail, setPE] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Validate = () => {
    if (phoneEmail !== '' && fullName !== '' && username !== '' && password !== '') {
      let temp = { 'phoneEmail': phoneEmail, 'fullName': fullName, 'username': username, 'password': password };
      setLogin(login => [...login, temp]);
      setUserName(fullName);
      navi('/');
    }
    else
      alert('All Fields are required');
  }
  return (
    <>
      <Box sx={{
        border: '1px solid #C9C9C9', width: 480, justifyContent: 'center', margin: '1rem auto', pb: 6
      }}>
        <Grid container justifyContent='center'>
          <Grid sx={{ mt: 7 }}>
            <img src='images/instagram-logo.png' alt='img' width='250' height='75' />
          </Grid>
          <Grid sx={{ m: 2, width: '70%', color: 'gray' }}>
            <Typography variant='h5' sx={{ fontWeight: 'bold' }} >
              Sign up to see photos and videos from your friends.
            </Typography>
          </Grid>
        </Grid>
        <Button variant='contained' sx={{ width: '25rem', height: '3rem', backgroundColor: '#0095f6' }}>
          <a href='https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%252217sdgk11r23zle1a4osm2jvtr0i3vzy0p1q29i8i1rr55p819e60wk%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Den_US%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D920fc158-a4bb-4176-b64e-a167520d5fbb%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%252217sdgk11r23zle1a4osm2jvtr0i3vzy0p1q29i8i1rr55p819e60wk%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0'
            style={{ textDecoration: 'none', color: 'white' }}>
            <Grid container fontSize='1.2rem' sx={{ pt: 1 }}>
              <Grid><FacebookIcon sx={{ fontSize: '2rem', mr: 1 }} /></Grid>
              <Grid>Log in with Facebook</Grid>
            </Grid>
          </a>
        </Button>
        <Grid color='#9F9F9F' sx={{ width: '25rem', margin: '1rem auto' }}>
          <Divider sx={{ fontWeight: 'bold' }}>OR</Divider>
        </Grid>
        <Grid>
          <TextField id="outlined-basic" value={phoneEmail} onChange={(event) => setPE(event.target.value)} label="Mobile Number or Email" variant="outlined" sx={{ width: '25rem', backgroundColor: '#F7F7F7', mb: 1 }} />
        </Grid>
        <Grid>
          <TextField id="outlined-basic" value={fullName} onChange={(event) => setFullName(event.target.value)} label="Full Name" variant="outlined" sx={{ width: '25rem', backgroundColor: '#F7F7F7', mb: 1 }} />
        </Grid>
        <Grid>
          <TextField id="outlined-basic" value={username} onChange={(event) => setUsername(event.target.value)} label="Username" variant="outlined" sx={{ width: '25rem', backgroundColor: '#F7F7F7', mb: 1 }} />
        </Grid>

        <Grid>
          <TextField id="outlined-basic" value={password} onChange={(event) => setPassword(event.target.value)} label="Password" type='password' variant="outlined" sx={{ width: '25rem', backgroundColor: '#F7F7F7', mb: 2 }} />
        </Grid>
        <Button variant="contained" sx={{ width: '25rem', fontWeight: 'bold', fontSize: '1.2rem', backgroundColor: '#0095f6' }}
          onClick={Validate}
        >Sign up</Button>
      </Box>
      <Box sx={{
        border: '1px solid #C9C9C9', width: 480, justifyContent: 'center', margin: '1rem auto', pt: 4, pb: 4, fontSize: '1.2rem'
      }}>
        Have an account? <NavLink to='/' style={{ textDecoration: 'none', color: '#0493EC', fontWeight: 'bold' }}>Log in</NavLink>
      </Box>
      <Grid sx={{ mt: 4, mb: 3, fontSize: '1.2rem' }}>Get the app.</Grid>
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
