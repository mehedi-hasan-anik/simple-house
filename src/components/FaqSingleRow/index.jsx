import React, { useState } from 'react';
import './FaqSingleRow.css';

function FaqsSingleRow({button, details}) {
    const [show, setShow] = useState(false);
    return (
        <div className="faq-single-row">
            <button className="accordion"  onClick={() => setShow(!show)}>{button}</button>
				{
                    show && <div className="panel">
                              <p>{details}</p>
                            </div>
                }
        </div>
    )
}

export default FaqsSingleRow
