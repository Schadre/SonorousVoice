import { Link } from 'react-router-dom';
import Background from '../assets/images/Home.jpeg'
import Navbar from '../components/Navbar';

function Home() {
  return (
    
    <div 
    style={{ 
      backgroundImage: `url(${ Background })`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
  }} 
    className='fixed top-0 w-full h-full'>
      <Navbar />
      <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(5px)',
        height: '100vh'
      }}
      className='flex flex-col justify-center items-center'>
        <h1 className=' text-center text-5xl text-blue-200 font-bold ml-10 p-5'>
          The Sonorous Voice
        </h1>
        <p className=' text-center text-2xl text-blue-200 font-bold ml-10'>Voice Artist</p>
      </div>
    </div>
  );
}

export default Home;