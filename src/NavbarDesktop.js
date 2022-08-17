import * as React from 'react';
import { useState, useContext } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
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
  // border: '2px solid #000',
  // boxShadow: 24,
  p: 4,
};

const data = require('./data.json');
export default function NavbarDesktop() {
  let {userName, mainData, setMainData} = useContext(loginContext)
  let Data = data.data;

  const [imgURL, setImgURL] = useState('');
  const [caption, setCaption] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Upload = () => {
    if(imgURL !== '' && caption !==''){ 
    let D = { id: 7,"dp": "images/my-dp.jpeg", 
    "name":userName, "image":imgURL,"description":caption,"comment":[],"share":"" }
    setMainData([D,...mainData]);
    setImgURL('');
    setCaption('');
    handleClose()
    }
         
  }

  return (
    <>
      <Box>
        <Grid container justifyContent={'space-between'} sx={{ mt: 3 }}>
          <Grid md={1} lg={1} sx={{ cursor: 'pointer' }}>
            <img src='images/instagram-logo.png' alt='instagram'

            />
          </Grid>

          <Grid container md={6} lg={6} >
            <Grid md={1} lg={2}>
              <AddBoxOutlinedIcon onClick={handleOpen} sx={{ fontSize: 32, cursor: 'pointer' }} />
            </Grid>
            <Grid md={2} lg={2}>
              <SendOutlinedIcon sx={{ fontSize: 32, cursor: 'pointer' }} />
            </Grid>
            <Grid container md={4} lg={4}>
              <Typography variant='h6'>Following</Typography><PersonOutlineOutlinedIcon sx={{ fontSize: 32, cursor: 'pointer' }} />
            </Grid>
            <Grid container md={4} lg={4}>
              <Typography variant='h6'>Favorites</Typography><StarBorderPurple500Icon sx={{ fontSize: 32, cursor: 'pointer' }} />
            </Grid>
          </Grid>

        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
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
          {/* <Typography variant='h5' id="modal-modal-description" sx={{ mt: 2 }}>
            Write a caption...
          </Typography> */}

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
