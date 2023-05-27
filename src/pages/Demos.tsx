import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import Background from '../assets/images/Demos.jpeg';
import Navbar from '../components/Navbar';

const cardData = [
  {
    title: 'Voice Sample 1',
    artist: 'Artist 1',
  },
  {
    title: 'Voice Sample 2',
    artist: 'Artist 2',
  },
  {
    title: 'Voice Sample 3',
    artist: 'Artist 3',
  },
  {
    title: 'Voice Sample 4',
    artist: 'Artist 4',
  },
  {
    title: 'Voice Sample 5',
    artist: 'Artist 5',
  },
  {
    title: 'Voice Sample 6',
    artist: 'Artist 6',
  },
];

export default function Demos() {
  const theme = useTheme();
  const [playing, setPlaying] = React.useState(false);
  const [currentCardIndex, setCurrentCardIndex] = React.useState(null);

  const handlePlayStop = (index) => {
    if (currentCardIndex === index) {
      setPlaying(false);
      setCurrentCardIndex(null);
    } else {
      setPlaying(true);
      setCurrentCardIndex(index);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />

      <div
        style={{
          flex: 1,
          paddingLeft: '60px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '100px'
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            padding: '0 20px',
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              color: theme.palette.primary.light,
              marginBottom: '20px',
            }}
          >
            Demos
          </h1>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
            }}
          >
            {cardData.map((card, index) => (
              <Card
                key={index}
                sx={{
                  backgroundColor:
                    currentCardIndex === index
                      ? theme.palette.primary.main
                      : theme.palette.primary.main + '80', // Use a transparent background color with 80% opacity
                  color: theme.palette.primary.contrastText,
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {card.title}
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                      {card.artist}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      py: 1,
                    }}
                  >
                    <IconButton
                      aria-label="play/stop"
                      onClick={() => handlePlayStop(index)}
                    >
                      {playing && currentCardIndex === index ? (
                        <StopIcon sx={{ height: 38, width: 38 }} />
                      ) : (
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                      )}
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
