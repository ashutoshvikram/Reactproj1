import React, { Component,useState,useEffect } from 'react';
import {Col,Row} from 'react-materialize'
import Navgbar from '../Subcompo/Navgbar';
import Footer from '../Subcompo/Footer'
import Addcategory from '../Subcompo/Addcategory'
import AddForm from './AddForm';

function PostAdd(){

    return ( <div>
        
        <Navgbar/>
        <Row>
        <Col l={4} s={12}>
        <Addcategory/>
        </Col>
        <Col l={8} s={12}>
       <h1>Please Select the category of Add</h1>
            </Col>
        </Row>
        <Row>
            <div className="newfooter">
        <Footer/>
        </div>
        </Row>
        </div>);
}
export default PostAdd;