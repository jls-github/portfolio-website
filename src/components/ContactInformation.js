import React from 'react';
import ContactForm from './ContactForm.js';

const ContactInformation = () => {
    return <div className="contact-wrapper">
        <div className="contact-container">

            <h2>Contact me!</h2>
            <div>Email: ---</div>
            <div>Phone: ---</div>
            <ContactForm />
        </div>
    </div>
};

export default ContactInformation;