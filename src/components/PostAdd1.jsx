import React, { Component,useState,useEffect } from 'react';
import {Col,Row,Footer} from 'react-materialize'
import Navgbar from '../Subcompo/Navgbar';

import Addcategory from '../Subcompo/Addcategory'
import AddForm from './AddForm';

function PostAdd1(props){

    return ( <div>
        
        <Navgbar/>
        <Row>
        <Col l={4}>
        <Addcategory/>
        </Col>
        <Col l={8}>
       <AddForm cat={props.match.params.category}/>
            </Col>
        </Row>
        
        </div>);
}
export default PostAdd1;