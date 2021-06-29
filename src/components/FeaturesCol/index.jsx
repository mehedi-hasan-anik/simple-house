import React from 'react';
import './FeaturesCol.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function FeatureCol({details, button}) {
    return (
        <div className="feature-col">
            <div className="col-lg-4">
						<div className="tm-feature">
                            <FontAwesomeIcon icon={faCoffee} />
							<p className="tm-feature-description">{details}</p>
							<a href="index.html" className="tm-btn tm-btn-primary">{button}</a>
						</div>
					</div>
        </div>
    )
}

export default FeatureCol
