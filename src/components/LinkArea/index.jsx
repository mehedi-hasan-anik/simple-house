import React from 'react';
import './LinkArea.css';

function LinkArea({url, text}) {
    return (
        <div>
            <a href={url}>{text}</a>
        </div>
    )
}

export default LinkArea
