import React from 'react';
import './FeaturesCol.css';

function FeatureCol({details, title, icon}) {
    return (
        <div className="feature-col">
            <div className="col-lg-4">
						<div className="tm-feature">
                            {icon}
							<p className="tm-feature-description">{details}</p>
							<a href="index.html" className="tm-btn tm-btn-primary">{title}</a>
						</div>
					</div>
        </div>
    )
}

export default FeatureCol
