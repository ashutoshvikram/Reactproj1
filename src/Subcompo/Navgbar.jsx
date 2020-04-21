import React, { Fragment } from "react";
import Reactdom from "react-dom";
import "../App.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter ,BrowserRouter as Router,useHistory} from "react-router-dom";
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
          <Icon>
            {" "}
            <FontAwesomeIcon icon={faBars} />
          </Icon>
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
              <Link to="/signup">Home</Link>
            </p>
            <p>
              <Link to="/signup">Location</Link>
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
  <a href="#">
    one
  </a>
  <a href="#">
    two
  </a>
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
          <Link to="/">Location</Link>
        </NavItem>
       
        <NavItem>
          <Link to="">Category</Link>
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
            trigger={<NavItem><Link to="add/car">Hi,Ashutosh</Link></NavItem>}
          >
            <a href="#">My Favourites</a>
            <a href="#">My adds</a>
            <a href="#">My Profilel</a>
           
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
          <form action="">
            <TextInput id="TextInput-4" placeholder="Search" />
          </form>
        </NavItem>
      </Navbar>
    

    );
  }

export default withRouter( Navgbar);
