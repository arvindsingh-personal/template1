import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';


export default function NavbarDesktop() {
  return (
    <Box>
    <Grid container justifyContent={'space-between'} sx={{mt:3}}>
      <Grid md={2} lg={3} sx={{cursor:'pointer'}}>
        <img src='images/instagram-logo.png' alt='instagram' 
        
        />
      </Grid>

      <Grid container md={6} lg={6} >
        <Grid md={1} lg={2}>
          <AddBoxOutlinedIcon sx={{fontSize:40, cursor: 'pointer'}} />
        </Grid>
        <Grid md={2} lg={2}>
          <SendOutlinedIcon sx={{fontSize:40, cursor: 'pointer'}} />
        </Grid>
        <Grid container md={3} lg={3}>
           <Typography variant='h5'>Following</Typography><PersonOutlineOutlinedIcon sx={{fontSize:40, cursor: 'pointer'}} />
        </Grid>
        <Grid container md={2} lg={3}>
           <Typography variant='h5'>Favorites</Typography><StarBorderPurple500Icon sx={{fontSize:40, cursor: 'pointer'}} />
        </Grid>
      </Grid>

    </Grid>
  </Box>
  )
}
