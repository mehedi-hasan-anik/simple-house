import React from 'react';
import './Histroy.css';
import HistoryPhoto from '../../components/Image/about-06.jpg';

function History() {
    return (
        <div className="history-area"> 
           <div className="tm-container-inner tm-history">
				<div className="row">
					<div className="col-12">
						<div className="tm-history-inner">
							<img src={HistoryPhoto} alt="" className="img-fluid tm-history-img" />
							<div className="tm-history-text"> 
								<h4 className="tm-history-title">History of our restaurant</h4>
								<p className="tm-mb-p">Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.</p>
								<p>Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to <a href="https://templatemo.com/contact">contact TemplateMo</a> for additional permissions about our templates. Thank you.</p>
							</div>
						</div>	
					</div>
				</div>
			</div>
        </div>
    )
}

export default History
