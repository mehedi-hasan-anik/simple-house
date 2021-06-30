import React from 'react';
import './CommonRow.css';

function CommonRow({image, details1, details2, title, button}) {
    return (
        <div>
            <div className="tm-container-inner tm-history">
				<div className="row">
					<div className="col-12">
						<div className="tm-history-inner">
							<img src={image} alt="" className="img-fluid tm-history-img" />
							<div className="tm-history-text"> 
								<h4 className="tm-history-title">{title}</h4>
								<p className="tm-mb-p">{details1}</p>
								<p>{details2}</p>
                                <button>{button}</button>
							</div>
						</div>	
					</div>
				</div>
			</div>
        </div>
    )
}

export default CommonRow
