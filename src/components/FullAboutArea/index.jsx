import React from 'react'
import './FullAboutArea.css';
import Footer from '../Footer';
import CommonWelcome from '../CommonWelcome';
import SinglePerson from '../SinglePerson';
import ScrollImage from '../ScrollImage';
import Features from '../Features';
import History from '../History';
import member1 from "../../components/Image/about-01.jpg";
import member2 from "../../components/Image/about-02.jpg";
import member3 from "../../components/Image/about-03.jpg";
import member4 from "../../components/Image/about-04.jpg";
import SocialMeida from '../IconArea';

import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function FullAboutArea() {
    return (
        <div className="full-about-area">
           <div className="container">
             
             <CommonWelcome 
               title="About Simple House"
               details="This is about page of simple house template. 
               You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect."
             />

         <div className="tm-container-inner tm-persons">
				<div className="row">
					<SinglePerson
					   image={member1}
					   position="Founder and CEO"
					   details="Vivamus cursus leo nec sem feugiat sagittis.
					   Duis ut feugiat odio, sit amet accumsan
					   odio."
					   name="Jennifer Soft">
						   <div className="icon-area"> 
             					<ul>
									<SocialMeida title="facebook" url="https://facebook.com" icon={faFacebook} />
									<SocialMeida title="instagram" url="https://instagram.com" icon={faInstagram} />
									<SocialMeida title="youtube" url="https://twitter.com" icon={faTwitter} />
							 	</ul>
							 </div>
					 </SinglePerson>
					
					<SinglePerson
					   image={member2}
					   position="Executive Chef"
					   details="Praesent non vulputate elit. Orci varius
					   natoque et magnis dis parturient, nascetur ridiculus mus."
					   name="Daisy Walker">
						   <div className="icon-area"> 
             					<ul>
									<SocialMeida title="facebook" url="https://facebook.com" icon={faFacebook} />
									<SocialMeida title="youtube" url="https://twitter.com" icon={faTwitter} />
							 	</ul>
							 </div>
					</SinglePerson>
					
					<SinglePerson
					   image={member3}
					   position="Kitchen Manager"
					   details="Aenean sapien sem, ultricies sed vulputate
					   et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae"
					   name="Florence Nelson">
						   <div className="icon-area"> 
             					<ul>
									<SocialMeida title="facebook" url="https://facebook.com" icon={faFacebook} />
									<SocialMeida title="instagram" url="https://instagram.com" icon={faInstagram} />	
							 	</ul>
							 </div>
				    </SinglePerson>

					
					<SinglePerson
					   image={member4}
					   position="Culinary Director"
					   details="Praesent non vulputate elit. Orci varius
					   natoque penatibus et magnis montes, nascetur ridiculus mus."
					   name="Valentina Martin">
						    <div className="icon-area"> 
             					<ul>
									<SocialMeida title="facebook" url="https://facebook.com" icon={faFacebook} />
									<SocialMeida title="instagram" url="https://instagram.com" icon={faInstagram} />
									<SocialMeida title="twitter" url="https://twitter.com" icon={faTwitter} />
									<SocialMeida title="youtube" url="https://youtube.com" icon={faYoutube} />
							 	</ul>
							 </div>
					</SinglePerson>
					
				</div>
			</div>
			 <ScrollImage/>
             <Features/>
			 <History/>
		    <Footer/>
	</div>
        </div>
    )
}

export default FullAboutArea
