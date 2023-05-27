import { Link } from 'react-router-dom';
import Background from '../assets/images/Contact.jpeg';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <div 
    style={{ 
      backgroundImage: `url(${ Background })`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      overflowY: 'auto' 
  }} 
    className='fixed top-0 w-full h-full'>
      <Navbar />
      <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(5px)',
        minHeight: '100vh',
        minWidth: '50vh',
        paddingLeft: '40px'
      }}
      className='flex flex-col justify-center items-center'>
        <h1 className='text-center text-5xl text-blue-200 font-bold'>
          Contact Us
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;