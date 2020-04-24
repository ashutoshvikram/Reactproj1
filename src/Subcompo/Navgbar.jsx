import React, { Fragment, useState } from "react";
import Reactdom from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../App.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Link,
  withRouter,
  BrowserRouter as Router,
  useHistory,
  Redirect
} from "react-router-dom";
import Message from "../helper/Message";
import Auth from "../helper/Auth";
import { logout } from "../helper/Auth";
import {
  Navbar,
  Toast,
  NavItem,
  Icon,
  TextInput,
  Button,
  Dropdown,
  Collapsible,
  CollapsibleItem,
  Col,
  Row
} from "react-materialize";
function Navgbar() {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };
  let history = useHistory();
  const search = event => {
    console.log("in search");
  };
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
      menuIcon={<FontAwesomeIcon icon={faBars} size="lg" />}
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
        <div className="sidenave #e57373 red lighten-2">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Dropdown
              id="Dropdown_6"
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
              trigger={<p>Location</p>}
            >
              <Link to="location/Delhi">Delhi</Link>
              <Link to="location/Mumbai">Mumbai</Link>
              <Link to="location/Bangalore">Bangalore</Link>
              <Link to="location/Hyderabad">Hyderabad</Link>
              <Link to="location/Gwalior">Gwalior</Link>
            </Dropdown>
          </p>
          <p>
            <Dropdown
              id="Dropdown_6"
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
              trigger={<p>Category</p>}
            >
              <Link to="category/Automobiles">Automobiles</Link>
              <Link to="category/Mobiles">Mobiles</Link>
              <Link to="category/Electronics">Electronics</Link>
              <Link to="category/Furniture">Furniture</Link>
              <Link to="category/Property">Property</Link>
            </Dropdown>
          </p>

          <p>
            <Link to="/login">Login</Link>
          </p>
          <p>
            <Link to="/post">Sell</Link>
          </p>
          <p>
            <Link to="/login">About us</Link>
          </p>
        </div>
      }
    >
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem onClick={onOpenModal}>Location</NavItem>
      <Modal open={open} onClose={onCloseModal}>
        <Row>
          <Col l={4}>
            <ul className="modalsize">
              <li>
                <Link to="/location/Delhi" className="cardlink">
                  Delhi
                </Link>
              </li>
              <li>
                <Link to="/location/Mumbai" className="cardlink">
                  Mumbai
                </Link>
              </li>
              <li>
                <Link to="/location/Bangalore" className="cardlink">
                  Bangalore
                </Link>
              </li>
              <li>
                <Link to="/location/Kolkata" className="cardlink">
                  Kolkata
                </Link>
              </li>
            </ul>
          </Col>
          <Col l={4}>
            <ul className="modalsize">
              <li>
                <Link to="/location/Hyderabad" className="cardlink">
                  Hyderabad
                </Link>
              </li>
              <li>
                <Link to="/location/Ahemdabad" className="cardlink">
                  Ahemdabad
                </Link>
              </li>
              <li>
                <Link to="/location/Bhopal" className="cardlink">
                  Bhopal
                </Link>
              </li>
              <li>
                <Link to="/location/Lucknow" className="cardlink">
                  Lucknow
                </Link>
              </li>
            </ul>
          </Col>
          <Col l={4}>
            <ul className="modalsize">
              <li>
                {" "}
                <Link to="/location/Chandigarh" className="cardlink">
                  Chandigarh
                </Link>
              </li>
              <li>
                <Link to="/location/Gwalior" className="cardlink">
                  Gwalior
                </Link>
              </li>
              <li>
                <Link to="/location/Indore" className="cardlink">
                  Indore
                </Link>
              </li>
              <li>
                <Link to="/location/Pune" className="cardlink">
                  Pune
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Modal>

      <NavItem>
        <NavItem onClick={onOpenModal}>Categories</NavItem>
        <Modal open={open} onClose={onCloseModal}>
          <Row>
            <Col l={4}>
              <ul className="modalsize">
                <li>
                  {" "}
                  <Link to="/category/Automobiles" className="cardlink">
                    Automobiles
                  </Link>
                </li>
                <li>
                  <Link to="/category/Electronics" className="cardlink">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link to="/category/Appliances" className="cardlink">
                    Appliances
                  </Link>
                </li>
                <li>
                  <Link to="/category/Fashion&Beauty" className="cardlink">
                    Fashion
                  </Link>
                </li>
              </ul>
            </Col>
            <Col l={4}>
              <ul className="modalsize">
                <li>
                  <Link to="/category/Furnitures" className="cardlink">
                    Furnitures
                  </Link>
                </li>
                <li>
                  <Link to="/category/Property" className="cardlink">
                    Property
                  </Link>
                </li>
                <li>
                  <Link to="/category/Books" className="cardlink">
                    Books
                  </Link>
                </li>
                <li>
                  <Link to="/category/Mobiles" className="cardlink">
                    Mobiles
                  </Link>
                </li>
              </ul>
            </Col>
            <Col l={4}>and many more...</Col>
          </Row>
        </Modal>
      </NavItem>
      <NavItem>
         <Link to="/post">SELL</Link>
       </NavItem>
       <NavItem>
         <Link to="/aboutus">About us</Link>
       </NavItem>
      {Auth() !== true ? (
        <Fragment>
        <NavItem>
          <Link to="/login">Login</Link>
        </NavItem>
         
       </Fragment>
      ) : (
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
            trigger={
              <NavItem>
                <Link to="add/car">Hi,{localStorage.getItem("name")}</Link>
              </NavItem>
            }
          >
            <Link to="/favourites" className="cardlink">
              Favourites
            </Link>
            <Link to="/myadds" className="cardlink">
              My adds
            </Link>
            <Link to="/profile" className="cardlink">
              Profile
            </Link>
          </Dropdown>
        </Fragment>
      )}
      {Auth() ? (
        <NavItem>
          <Toast
            className="toaster"
            options={{
              html: "You have logged out successfully....."
            }}
          >
            <a
              onClick={() => {
                logout();
                history.push("/");
              }}
            >
              Logout
            </a>
          </Toast>
        </NavItem>
      ) : null}

      {Auth() ? (
        <NavItem>
          <Link to="/post">SELL</Link>
        </NavItem>
      ) : null}
      <NavItem>
        <form action="/search" method="GET">
          <input type="text" name="key" placeholder="Search" />
        </form>
      </NavItem>
    </Navbar>
  );
}

export default withRouter(Navgbar);
