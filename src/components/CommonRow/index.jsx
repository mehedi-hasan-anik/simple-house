import React from 'react';
import './CommonRow.css';

function CommonRow({image, details1, details2, title, button}) {
    return (
        <div>
            <div class="tm-container-inner tm-history">
				<div class="row">
					<div class="col-12">
						<div class="tm-history-inner">
							<img src={image} alt="" class="img-fluid tm-history-img" />
							<div class="tm-history-text"> 
								<h4 class="tm-history-title">{title}</h4>
								<p class="tm-mb-p">{details1}</p>
								<p>{details2}</p>
                                <button>{button}</button>
							</div>
						</div>	
					</div>
				</div>
			</div>
        </div>
    )
}

export default CommonRow
