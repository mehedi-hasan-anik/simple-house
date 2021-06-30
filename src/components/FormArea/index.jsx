import React from 'react';
import './FormArea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function FormArea() {
    return (
        <div className="form-area container">
            <div className="tm-container-inner-2 tm-contact-section">
				<div className="row">
					<div className="col-md-6">
						<form action="" method="POST" className="tm-contact-form">
					        <div className="form-group">
					          <input type="text" name="name" className="form-control" placeholder="Name" required="" />
					        </div>
					        
					        <div className="form-group">
					          <input type="email" name="email" className="form-control" placeholder="Email" required="" />
					        </div>
				
					        <div className="form-group">
					          <textarea rows="5" name="message" className="form-control" placeholder="Message" required=""></textarea>
					        </div>
					
					        <div className="form-group tm-d-flex">
					          <button type="submit" className="tm-btn tm-btn-success tm-btn-right">
					            Send
					          </button>
					        </div>
						</form>
					</div>
					<div className="col-md-6">
						<div className="tm-address-box">
							<h4 className="tm-info-title tm-text-success">Our Address</h4>
							<address>
								180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550
							</address>
							<a href="tel:080-090-0110" className="tm-contact-link">
                               <FontAwesomeIcon className="tm-contact-icon" icon={faPhone} />  080-090-0110 
							</a>
							<a href="mailto:info@company.co" className="tm-contact-link">
                                <FontAwesomeIcon className="tm-contact-icon" icon={faEnvelope} /> info@company.com
							</a>
							<div className="tm-contact-social">
								<a href="https://fb.com/templatemo" className="tm-social-link"><FontAwesomeIcon className="tm-social-icon" icon={faFacebook} /></a>
								<a href="https://twitter.com" className="tm-social-link"><FontAwesomeIcon className="tm-social-icon" icon={faTwitter} /></a>
								<a href="https://instragram.com" className="tm-social-link"><FontAwesomeIcon className="tm-social-icon" icon={faInstagram} /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default FormArea
