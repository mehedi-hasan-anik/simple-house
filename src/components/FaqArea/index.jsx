import React from 'react';
import './FaqArea.css';
import FaqsSingleRow from '../FaqSingleRow';
import CommonWelcome from '../CommonWelcome';
import LinkArea from '../LinkArea';

function FaqArea() {
    return (
        <div className="faq-area">
            <div className="tm-container-inner-2 tm-info-section">
				<div className="row">
				
					<div className="col-12 tm-faq">
                        <CommonWelcome
                           title="FAQs"
                           details="This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you."
                        />

						<div className="tm-accordion">
                            <FaqsSingleRow
                               title="1. Fusce eu lorem et dui #09C maximus varius?"
                               details="#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat."
                            />
                             <FaqsSingleRow
                               title="2. Vestibulum #999 ante ipsum primis in faucibus orci?"
                               details="Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta."
                            />
                             <FaqsSingleRow
                               title="3. Can I redistribute this template as a ZIP file?"
                               details="Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to contact TemplateMo for additional permissions about our templates. Thank you." >
                                  <LinkArea 
                                     url="www.facebook.com"
                                     text="contact TemplateMo"
                                  />
                             </FaqsSingleRow>
                            
                             <FaqsSingleRow
                               title="4. Ut ac erat sit amet neque efficitur faucibus et in lectus?"
                               details="Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim."
                            />
                            
						</div>	
					</div>
				</div>
			</div>
        </div>
    )
}

export default FaqArea
