import React, { Component,useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import {Col,Row} from 'react-materialize'
import Footer from './Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight
 
} from "@fortawesome/free-solid-svg-icons";
export default function Addcategory(){
    return (
        <div>
    
    <div className="categorypost card-panel teal lighten-2">
    <h3  className="headcategory">CATEGORY</h3> 
   
        <Row>
           <Link to="/post/property"> Property<FontAwesomeIcon icon={faArrowRight}/> </Link> 
        </Row>
        <Row>
        <Link to="/post/Automobile"> Automobile</Link><FontAwesomeIcon icon={faArrowRight}/>
        </Row>
        <Row>
        <Link to="/post/Electronics"> Electronics </Link><FontAwesomeIcon icon={faArrowRight}/>
        </Row>
        <Row>
        <Link to="/post/Mobiles">  Mobiles </Link><FontAwesomeIcon icon={faArrowRight}/>
        </Row>
        <Row>
        <Link to="/post/FashionBeauty"> Fashion & Beauty </Link><FontAwesomeIcon icon={faArrowRight}/>
        </Row>
        <Row>
        <Link to="/post/Furnitures"> Furnitures</Link> <FontAwesomeIcon icon={faArrowRight}/>
        </Row>
        <Row>
        <Link to="/post/ElectricalAppiances">Electrical Appliances</Link> <FontAwesomeIcon icon={faArrowRight}/>
        </Row>
      
        
        </div>
   
        </div>);
}