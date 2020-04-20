import React, { Fragment } from "react";
import Reactdom from "react-dom";
import "../App.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter ,BrowserRouter as Router} from "react-router-dom";
import Message from "../helper/Message";
import Auth from "../helper/Auth";
import {
  Navbar,
  NavItem,
  Icon,
  TextInput,
  Modal,
  Button,
  Dropdown,
  Collapsible,
  CollapsibleItem,Col,Row
} from "react-materialize";
class Navgbar extends React.Component {
 
  render() {
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
         < Fragment>
            <h5>
              <Link to="/signup">Sign in</Link>
            </h5>
            <h5>
              <Link to="/login">Login</Link>
            </h5>
            </Fragment>
        }
      >
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        


        <NavItem>
          <Link to="/login">Login</Link>
        </NavItem>
        <NavItem>
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
        </NavItem>
        <NavItem>
          <form action="">
            <TextInput id="TextInput-4" placeholder="Search" />
          </form>
        </NavItem>
      </Navbar>
    

    );
  }
}
export default withRouter( Navgbar);
