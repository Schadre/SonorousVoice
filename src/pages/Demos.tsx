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
import Kang from '../assets/VoiceOvers/Kang.mp3'
import Gene from '../assets/VoiceOvers/Gene.mp3'
import Nutella from '../assets/VoiceOvers/Nutella.mp3'

const cardData = [
  {
    title: 'Kang',
    category: 'Animation',
    audioUrl: Kang,
  },
  {
    title: 'Gene',
    category: 'Commerical',
    audioUrl: Gene,
  },
  {
    title: 'Nutella',
    category: 'Commerical',
    audioUrl: Nutella,
  },
  {
    title: 'NBA',
    category: 'Announcing',
    audioUrl: Kang,
  },
  {
    title: 'The Land',
    category: 'Narration',
    audioUrl: Gene,
  },
  {
    title: 'Tribe',
    category: 'Audio Books',
    audioUrl: Gene,
  },
];

export default function Demos() {
  const theme = useTheme();
  const [playing, setPlaying] = React.useState(false);
  const [currentCardIndex, setCurrentCardIndex] = React.useState(null);

  const handlePlayStop = (index: any) => {
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
          paddingRight: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '80px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            padding: '0 20px',
          }}
        >
          <h1 className='text-center text-5xl text-blue-200 font-bold p-10'>
            Demos
          </h1>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
            }}
          >
            {cardData.map((card, index) => (
              <Card
                key={index}
                sx={{
                  backgroundColor: 'rgb(13, 71, 161, 0.5)',
                  color: '#90caf9',
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {card.title}
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                      {card.category}
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
                    {currentCardIndex == index && (
                      <audio
                        src={card.audioUrl}
                        autoPlay={playing}
                        onEnded={() =>setPlaying(false)} />
                    )}
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
