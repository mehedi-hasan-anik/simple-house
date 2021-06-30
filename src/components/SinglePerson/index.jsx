import React from 'react';
import './SinglePerson.css';

function SinglePerson({image, position, details, name, children}) {
    return (
         <article className="col-lg-6">
			 <figure className="tm-person">
				<div className="row">
                   <div className="col-md-4 tm-person-left">
                       <img src={image} alt="" className="img-fluid tm-person-img singleImage" />
                   </div>
                      <div className="col-md-8 tm-person-right">
                          <figcaption className="tm-person-description">
							  <h4 className="tm-person-name singleName">{name}</h4>
							  <p className="tm-person-title singlePosition">{position}</p>
							  <p className="tm-person-about singleDetails">{details}</p>
                              {children}
						  </figcaption>
                       </div>
                </div>
			</figure>
		 </article>
    )
}

export default SinglePerson
