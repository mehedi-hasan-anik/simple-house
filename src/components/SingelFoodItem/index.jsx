import React from 'react'
import './SingleFoodItem.css';

function SingelFoodItem({image, title, details, price}) {
    return (
              <div className="single-food-item">
                    <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                        <figure>
                            <img src={image} alt="" className="img-fluid tm-gallery-img" />
                            <figcaption>
                                <h4 className="tm-gallery-title">{title}</h4>
                                <p className="tm-gallery-description">{details}</p>
                                <p className="tm-gallery-price">{price}</p>
                            </figcaption>
                        </figure>
                    </article>
                    </div>
        
    )
}

export default SingelFoodItem
