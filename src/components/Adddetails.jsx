import React, { Component,useState,useEffect } from 'react';
import Carousel_add from '../Subcompo/Carousel_add';
import Footer from '../Subcompo/Footer'
import {Row,Col,Button,Toast} from 'react-materialize'
 import "react-responsive-carousel/lib/styles/carousel.min.css";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {faShareAlt,faMapMarkerAlt, faPhoneAlt,faMapMarker} from '@fortawesome/free-solid-svg-icons'
import Navgbar from '../Subcompo/Navgbar'

const Adddetails=(props)=>{
const [values,setValues]=useState({id:'',proname:'',desc:'',
                                success:false,img:[],
                                price:'',sellername:'',postedon:'',location:''
                                ,memberdt:'',profileimg:''})
const { id,proname, desc, success,img, price, sellername,postedon,location,memberdt,profileimg } = values;
async function apifetch(){
    console.error("chala")
    const response= await fetch(`https://buysellit.herokuapp.com/api/post/${props.match.params.id}`,
    {credentials:'include'})
    const res=await response.json()
    console.log(res);
    setValues({...values,id:res.items.id,proname:res.items.Product_name,sucess:true,
        desc:res.items.Description, location:res.items.Location,
        postedon:res.items.posted_on,   memberdt:res.seller.registered_on,
        img:res.productimage[0],
        sellername:res.seller.firstname+res.seller.lastname,
        profileimg:res.seller.Profile_pic,  price:res.items.Price
    })

}
useEffect(()=>{
    apifetch()
},[]);

const contactseller=(event)=>{
    fetch(`http://localhost:8000/api/contactseller/${id}`)
}

const locate=location;
console.log(locate)
const urls=`https://www.google.com/maps/embed/v1/place?key=AIzaSyCfF-k0ecpBaGMWRzb43xcKRYENxX9IkxY&q=${locate}`


return (
    <div>
<Navgbar/>
<Row>

<Col s={12} l={8}>
    
    <Carousel_add proimages={img}/>

</Col>
<Col s={12} l={4} className="details" >
    <p className="price">&#8377;{price}&ensp;&ensp; <FontAwesomeIcon icon={faShareAlt} className="logofb"/> </p>
<p className="addtitle">{proname}</p>
    <Row className="addloc" >
    <Col s={6} className="addlocin">
<p><FontAwesomeIcon icon={faMapMarkerAlt}/>{location}</p>
    </Col>
    <Col s={6}>
    <p className="addlocin">{postedon}</p>
    </Col>
    </Row>  
</Col>
<Col s={12} l={4} className="details" >
    <img className="profilepic" src={"http://localhost:8000"+profileimg} alt="seller" srcset=""/><p className="namedetail">{sellername}</p>
    
    <Row className="addloc" >
    <Col s={6} className="addlocin">

    </Col>
    <Toast className="toaster"
  options={{
    html: 'Email sent to seller.Seller will contact you soon...'
  }}
>
  <a style={{fontSize:'20px'}}  onClick={event=>contactseller(event)}>
  CONTACT SELLER &ensp;&ensp;<FontAwesomeIcon icon={faPhoneAlt}/></a>
</Toast>
   
<p>Member since {memberdt}</p>
    </Row>  
</Col>
</Row>
<Row>
<Col s={12} l={8} className="descrip">
<h4>DESCRIPTION</h4>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    oribus harum cumque animi provident nam inventore eveniet ni
     si saepe quas, a odio eos atque repudiandae. Illo veniam, al
     ias laboriosam quidem, sint labore, officiis dolores rem duc
     imus blanditiis sed quos dolorem dolor delectus quia voluptatum dolorum 
     nobis. Eligendi quidem aperiam veniam maiores at velit aspernatur nesciu
     nt quaerat! Consectetur quae illum non laborum dolor explicabo nam nostrum 
     magni beatae, atque et culpa tempora omnis eaque iusto repudiandae
     illo enim dolores? Aperiam ullam iusto cumque, atque dolor blanditiis
      quo in temporibus.</p>
</Col>

<Col s={12} l={4} className="mapdiv">
    <h4>POSTED IN</h4>
    <iframe
            width="430"
            height="500"
            frameborder="0"
            src={urls}
            
            allowfullscreen
          ></iframe>
</Col>



</Row>
<Footer/>
</div>);
}
export default Adddetails;
