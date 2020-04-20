import React from 'react';
import Reactdom from 'react-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { Row, Card, Col, CardTitle, Icon } from "react-materialize";

function Cards(props) {
  return (
    <Col m={4} s={6} l={3}>
      <Card
        className="card medium border"
        closeIcon={<Icon>close</Icon>}
        header={
          <CardTitle
            image={"http://localhost:8000"+props.image}
            reveal
            waves="light"
          />
        }
        reveal={
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        }
        revealIcon={<Icon>:</Icon>}
        title={props.price}
      >
        <p>
        {props.title}
        </p>
        <Row>
          <Col s={6}>
        <h6><FontAwesomeIcon icon={faMapMarkerAlt} size="sm"/>{props.location} </h6>
        </Col>
        <Col s={6}>
         <h6>{props.date_post}</h6>
        </Col>
        </Row>
      </Card>
    </Col>
  );
 }
//  older
// class Cardsa extends React.Component{
    
    
//     render(){
        
  
//         return(
           
//             <div className=" col-lg-4 col-sm-6 rowcard">
//                 <div className="border">
//              <img className="imagecard"width="300px" height="200px" src={"http://localhost:8000"+this.props.image} 
//              alt="this is an ice pic"/>
             
//           <h5 className="card-title"><div className="cardprice">&#8377;{this.props.price} </div></h5>
//           <h6 className="text-uppercase cardprod"><Link to={"add/?id="+this.props.id}>{this.props.title}</Link></h6>
         
//          <div className="container cardloc">

//              <div className="row">
//        <h6 className="text-uppercase locda col-lg-6 col-sm-6"><FontAwesomeIcon icon={faMapMarkerAlt} size="sm"/>{this.props.location} </h6>
//         <h6 className="col-lg-6 locdate col-sm-6">{this.props.date_post}</h6>
//         </div>
//            </div>
//            </div>
//            </div>
        
//           )
        
    
//     }
// };
export default Cards;