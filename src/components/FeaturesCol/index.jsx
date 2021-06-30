import React from 'react';
import './FeaturesCol.css';

function FeatureCol({details, title, icon, bgColor}) {
  
    return (
        <div className="feature-col">
            <div className="col-lg-4">
				<div className="tm-feature">
                      {icon}
					  <p className="tm-feature-description">{details}</p>
					  <a href="/home" className="tm-btn tm-btn-primary" style={{background:{bgColor}}}>{title}</a>
				</div>
			</div>
        </div>
    )
}

export default FeatureCol
