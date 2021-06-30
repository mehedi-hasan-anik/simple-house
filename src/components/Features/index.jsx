import React from 'react';
import './Features.css';
import featuresData from '../../data/features.json';
import FeatureCol from '../FeaturesCol';

function Features() {
    return (
        <div className="features">
            <div className="tm-container-inner tm-features">
				<div className="row">
                    {
                        featuresData.map(item =>
                            <FeatureCol
                            key={item.id}
                            details={item.details}
                            button={item.button}
                            bgColor={item.bgColor}
                            />
                        )
                    }
				</div>
			</div>
        </div>
    )
}

export default Features
