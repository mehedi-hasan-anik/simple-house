import React, { useEffect, useState } from 'react'
import './FullHomeArea.css';
import foodData from '../../data/foodData.json';
import Maecenas from '../Maecenas';
import Footer from '../Footer';
import SingelFoodItem from '../SingelFoodItem';
import CommonWelcome from '../CommonWelcome';
import {NavLink} from 'react-router-dom';

function FullHomeArea() {
    const  [foodItems, setFoodItems] = useState([])

    useEffect(() => {
         setFoodItems(foodData.slice(0, 8));
    }, [])

    const foodHandler =(event)=>{
        const foodName = event.target.textContent.toLowerCase();
        const selectedFood = foodData.filter(item => item.category === foodName);
        setFoodItems(selectedFood);
    }

    
    return (
        <div className="full-home-area conatiner">
            <div>
                <CommonWelcome
                  title="Welcome to Simple House"
                  details="Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites."
                />
			</div>
			
			<div className="tm-paging-links">
				<nav>
					<ul>
                       <li className="tm-paging-item"><NavLink exact  to="/" activeClassName="selected" onClick={foodHandler} className="tm-paging-link">Pizza</NavLink></li>

                       <li className="tm-paging-item"><NavLink exact to="/"  activeClassName="selected" onClick={foodHandler} className="tm-paging-link">Salad</NavLink></li>

                       <li className="tm-paging-item"><NavLink exact   to="/" activeClassName="selected" onClick={foodHandler} className="tm-paging-link">Noodle</NavLink></li>
					</ul>
				</nav>
			</div>
                <div className="row tm-gallery"> 
                    {
                        foodItems && foodItems.map(item =>
                            <SingelFoodItem
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            details={item.details}
                            price={item.price}
                            />
                        )
                    }
                </div>
          

            <Maecenas/>
            <Footer />
        </div>
    )
}

export default FullHomeArea
