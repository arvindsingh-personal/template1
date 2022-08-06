import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useContext } from 'react';
import axios from 'axios';
import { bookContext } from './App';
import { NavLink } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
  let { setBook, bookName, setBookName } = useContext(bookContext);

  const url = `https://openlibrary.org/search.json?q=${bookName}&mode=ebooks&has_fulltext=true`;



  const searchBook = (event) => {
    axios.get(url).then((response) => {
      setBook(response.data.docs)
      console.log(response.data.docs)
    })
  }

  return (
    <Box >
      <AppBar sx={{ backgroundColor: 'brown' }} position='static' >
        <Toolbar >
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <NavLink to='/' style={{ textDecoration: 'none', color: 'white', fontSize: '3vw' }} > Book</NavLink>
          </Typography>
          <Search >
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={bookName}
              onChange={event => setBookName(event.target.value)}
            />
          </Search>
          <Button variant="outlined" sx={{ color: 'white', border: '1px solid white', fontWeight: '900' }} onClick={searchBook}>Search</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
