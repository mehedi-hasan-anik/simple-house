import React, { useState } from 'react'
import './FullHomeArea.css';
import {Link} from "react-router-dom";
import foodData from '../../data/foodData.json';
import Maecenas from '../Maecenas';
import Footer from '../Footer';
import Pizza from '../Pizza';

function FullHomeArea() {
    const  [foodItems, setFoodItems] = useState([])

    const foodHandler =(event)=>{
        const foodName = event.target.textContent.toLowerCase();
        const selectedFood = foodData.filter(item => item.category === foodName);
        setFoodItems(selectedFood);
    }

    
    return (
        <div className="full-home-area">
            <div className="row tm-welcome-section">
				<h2 className="col-12 text-center tm-section-title">Welcome to Simple House</h2>
				<p className="col-12 text-center">Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
			</div>
			
			<div className="tm-paging-links">
				<nav>
					<ul>
                        <li className="tm-paging-item"><Link to="/" onClick={foodHandler} className="tm-paging-link active">Pizza</Link></li>
                        <li className="tm-paging-item"><Link to="/"  onClick={foodHandler} className="tm-paging-link">Salad</Link></li>
                        <li className="tm-paging-item"><Link to="/"  onClick={foodHandler} className="tm-paging-link">Noodle</Link></li>
					</ul>
				</nav>
			</div>
            <div className="singleItem">
                <div className="row tm-gallery">
                       {
                            foodItems.map(item =>
                                <Pizza
                                key={item.id}
                                title={item.title}
                                image={item.image}
                                details={item.details}
                                price={item.price}
                                />
                            )
                        }
                </div>
            </div>

            <Maecenas/>
            <Footer />
        </div>
    )
}

export default FullHomeArea
