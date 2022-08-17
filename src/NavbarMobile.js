import React, {useState, useContext, Component } from 'react'
import { Box, Grid, Button, TextField, Typography } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import Modal from '@mui/material/Modal';
import './data.json'
import { loginContext } from './App';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 755,
  bgcolor: 'background.paper',
  p: 4,
};

const data = require('./data.json');

// This Component is for Navbar according to mobile view
export default function NavbarMobile() {
  let {userName, mainData, setMainData} = useContext(loginContext)
  let Data = data.data;

  const [imgURL, setImgURL] = useState('');
  const [caption, setCaption] = useState('');
  const [Open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const HandleClose = () => setOpen(false);
  
  const Upload = () => {
    if(imgURL !== '' && caption !==''){ 
    let D = { id: 7,"dp": "images/my-dp.jpeg", 
    "name":userName, "image":imgURL,"description":caption }
    setMainData([...mainData,D]);
    setImgURL('');
    setCaption('');
    HandleClose();
    }
         
  }

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
    <>
    <Box>
      <Grid container justifyContent={'space-around'} sx={{ mt: 3 }}>
        <Grid display={'flex'} sx={{left:'0'}} >
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
        <Grid >
          <AddBoxOutlinedIcon  onClick={handleOpen} sx={{ fontSize: 35, mr: 2 }} />
          <SendOutlinedIcon sx={{ fontSize: 35 }} />
        </Grid>
      </Grid>
    </Box>
    <Modal
        open={Open}
        onClose={HandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant='h3' id="modal-modal-description" sx={{ margin: '1rem auto' }}>
            New Post
          </Typography>
          <Typography variant='h5' id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            upload image
          </Typography>
          <TextField
            id='file'
            type='file'
            onChange={(event) =>
              setImgURL(URL.createObjectURL(event.target.files[0]))}

          />
          <br />

          <TextField
            id='file'
            label=' Write a caption...'
            value={caption} onChange={(event) =>
              setCaption(event.target.value)}
            sx={{ mt: 2, width: '21rem' }}
          /><br />
          <Button variant='contained'
            onClick={Upload}
            sx={{
              mt: 2, fontWeight: 'bold',
              backgroundImage: 'linear-gradient(to right top, #d7e00c, #ecc600, #f9ab0b, #ff9028, #ff763e, #ff6551, #ff5564, #ff4878, #ff4295, #ff43b5, #ff4ed7, #ed5ffb)'
            }}>Upload</Button>
        </Box>
      </Modal>
    </>
  )
}
