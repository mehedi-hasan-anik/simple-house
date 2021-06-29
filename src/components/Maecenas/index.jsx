import React from 'react';
import './Maecenas.css';
import maecenasPhoto from '../../components/Image/img-01.jpg';

function Maecenas() {
    return (
        <div className="maecenas-area">
            <div className="tm-section tm-container-inner">
				<div className="row">
					<div className="col-md-6 maecenas-area-left">
						<figure className="tm-description-figure">
							<img src={maecenasPhoto} alt="" className="img-fluid" />
						</figure>
					</div>
					<div className="col-md-6 maecenas-area-right">
						<div className="tm-description-box"> 
							<h4 className="tm-gallery-title">Maecenas nulla neque</h4>
							<p className="tm-mb-45">Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to <a rel="nofollow" href="https://templatemo.com/contact">talk to us</a> for additional permissions about our templates. Thank you.</p>
							<a href="/" className="tm-btn tm-btn-default tm-right">Read More</a>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default Maecenas
