import React, { useState } from 'react';
import './FaqSingleRow.css';

function FaqsSingleRow({title, details, children}) {
    const [show, setShow] = useState(false);
    return (
        <div className="faq-single-row">
            <button className="accordion"  onClick={() => setShow(!show)}>{title}</button>
				{
                    show && <div className="panel">
                              <p>{details}</p>
                            </div>
                }
                {children}
        </div>
    )
}

export default FaqsSingleRow
