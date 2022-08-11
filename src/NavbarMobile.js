import React, { useState } from 'react'
import { Box, Grid } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';

export default function NavbarMobile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // alert(event.currentTarget)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Grid container justifyContent={'space-around'} sx={{ mt: 3 }}>
        <Grid display={'flex'} md={3} lg={3} >
          <img src='images/instagram-logo.png' alt='insta' />
          <KeyboardArrowDownIcon
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          />
          
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Following
        <PersonOutlineOutlinedIcon /></MenuItem>
        <MenuItem onClick={handleClose}>Favorites
        <StarRateOutlinedIcon /></MenuItem>
      </Menu>
      
        </Grid>
        <Grid md={3} lg={3}>
          <AddBoxOutlinedIcon sx={{ fontSize: 35, mr: 2 }} />
          <SendOutlinedIcon sx={{ fontSize: 35 }} />
        </Grid>
      </Grid>
    </Box>
  )
}
