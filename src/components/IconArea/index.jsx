import React from 'react';
import './Iconarea.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function IconArea() {
    return (
        <div className="icon-area"> 
             <ul>
                 <li><Link to="https://fb.com" className="tm-social-link"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                 <li><Link to="https://fb.com" className="tm-social-link"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                 <li><Link to="https://fb.com" className="tm-social-link"><FontAwesomeIcon icon={faTwitter} /></Link>	</li>
            </ul>				
        </div>
    )
}

export default IconArea
