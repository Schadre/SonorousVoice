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
      }}
      className='fixed top-0 w-full h-full'
    >
      <Navbar />
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(5px)',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          paddingLeft: '80px',
         paddingRight: '20px'

        }}
      >
        <div
          style={{
            width: '700px',
            height: '550px',
            backgroundColor: 'rgb(13, 71, 161, 0.5)',
            padding: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'rgb(144, 202, 249, 0.8)',
          }}
        >
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl ut nunc dictum tempor eu at ante. Nullam vitae
            eleifend mi. Integer ac risus nisl. Curabitur lobortis interdum risus, at lobortis diam ultrices non. Quisque
            ultrices diam a lacinia malesuada. In hac habitasse platea dictumst. Donec accumsan risus et arcu fermentum
            scelerisque. Nulla facilisi.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <img
              src={Family}
              alt='Photo'
              style={{
                maxWidth: '60%',
                maxHeight: '70%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
