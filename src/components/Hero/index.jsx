import React from 'react'
import './Hero.css';
import {Link} from 'react-router-dom'
import logo from "../../components/Image/simple-house-logo.png";
export function Hero({bgImage, titile, description}) {
    return (
        <div className="placeholder container">
			<div className="parallax-window" data-parallax="scroll" style={{backgroundImage: `url(${bgImage})`}}>
				<div className="tm-header">
					<div className="row tm-header-inner">
						<div className="col-md-6 col-12">
							<img src={logo} alt="Logo" className="tm-site-logo" /> 
							<div className="tm-site-text-box">
								<h1 className="tm-site-title">{titile}</h1>
								<h6 className="tm-site-description">{description}</h6>	
							</div>
						</div>

						<nav className="col-md-6 col-12 tm-nav">
							<ul className="tm-nav-ul">
                                <li className="tm-nav-li"><Link to="/home" className="tm-nav-link active">Home</Link></li>
                                <li className="tm-nav-li"><Link to="/about" className="tm-nav-link active">About</Link></li>
                                <li className="tm-nav-li"><Link to="/contact" className="tm-nav-link active">Contact</Link></li>
							</ul>
						</nav>	
					</div>
				</div>
			</div>
		</div>
    )
}

