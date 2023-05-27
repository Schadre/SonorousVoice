import { Link } from 'react-router-dom';
import Background from '../assets/images/About.jpeg';
import Navbar from '../components/Navbar';
import Family from '../assets/images/Family.jpeg'

function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'auto'
      }}
      className='fixed top-0 w-full h-full'
    >
      <Navbar />
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(5px)',
          minHeight: '90vh',
          minWidth: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          paddingLeft: '65px',
          paddingBottom: '20px'
        }}
        className='flex flex-col justify-center items-center'>
        <h1 className='text-center text-5xl text-blue-200 font-bold p-10'>
          About Me</h1>
        <div
          style={{
            maxWidth: '85%',
            maxHeight: '80%',
            backgroundColor: 'rgb(13, 71, 161, 0.5)',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'rgb(144, 202, 249, 0.8)',
          }}
        >
          <p className='p-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl ut nunc dictum tempor eu at ante. Nullam vitae
            eleifend mi. Integer ac risus nisl. Curabitur lobortis interdum risus, at lobortis diam ultrices non. Quisque
            ultrices diam a lacinia malesuada. In hac habitasse platea dictumst. Donec accumsan risus et arcu fermentum
            scelerisque. Nulla facilisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi architecto asperiores 
            facilis voluptates, vel delectus explicabo quas dolore doloremque vitae qui perferendis error corporis harum a 
            corrupti voluptatem provident voluptatibus fuga nesciunt ad, quibusdam adipisci alias nobis? Nihil laborum, 
            asperiores veniam nostrum sit quis commodi voluptatem impedit voluptates ab beatae.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '80%',
              height: '80%',
            }}
          >
            <img
              src={Family}
              alt='Photo'
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                padding: '5px',
                paddingBottom: '20px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
