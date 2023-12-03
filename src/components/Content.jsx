import React from 'react';
import heroImage from '../assets/image-hero-desktop@2x.png';


function Content(props) {
  return <>
      <div className="container-fluid hero-container padding-sides">
        <div className="row">
          <div className="col-lg-5 hero-content align-items-center">
            <h1 className='heading'>{props.heading} <br />{props.head}</h1>
            <p className='hero-para'> {props.para} <br /> {props.para1} <br /> {props.para2} </p>
            <button className='btn btn-secondary hero-btn'><p>{props.data}</p></button>
          </div>
          <div className="col-lg-6 offset-1 hero-image position-absolute">
            <img className="img" src= {heroImage} alt="a lady drinking a coffee while seeing laptop"  />
          </div>
        </div>
      </div>
  </>
}

export default Content;