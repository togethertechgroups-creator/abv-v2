import ContactForm from './ContactForm';
import ContactMap from './ContactMap'
import ContactHero from './ContactHero';
import './Contact.css';

function Contact() {
  return (
    <div className='contact'>
      < ContactHero />
    <ContactMap />
      <ContactForm />
       </div>
  );
}

export default Contact;
