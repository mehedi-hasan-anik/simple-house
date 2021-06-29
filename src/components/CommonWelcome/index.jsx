import React from 'react'
import './CommonWelcome.css';

function CommonWelcome({title, details}) {
    return (
        <div className="commonWelcome-area">
            <div className="row tm-welcome-section">
              <h2 className="col-12 text-center tm-section-title">{title}</h2>
              <p className="col-12 text-center">{details}</p>
            </div>
       </div>
    )
}

export default CommonWelcome
