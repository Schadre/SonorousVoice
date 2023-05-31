import { Link } from 'react-router-dom';
import Background from '../assets/images/About.jpeg';
import Navbar from '../components/Navbar';
import Family from '../assets/images/Family.jpeg';
import Dad from '../assets/images/Studio.jpeg';

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
          minHeight: '100vh',
          minWidth: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'left',
          paddingLeft: '65px',
          paddingBottom: '30px'
        }}
        className='flex flex-col justify-center items-center'>
        <h1 className='text-center text-5xl text-blue-200 font-bold p-10'>
          About Me
        </h1>
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
            Hi there, I'm Arthur Dent. Over the past 20+ years, I've built a career around my voice, starting as a Naval Officer and then transitioning into the Voiceover industry in 2017. My genuine and authentic style of communication, coupled with a deep and comforting voice, often highlighted with a slight southern accent, has helped me establish a unique connection with my listeners.

            Over the years, I've had the pleasure of working with a wide range of customers, offering a variety of voiceover services. What I've consistently heard is that my ability to speak directly to the listener in a way that feels real and authentic is what truly sets me apart. I believe this connection is what makes my work resonate and I'm proud of the relationships I've built because of it.

            But my work is just one aspect of my life. I'm also a dedicated family man who treasures the quality time I get to spend with my loved ones. Balancing my passion for my work with my love for my family is a vital part of who I am.

            Whether behind the microphone or at home, I live my life with authenticity and a genuine passion for what I do. Thanks for stopping by to learn a bit about me!
          </p>
          <div
            style={{
              display: 'grid',
              gap: '5px',
              maxWidth: '90%',
              maxHeight: '80%',
              marginTop: '20px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
              <img
                src={Family}
                alt='a picture of a family'
                style={{ maxWidth: '80%', maxHeight: '80%', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
              <img
                src={Dad}
                alt='A man in the studio'
                style={{ maxWidth: '80%', maxHeight: '80%', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)'}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
