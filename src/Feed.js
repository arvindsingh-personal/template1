// import './data.json'
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Avatar, Grid } from '@mui/joy'
import * as React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { IconButton, Divider, TextField, Button, CardContent, CardActions } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import InsertLinkTwoToneIcon from '@mui/icons-material/InsertLinkTwoTone';
import ReportGmailerrorredTwoToneIcon from '@mui/icons-material/ReportGmailerrorredTwoTone';
import Modal from '@mui/material/Modal';
import Checkbox from '@mui/material/Checkbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, useContext } from 'react';
import { loginContext } from './App';
import Card from '@mui/material/Card';

const drawerBleeding = 56;
const StyledBox = styled(Box)(({ theme }) => ({
 backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
 width: 30,
 height: 6,
 backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
 borderRadius: 3,
 position: 'absolute',
 top: 8,
 left: 'calc(50% - 15px)',
}));

const style1 = {
 position: 'absolute',
 top: '50%',
 left: '50%',
 transform: 'translate(-50%, -50%)',
 width: 600,
 bgcolor: 'background.paper',
 border: '2px solid #000',
 p: 4,
};

const style2 = {
 position: 'absolute',
 top: '50%',
 left: '50%',
 transform: 'translate(-50%, -50%)',
 width: 800, height: 800,
 bgcolor: 'background.paper',
 border: '2px solid #000',
 overflow: 'scroll',
 p: 4,
};

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Feed(props) {
 const [comment, setComment] = useState('');
 const { userName, mainData } = useContext(loginContext);
 const { window } = props;
 const [open, setOpen] = React.useState(false);
 const [open1, setOpen1] = React.useState(false);
 const handleOpen1 = () => setOpen1(true);
 const handleClose1 = () => setOpen1(false);
 const [open2, setOpen2] = React.useState(false);
 const handleOpen2 = () => setOpen2(true);
 const handleClose2 = () => setOpen2(false);

 const toggleDrawer = (newOpen) => () => {
  setOpen(newOpen);
 };

 // This is used only for the example
 const container = window !== undefined ? () => window().document.body : undefined;

 const [flag, setFlag] = useState(10000);
 const [flag1, setFlag1] = useState('');

 // This funtion is for comment posting
 const Post = (idx) => {
  if (comment !== '') {
   mainData.map((item, index) => {
    if (index === idx) {
     item.comment.push(comment)
     setComment('');
     handleClose1();
    }
   })
  }
 }

 // This component is for the detail of the post with image of that post
 const modal = (idx) => {
  setFlag1(idx);
  handleOpen2();
 }

 // This component is for the comment Box
 const displayCard = (idx) => {
  let grid = document.getElementById(idx);
  if (grid.style.display === 'none')
   grid.style.display = 'block';
  else
   grid.style.display = 'none';
 }

 // This Component is for sharing the post 
 const share = (idx) => {
  mainData.map((item, index) => {
   if (index === idx) {
    item.share = <Grid sx={{ ml: -41 }}>
     <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{userName} </span>
     <span style={{ fontSize: '1.3rem' }}>shared this post with </span> <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{item.name}</span>
    </Grid>;
    setFlag(idx)
   }
  })
 }

 return (
  <div>
   {mainData.map((item, idx) => (
    <>
     <Box key={idx} sx={{ mb: 8 }}>
      {item.share}
      <Grid container justifyContent='space-between'
       onClick={() => modal(idx)}
       sx={{
        background: `url(${item.image}) no-repeat center `,
        backgroundSize: '49rem 50rem',
        height: '80vh', cursor: 'pointer'
       }}
      >
       <Grid container color='white' >
        <Grid ><Avatar alt="Remy Sharp" src={item.dp} sx={{
         width: 56, height: 56, border: '3px solid #E407A6', margin: 2,
         cursor: 'pointer'
        }} /></Grid>
        <Grid sx={{ marginTop: 3, fontSize: 25, fontWeight: 'bold' }} >{item.name}</Grid>
       </Grid>
       <Grid sx={{ mt: 1 }} >
        <CssBaseline />
        <Global
         styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
           height: `calc(50% - ${drawerBleeding}px)`,
           overflow: 'visible',
          },
         }}
        />
        <IconButton><MoreVertIcon sx={{ color: 'white', fontSize: 35 }}
         onClick={toggleDrawer(true)}
        /></IconButton>
        <SwipeableDrawer
         container={container}
         anchor="bottom"
         open={open}
         onClose={toggleDrawer(false)}
         onOpen={toggleDrawer(true)}
         swipeAreaWidth={drawerBleeding}
         disableSwipeToOpen={false}
         ModalProps={{
          keepMounted: true,
         }}
        >
         <StyledBox
          sx={{
           position: 'absolute',
           top: -drawerBleeding,
           borderTopLeftRadius: 15,
           borderTopRightRadius: 15,
           visibility: 'visible',
           right: 0,
           left: 0,
          }}
         >
          <Puller />
          <Grid>
           <Grid container justifyContent='space-around' sx={{ pt: 4, pb: 3 }}>
            <Grid >
             <Grid sx={{ border: '1px solid black', borderRadius: '50%', p: 1.5 }}><ShareOutlinedIcon sx={{ fontSize: '3rem' }} /></Grid>
             <Grid sx={{ p: 1.5 }}>Share</Grid>
            </Grid>
            <Grid>
             <Grid sx={{ border: '1px solid black', borderRadius: '50%', p: 1.5 }}><InsertLinkTwoToneIcon sx={{ fontSize: '3rem' }} /></Grid>
             <Grid sx={{ p: 1.5 }}>Link</Grid>
            </Grid>
            <Grid color='#7A0000'>
             <Grid sx={{ border: '1px solid #7A0000', borderRadius: '50%', p: 1.5 }}><ReportGmailerrorredTwoToneIcon sx={{ fontSize: '3rem' }} /></Grid>
             <Grid sx={{ p: 1.5 }}>Report</Grid>
            </Grid>
           </Grid>
           <Grid >
            <Divider />
            <Typography sx={{ p: '1rem 4rem', cursor: 'pointer' }}>Remix This Reel</Typography>
            <Divider />
            <Typography sx={{ p: '1rem 4rem', cursor: 'pointer' }}>Why you are seeing this post</Typography>
            <Divider />
            <Typography sx={{ p: '1rem 4rem', cursor: 'pointer' }}>Add to favorites</Typography>
            <Divider />
            <Typography sx={{ p: '1rem 4rem', cursor: 'pointer' }}>Want to see post like this</Typography>
           </Grid>
          </Grid>
          {/* <Typography sx={{ p: 2 }}>1</Typography> */}
         </StyledBox>
         <StyledBox
          sx={{
           px: 2,
           pb: 2,
           height: '50%',
           overflow: 'auto',
          }}
         >

          {/* <Skeleton variant="rectangular" height="100%" /> */}
         </StyledBox>
        </SwipeableDrawer>

       </Grid>
      </Grid>
      <Grid container justifyContent='space-between' sx={{ p: 3 }}>
       <Grid container justifyContent='space-between'
        lg={3} >
        <Grid><Checkbox sx={{ mt: -1 }} {...label} icon={<FavoriteBorderIcon sx={{ fontSize: '3rem' }} />} checkedIcon={<FavoriteIcon sx={{ fontSize: '3rem', color: 'red' }} />} /></Grid>
        <Grid><ModeCommentOutlinedIcon onClick={() => displayCard(idx)} sx={{ mr: 2, fontSize: '3rem', color: 'gray', cursor: 'pointer' }} /></Grid>
        <Grid><SendOutlinedIcon
         onClick={() => share(idx)}
         sx={{ fontSize: '3rem', color: 'gray', cursor: 'pointer' }} /></Grid>
       </Grid>

       <Grid >
        <Checkbox sx={{ mt: -1 }}
         {...label}
         icon={<BookmarkBorderIcon sx={{ fontSize: '3rem' }} />}
         checkedIcon={<BookmarkIcon sx={{ fontSize: '3rem', color: 'gray' }} />}
        />
       </Grid>
      </Grid>

      <Grid id={idx} sx={{ display: 'none' }}>
       {/* <Card sx={{ width:"100%" }} > */}
       <TextField label="Add a comment" sx={{ width: "80%", ml: -8, mr: 6 }}
        value={comment}
        onChange={(event) => setComment(event.target.value)}
       />
       <IconButton><SendIcon onClick={() => Post(idx)} sx={{ fontSize: '2rem' }} /></IconButton>
       {/* </Card> */}
      </Grid>

      <Grid container >
       <Grid sx={{ fontWeight: 'bold', fontSize: '1.2rem', mr: 1 }}>{item.name}</Grid>
       <Grid>{item.description}</Grid>
      </Grid>
     </Box>
    </>
   ))
   }

   {mainData.map((item, idx) => {
    if (idx === flag1) {
     return <Modal
      open={open2}
      onClose={handleClose2}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
     >
      <Box sx={style2}>
       <Grid justifyContent='center'>
        <img src={item.image} alt='' width='690rem' height='500rem'
         style={{ margin: '1rem auto' }} />
        {item.comment.length > 0 ?
         item.comment.map(comment => (
          <Grid sx={{ marginTop: 5, backgroundColor: '#EDEDED', borderRadius: '5px', p: 2 }}>
           <Grid sx={{ fontSize: '1.3rem', fontWeight: 'bold', mb: 1 }}>{item.name}</Grid>
           {comment}</Grid>
         )) :
         <span style={{ marginLeft: '30%', fontSize: '2rem', fontWeight: 'bold', color: 'black' }}>No Comments yet</span>
        }
       </Grid>
      </Box>
     </Modal>
    }
   })}


  </div >

 )
}
