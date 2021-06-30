import React from 'react';
import './Iconarea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialMeida({title, url, icon}) {
    return (
        <li>
            <a href={url} className="tm-social-link" target="_blank" title={title} rel="noreferrer">
            <FontAwesomeIcon className="tm-social-icon" icon={icon} />
        </a>
    </li>
    )
}

export default SocialMeida
