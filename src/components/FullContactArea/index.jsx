import React from 'react';
import './FullContactArea.css';
import CommonWelcome from '../CommonWelcome';
import FormArea from '../FormArea';
import GoogleArea from '../GoogleArea';
import FaqArea from '../FaqArea';
import Footer from '../Footer';

function FullContactArea() {
    return (
        <div className="full-contact-area container">
            <CommonWelcome
               title="Contact Page"
               details="You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template."
            />
            <FormArea/>
            <GoogleArea/>
            <FaqArea/>
            <Footer/>
	
        </div>
    )
}

export default FullContactArea
