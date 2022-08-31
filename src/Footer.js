import { Box, Divider, Grid, Link, List, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useContext } from 'react';
import { bookContext } from './App';




export default function Footer() {
  let {txt3,txt4} = useContext(bookContext);
  const FooterTitle = styled(Typography)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${txt4}
`
const Anchor = styled(Link)`
  color:white
`
  return ( 
    <Box
      sx={{
        backgroundColor: txt3,
        color:'white'
      }}
    >
      <Grid container spacing={2} justifyContent="space-evenly" alignItems='start' textAlign='start' sx={{fontSize:18, lineHeight:1.9,pt:6, pb:9}}>
        <Grid item md={3} lg={2} display='flex' flexDirection='column'  >
          <FooterTitle>Open Library</FooterTitle>
          <Anchor href='#'>Vision</Anchor>
          <Anchor href='#'>Volunteer</Anchor>
          <Anchor href='#'>Parteners With Us</Anchor>
          <Anchor href='#'>Careers</Anchor>
          <Anchor href='#'>Blog</Anchor>
          <Anchor href='#'>Terms of Services</Anchor>
          <Anchor href='#'>Donate</Anchor>
        </Grid>
        <Grid item md={3} lg={2} display='flex' flexDirection='column'>
          <FooterTitle>Discover</FooterTitle>
          <Anchor href='#'>Home</Anchor>
          <Anchor href='#'>Books</Anchor>
          <Anchor href='#'>Authors</Anchor>
          <Anchor href='#'>Subjects</Anchor>
          <Anchor href='#'>Collections</Anchor>
          <Anchor href='#'>Advanced Search</Anchor>
          <Anchor href='#'>Return to Top</Anchor>
        </Grid>
        <Grid item md={3} lg={2} display='flex' flexDirection='column'>
          <FooterTitle>Develop</FooterTitle>
          <Anchor href='#'>Developer Center</Anchor>
          <Anchor href='#'>API Documentation</Anchor>
          <Anchor href='#'>Bulk Data Dumps</Anchor>
          <Anchor href='#'>Writing Bots</Anchor>
          <Anchor href='#'>Add a Book</Anchor>
        </Grid>
        <Grid item md={3} lg={2} display='flex' flexDirection='column'>
          <FooterTitle>Help</FooterTitle>
          <Anchor href='#'>Help Center</Anchor>
          <Anchor href='#'>Report a Problem</Anchor>
          <Anchor href='#'>Suggesting Edits</Anchor>
          <Box
            sx={{
              mt: 4,
            }}
          >
            <Twitter sx={{ mr: 1 }} />
            <GitHubIcon sx={{ mr: 1 }} />
          </Box>
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <Grid container spacing={2} justifyContent="center" sx={{pt:2.6, pb:5}}>
        <Grid item xs={12} md={1} lg={1}><AccountBalanceIcon sx={{fontSize:50}} /></Grid>
        <Grid item xs={11} md={11} lg={11} sx={{textAlign:'start'}}>
          <Typography>
            Open Library is an initiative of the <Link>Internet Archive</Link>, a 501(c)(3) non-profit, building a digital library of Internet sites and other cultural artifacts in digital form. Other <Link>projects</Link> include the <Link>Wayback Machine, archive.org</Link> and <Link>archive-it.org</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
