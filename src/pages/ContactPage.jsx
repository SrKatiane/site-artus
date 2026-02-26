import React, { useEffect } from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
    // Scroll to top when page is loaded
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page-wrapper" style={{ paddingTop: '80px' }}>
            <Contact />
        </div>
    );
};

export default ContactPage;
