import React, { Fragment } from "react";
import Reactdom from "react-dom";
import "../App.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter ,BrowserRouter as Router,useHistory,Redirect} from "react-router-dom";
import Message from "../helper/Message";
import Auth from "../helper/Auth";
import {logout} from '../helper/Auth'
import {
  Navbar,Toast,
  NavItem,
  Icon,
  TextInput,
  Modal,
  Button,
  Dropdown,
  Collapsible,
  CollapsibleItem,Col,Row
} from "react-materialize";
function Navgbar() {
  let history = useHistory();
  const search=(event)=>{
    console.log('in search')
  }
 return (
        <Navbar
        className="navibox"
        alignLinks="right"
        brand={
          <a className=" logolayout" href="#">
            <img
              src="https://images.cooltext.com/5404848.png"
              width="300px"
              height="50px"
              alt="logo"
            />
          </a>
        }
        id="mobile-nav"
        menuIcon={
         
           
            <FontAwesomeIcon icon={faBars} size='lg' />
          
        }
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
        sidenav={
         < div className="sidenave #e57373 red lighten-2">
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
            <Dropdown
  id="Dropdown_6"
  options={{
    alignment: 'left',
    autoTrigger: true,
    closeOnClick: true,
    constrainWidth: true,
    container: null,
    coverTrigger: true,
    hover: false,
    inDuration: 150,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 250
  }}
  trigger={<p>Location</p>}
>
  <Link to="location/Delhi">
    Delhi
  </Link>
  <Link to="location/Mumbai">
    Mumbai
  </Link>
  <Link to="location/Bangalore">
  Bangalore
  </Link>
  <Link to="location/Hyderabad">
  Hyderabad
  </Link>
  <Link to="location/Gwalior">
  Gwalior
  </Link>
 </Dropdown>
            </p>
            <p>
            <Dropdown
  id="Dropdown_6"
  options={{
    alignment: 'left',
    autoTrigger: true,
    closeOnClick: true,
    constrainWidth: true,
    container: null,
    coverTrigger: true,
    hover: false,
    inDuration: 150,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 250
  }}
  trigger={<p>Category</p>}
>
  <Link to="category/Automobiles">
    Automobiles
  </Link>
  <Link to="category/Mobiles">
    Mobiles
  </Link>
  <Link to="category/Electronics">
  Electronics
  </Link>
  <Link to="category/Furniture">
  Furniture
  </Link>
  <Link to="category/Property">
  Property
  </Link>
 </Dropdown>
            </p>

            <p>
              <Link to="/signup">Login</Link>
            </p>
            <p>
              <Link to="/signup">Ashutosh</Link>
            </p>
            <p>
              <Link to="/login">Login</Link>
            </p>
            </div>
        }
      >
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
        <Modal
  actions={[
    <Button flat modal="close" node="button" waves="green">Close</Button>
  ]}
  bottomSheet={false}
  fixedFooter={false}
  header="Location"
  id="Modal-0"
  open={false}
  options={{
    dismissible: true,
    endingTop: '4%',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    opacity: 0.5,
    outDuration: 250,
    preventScrolling: true,
    startingTop: '4%'
  }}
  
  trigger={<NavItem>Location</NavItem>}
>
 <Row>
   <Col l={4}>
     <ul  className="modalsize">
       <li><Link to="/location/Delhi" className="cardlink">Delhi</Link></li> 
       <li ><Link to="/location/Mumbai" className="cardlink">Mumbai</Link></li>
        <li ><Link to="/location/Bangalore" className="cardlink">Bangalore</Link></li>
         <li ><Link to="/location/Kolkata" className="cardlink">Kolkata</Link></li> 
     </ul>
   </Col>
   <Col l={4}>
     <ul className="modalsize">
       <li ><Link to="/location/Hyderabad" className="cardlink">Hyderabad</Link></li> 
       <li ><Link to="/location/Ahemdabad" className="cardlink">Ahemdabad</Link></li> 
       <li ><Link to="/location/Bhopal" className="cardlink">Bhopal</Link></li>
        <li ><Link to="/location/Lucknow" className="cardlink">Lucknow</Link></li> 
     </ul>
   </Col>
   <Col l={4}>
     <ul className="modalsize">
       <li> <Link to="/location/Chandigarh" className="cardlink">Chandigarh</Link></li> 
       <li ><Link to="/location/Gwalior" className="cardlink">Gwalior</Link></li>
        <li ><Link to="/location/Indore" className="cardlink">Indore</Link></li>
         <li ><Link to="/location/Pune" className="cardlink">Pune</Link></li> 
     </ul>
   </Col>
 </Row>
</Modal>
         
        </NavItem>
       
        <NavItem>
        <Modal
  actions={[
    <Button flat modal="close" node="button" waves="green">Close</Button>
  ]}
  bottomSheet={false}
  fixedFooter={false}
  header="Category"
  id="Modal-0"
  open={false}
  options={{
    dismissible: true,
    endingTop: '4%',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    opacity: 0.5,
    outDuration: 250,
    preventScrolling: true,
    startingTop: '4%'
  }}
  
  trigger={<NavItem>Category</NavItem>}
>
 <Row>
   <Col l={4}>
     <ul  className="modalsize">
       <li> <Link to="/category/Automobiles"  className="cardlink">Automobiles</Link></li> 
       <li><Link to="/category/Electronics" className="cardlink">Electronics</Link></li>
        <li><Link to="/category/Appliances" className="cardlink">Appliances</Link></li> 
        <li><Link to="/category/Fashion&Beauty" className="cardlink">Fashion</Link></li> 
     </ul>
   </Col>
   <Col l={4}>
     <ul className="modalsize">
       <li><Link to="/category/Furnitures" className="cardlink">Furnitures</Link></li>
        <li><Link to="/category/Property" className="cardlink">Property</Link></li>
         <li><Link to="/category/Books" className="cardlink">Books</Link></li>
         <li><Link to="/category/Mobiles" className="cardlink">Mobiles</Link></li> 
     </ul>
   </Col>
   <Col l={4}>
    and many more...
   </Col>
 </Row>
</Modal>
         
        </NavItem>
        
       {Auth()!==true?<NavItem>
          <Link to="/login">Login</Link>
        </NavItem>:
       <Fragment>
          <Dropdown
            id="Dropdown_5"
            options={{
              alignment: "left",
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              container: null,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,      
              onOpenStart: null,
              outDuration: 250
            }}
          trigger={<NavItem><Link to="add/car">Hi,{localStorage.getItem('name')}</Link></NavItem>}
          >
            <Link to="/favourites" className="cardlink">Favourites</Link>
            <Link to="/myadds" className="cardlink">My adds</Link>
            <Link to="/profile" className="cardlink">Profile</Link>
            
           
          </Dropdown>
          
          
          </Fragment>
}
 {Auth()?
  <NavItem><Toast className="toaster"
  options={{
    html: 'You have logged out successfully.....'
  }}
>
  <a  onClick={()=>{
              logout()
              history.push('/')

            }}
  >Logout</a>
</Toast></NavItem>:null
}         

  


        
        
       {Auth()?<NavItem>
          <Link to="/post">SELL</Link>
        </NavItem>:null} 
        <NavItem>
          <form action="/search" method='GET' >
            <input type="text" name="key" placeholder="Search"  />
           
          </form>
        </NavItem>
        
      </Navbar>
    

    );
  }

export default withRouter( Navgbar);
