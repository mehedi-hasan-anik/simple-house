import React from 'react';
import './ScrollImage.css';
import scrollImage from '../../components/Image/about-05.jpg';

function ScrollImage() {
    return (
        <div className="scroll-image">
            <div className="scroll-image tm-featured-image">
				<div className="row">
					<div className="col-12">
						<div className="placeholder-2">
							<div className="parallax-window-2" data-parallax="scroll" style={{backgroundImage: `url(${scrollImage})`,}}>
								<div className="overlay">
									
								</div>
                            </div>		
						</div>
					</div>
				</div>
			</div>
            </div>  
        
    )
}

export default ScrollImage
