import React, { Fragment } from 'react';
import Reactdom from 'react-dom';
import '../App.css';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faBars} from '@fortawesome/free-solid-svg-icons'
import {Link,withRouter} from 'react-router-dom';
import Message from '../helper/Message'
import Auth from '../helper/Auth'
import {Navbar,NavItem,Icon,TextInput} from 'react-materialize';
class Navgbar extends React.Component{
  render (){
    return(
      <Navbar
      className="navibox" 
      alignLinks="right"
      brand={
        <a className=" logolayout" href="#">
          <img src="/n1logo.png" />
        </a>
      }
      id="mobile-nav"
      menuIcon={<Icon> <FontAwesomeIcon icon={faBars} /></Icon>}
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
        <NavItem>
          <h3>Custom node!</h3>
        </NavItem>
      }
    >
      
      <NavItem >Home</NavItem>
      <NavItem >Location</NavItem>
      <NavItem >Categories</NavItem>
      <NavItem ><Link to="/login">Login</Link></NavItem>
  
        <NavItem>
        <form action="">
        <TextInput
  id="TextInput-4"
  placeholder="Search"
/>
      
         </form>
          </NavItem>
      
    </Navbar>
    );
  }
}

export default Navgbar; 





















// old
// class Navbar extends React.Component{
//     render(){
//         return(
//             <div >
//               <div className={this.props.Group}>
//             <nav className="navbar navbar-reverse navbar-expand-lg navibox">
//   <a className="navbar-brand" href="#"><span className="logostyle"><img src="/newlog.png" width="200px"/></span></a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//   <img src="/grid.png" alt="" srcset="" height="30px" width="30px"/>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto navbox ">
//       <li className="nav-item active ">
//         <Link to="/" className="nav-link text-white font-weight-bolder">Home</Link> <span className="sr-only">(current)</span>
//       </li>
//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle text-white font-weight-bolder" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Location
//         </a>
//       {/* for Location */}
//         <div className="jumbotron jumbotron-fluid dropdown-menu" aria-labelledby="navbarDropdown">
//   <div class="container-fluid jumbo">
//   <h4 className="headloc"><Link to="/location/Gwalior">Location</Link></h4>
//   <div className="row">
//     <div className="col-lg-6 rowloc">
//     <ul className="lead lo"><li>Delhi</li><li>Pune</li><li>Bangalore</li><li>Mumbai</li><li>Hyderabad</li></ul>
//     </div>
//     <div className="col-lg-6 rowloc">
//     <ul className="lead lo"><li>Kolkata</li><li>Gwalior</li><li>Bhopal</li><li>Indore</li><li>Ahemdabad</li></ul>
//     </div>
//   </div>
// </div>
// </div>
// </li>
//      {/* for Categories */}
//      <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle text-white font-weight-bolder" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//       Categories
//         </a>
//       {/* for Location */}
//         <div className="jumbotron jumbotron-fluid dropdown-menu" aria-labelledby="navbarDropdown2">
//   <div class="container-fluid jumbo">
//   <h4 className="headloc">  <Link to="/category/Automobile">Categories</Link></h4>
//   <div className="row">
//     <div className="col-lg-6 rowloc">
//     <ul className="lead lo"><li>Automobiles</li><li>Household</li><li>Mobile phones</li><li>Property</li></ul>
//     </div>
//     <div className="col-lg-6 rowloc">
//     <ul className="lead lo"><li>Laptops</li><li>Furniture</li><li>Electrical appliances</li><li>Electronics</li></ul>
//     </div>
//   </div>
// </div>
// </div>
// </li>
//       <li className="nav-item">
//         <Link to="/contactus" className="nav-link text-white font-weight-bolder">Contactus</Link>
//       </li>
//      {Auth()!==true ?
//       <Fragment>
//       <li className="nav-item">
//         <Link to="/login" className="nav-link text-white font-weight-bolder">Login</Link>
//       </li>
//       </Fragment>
//       :
//       <Fragment>
// <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle text-white font-weight-bolder" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Hi {localStorage.getItem('name')}
//         </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
//           <Link className="dropdown-item font-weight-bolder" to="/addpost">My Profile</Link>
//           <a className="dropdown-item font-weight-bolder" href="#">My Adds</a>
//           {/* <div className="dropdown-divider"></div> */}
//           <a className="dropdown-item font-weight-bolder" href="#">Favourites</a>
//         </div>
//       </li>
    
//       <li className="nav-item text-white font-weight-bolder">
//         <Link className="nav-link text-white font-weight-bolder" href="#" tabIndex="-1" 
//         onClick=
//         { event=>{ localStorage.clear();
//         this.props.history.push('/')
//         document.getElementById('mes').style.display="";
//         fetch('http://localhost:8000/api/logout',{credentials:'include'}).then(res=>res.json()).then(res=>console.log(res.message))
//         }}>Logout</Link>
//       </li>
//       </Fragment>
//     }
//     </ul>
//     <form className="form-inline my-2 my-lg-0">
//       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//       <button className="btn btn-outline-success my-2 my-sm-0 text-white font-weight-bolder" type="submit">Search</button>
//     </form>
//   </div>
// </nav>
// <div className="alert alert-success alert-dismissible fade show" role="alert" style={{display:'none'}} id="mes">
//   <strong>Hey User!</strong>You have logged out sucessfully..
//   <button type="button" className="close" data-dismiss="alert" aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//   </button>
// </div>
//         <div className="textonimg text-center">{this.props.tag}</div>
// </div>


//         </div>  )

//     }

// };
// export default withRouter(Navbar)