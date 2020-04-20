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
    <h3 style={{textAlign:'center'}}>CATEGORY OF POST</h3>
    <div className="categorypost">
            
        <Row>
           <Link to="/post/property"> Property</Link> <FontAwesomeIcon icon={faArrowRight}/> 
        </Row>
        <Row>
            Automobile<FontAwesomeIcon icon={faArrowRight}/>
        </Row>
        <Row>
            Electronics <FontAwesomeIcon icon={faArrowRight}/>
        </Row>
        <Row>
            Mobiles <FontAwesomeIcon icon={faArrowRight}/>
        </Row>
        <Row>
            Fashion & Beauty <FontAwesomeIcon icon={faArrowRight}/>
        </Row>
        <Row>
            Furnitures <FontAwesomeIcon icon={faArrowRight}/>
        </Row>
        <Row>
            Property <FontAwesomeIcon icon={faArrowRight}/>
        </Row>
        <Row>
            Property <FontAwesomeIcon icon={faArrowRight}/>
        </Row>
        <Row>
            Property <FontAwesomeIcon icon={faArrowRight}/>
        </Row>
        <Row>
            Property<FontAwesomeIcon icon={faArrowRight}/>
        </Row>
        <Row>
            Property <FontAwesomeIcon icon={faArrowRight}/>
        </Row>
        
        </div>
   
        </div>);
}