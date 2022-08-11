import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
// import Typography from '@mui/material/Typography'
import Card from '@mui/joy/Card';
import { Typography } from '@mui/material';

const data = [
  {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
  },
];

export default function CarouselRatio() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'auto',
        width: '100%',
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {data.map((item) => (
        <Card
          row
          key={item.title}
          
          sx={{
            
            border:'50%',
            gap: 2,
            '--Card-padding': (theme) => theme.spacing(2),
          }}
        >
          <AspectRatio
            ratio="1"
            sx={{ minWidth: 100, borderRadius: '50%',border:'3px solid #E407A6',overflow:'auto'}}
          >
            <img
              src={`${item.src}?h=120&fit=crop&auto=format`}
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title} sx={{m:5, borderRadius:'50%'}}
            />
          </AspectRatio>
          {/* <Box sx={{ whiteSpace: 'nowrap' }}>
            <Typography fontWeight="md">{item.title}</Typography>
            <Typography level="body2">{item.description}</Typography>
          </Box> */}
        </Card>
      ))}
    </Box>
  );
}
