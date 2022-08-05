import { bookContext } from './App';
import './book.css'
import { useContext } from 'react';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { orange } from '@mui/material/colors';
import { lightBlue } from '@mui/material/colors';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ColorButton = styled(Button)(({ theme }) => ({
  fontSize: 15,
  color: theme.palette.getContrastText(lightBlue[900]),
  backgroundColor: orange[500],
  '&:hover': {
    backgroundColor: orange[400],
  },
}));

export default function Book() {
  let { book } = useContext(bookContext);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      textAlign: 'left',
      backgroundColor: '#ddfff5',
      padding: '2.5vw',
      width: '93.5vw'
    }}>
      {book.map((item, index) => (
        <div className='book'>
          <div className='img'>
            <p><NavLink to='/singlePage' state={{id:item.key}}>
              <img src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`} />
            </NavLink></p>
          </div>
          <div className='content'>
            <p style={{
              fontWeight: '600', fontSize: '1.4rem', marginBottom: '0'
            }}
            >{item.title_suggest}</p>
            <p><span style={{ color: 'rgb(66, 66, 66)', marginTop: '0' }}>by </span>
              {item.author_name ?
                item.author_name.map(author => (
                  <span style={{ fontSize: '1.1rem' }}>{author} </span>
                ))
                : null}
            </p>
            <p style={{ marginTop: '0', fontSize: '0.89rem', color: 'rgba(100, 100, 100' }}>First Published in {item.first_publish_year}</p>
            <p style={{ marginTop: '0', fontSize: '0.89rem', color: 'rgba(100, 100, 100' }}><span style={{ color: 'rgb(243, 102, 21)' }}>{item.edition_count} editions</span>
              {item.language ? <span style={{ textDecoration: 'underline' }}> in {item.language.length} language</span> : null}
              <span> --{item.ia.length} previewable</span>
            </p>
          </div>
          <div className='btns'>
            <button><NavLink to='/singlePage' state={{id:item.key}}>
              View
              </NavLink>
            </button>
            <button>Want to Read <span> | </span><i class="fa-solid fa-caret-down"></i></button>
          </div>
        </div>
      )
      )}


    </div>
  )
}
