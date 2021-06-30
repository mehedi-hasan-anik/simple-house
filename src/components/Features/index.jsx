import React from 'react';
import './Features.css';
import FeatureCol from '../../components/FeaturesCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFan, faFastForward } from '@fortawesome/free-solid-svg-icons'


function Features() {
    return (
        <div className="features">
            <div className="tm-container-inner tm-features">
				<div className="row">
                    <FeatureCol
                        title="Read More"
                        details="Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante."
                        icon={<FontAwesomeIcon icon={faCoffee} />}
                    />
                     <FeatureCol
                        title="Read More"
                        details="Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget."
                        icon={<FontAwesomeIcon icon={faFan} />}
                    />
                     <FeatureCol
                        title="Read More"
                        details="Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit."
                        icon={<FontAwesomeIcon icon={faFastForward} />}
                    />
                    
				</div>
			</div>
        </div>
    )
}

export default Features
