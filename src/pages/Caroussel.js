import React from 'react'
import category from "../assets/data/data"
import { Carousel } from 'react-bootstrap';

import './Caroussel.css';
const Caroussel = () => {
  return (
    <div>
   <div className="carousel-container" style={{ marginTop:"10px" , marginBottom:"10px"}}>
      
      <Carousel>
        {category.slice(0, 2).map((cat, index) => (
          <Carousel.Item key={index}>
            <Carousel.Caption >
              <h5 style={{ color: "black"}}>{cat.name}</h5>
              <p style={{ color: "black" }}>$ {cat.price}</p>
            </Carousel.Caption>
            <img className="d-block w-100" src={cat.cover} alt={cat.name} style={{height: '70%'}}/>

          </Carousel.Item>
        ))}
      </Carousel>
    </div>


    </div>
  )
}

export default Caroussel