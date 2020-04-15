import React from 'react';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faPhone,faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare,faTwitter,faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
 
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( <div className="footersa">
          
<footer className="page-footer font-small mdb-color lighten-3 pt-4">

  <div className="container text-center text-md-left">


    <div className="row">

      <div className="col-md-4 col-lg-3  col-sm-6 mr-auto my-md-4 my-0 mt-4 mb-1">

        
        <h5 className="font-weight-bold text-uppercase mb-4">Footer Content</h5>
        <p>Here you can use rows and columns to organize your footer content.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate
          esse
          quasi, veritatis totam voluptas nostrum.</p>

      </div>
     

      <hr className="clearfix w-100 d-md-none"/>

     
      <div className="col-md-2 col-lg-2 col-sm-6  mx-auto my-md-4 my-0 mt-4 mb-1">

        
        <h5 className="font-weight-bold text-uppercase mb-4">About</h5>

        <ul className="list-unstyled">
          <li>
            <p>
              <a href="#!">PROJECTS</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#!">ABOUT US</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#!">BLOG</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#!">AWARDS</a>
            </p>
          </li>
        </ul>

      </div>
      

      <hr className="clearfix w-100 d-md-none"/>

     
      <div className="col-md-4 col-lg-3 col-sm-6 mx-auto my-md-4 my-0 mt-4 mb-1">

        <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>

        <ul className="list-unstyled">
          <li>
            <p>
            <FontAwesomeIcon icon={faHome} className="logofb" />New York, NY 10012, US</p>
          </li>
          <li>
            <p>
            <FontAwesomeIcon icon={faEnvelopeSquare} className="logofb" /> info@example.com</p>
          </li>
          <li>
            <p>
            <FontAwesomeIcon icon={faPhone} className="logofb" /> + 01 234 567 88</p>
          </li>
          
        </ul>

      </div>
      

      <hr className="clearfix w-100 d-md-none"/>

    
      <div className="col-md-2 col-lg-2 text-center mx-auto my-4">

        
        <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>

      
        <a type="button" className="btn-floating btn-fb " >
        <FontAwesomeIcon icon={faFacebookSquare} className="logofb" />
         </a>
        <br/>
        <a type="button" className="btn-floating btn-tw">
        <FontAwesomeIcon icon={faTwitter} className="logofb" />
        </a>
        <br/>
        <a type="button" className="btn-floating btn-gplus">
        <FontAwesomeIcon icon={faInstagramSquare} className="logofb" />
        </a>

      </div>
      

    </div>
    

  </div>
  
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
   
  </div>
  

</footer>
</div>
    );
    }
}
 export default Footer;
