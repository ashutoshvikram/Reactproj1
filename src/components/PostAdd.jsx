import React, { Component,useState,useEffect } from 'react';
import Navgbar from '../Subcompo/Navgbar';
import Footer from '../Subcompo/Footer'
import Addcategory from '../Subcompo/Addcategory'
import AddForm from './AddForm';

function PostAdd(){

    return ( <div>
        
        <Navgbar/>
    
        <Addcategory/>
    
        </div>);
}
export default PostAdd;