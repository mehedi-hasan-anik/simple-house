import React from 'react'
import './FullAboutArea.css';
import Footer from '../Footer';
import aboutPerson from '../../data/aboutPerson.json';
import CommonWelcome from '../CommonWelcome';
import SinglePerson from '../SinglePerson';
import ScrollImage from '../ScrollImage';
import Features from '../Features';
import History from '../History';

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
                       {
                            aboutPerson.map(item =>
                                <SinglePerson
                                key={item.id}
                                name={item.name}
                                position={item.position}
                                details={item.details}
                                image={item.image}
                                />
                            )
                        }
                </div>
             </div>
             
			 <ScrollImage/>
             <Features/>
			 <History/>
		

			{/* <div className="tm-container-inner tm-features">
				<div className="row">
					<div className="col-lg-4">
						<div className="tm-feature">
							<i className="fas fa-4x fa-pepper-hot tm-feature-icon"></i>
							<p className="tm-feature-description">Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.</p>
							<a href="index.html" className="tm-btn tm-btn-primary">Read More</a>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="tm-feature">
							<i className="fas fa-4x fa-seedling tm-feature-icon"></i>
							<p className="tm-feature-description">Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.</p>
							<a href="index.html" className="tm-btn tm-btn-success">Read More</a>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="tm-feature">
							<i className="fas fa-4x fa-cocktail tm-feature-icon"></i>
							<p className="tm-feature-description">Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.</p>
							<a href="index.html" className="tm-btn tm-btn-danger">Read More</a>
						</div>
					</div>
				</div>
			</div> */}
			{/* <div className="tm-container-inner tm-history">
				<div className="row">
					<div className="col-12">
						<div className="tm-history-inner">
							<img src="" alt="Image" className="img-fluid tm-history-img" />
							<div className="tm-history-text"> 
								<h4 className="tm-history-title">History of our restaurant</h4>
								<p className="tm-mb-p">Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.</p>
								<p>Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to <a href="https://templatemo.com/contact">contact TemplateMo</a> for additional permissions about our templates. Thank you.</p>
							</div>
						</div>	
					</div>
				</div>
			</div> */}
		

		<Footer/>
	</div>
        </div>
    )
}

export default FullAboutArea
