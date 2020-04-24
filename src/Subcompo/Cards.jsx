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
        className="card small border rowcard"
        closeIcon={<Icon>close</Icon>}
        header={
          <CardTitle
            image={'https://buysellit.herokuapp.com/api'+props.image}
            reveal
            waves="light"
          />
        }
        reveal={
          <p>
            Here is some more information about this product that is only
          .
          </p>
        }
        revealIcon={<Icon>:</Icon>}
        title={<Link className="cardlink" to={"/add/"+props.title+"/"+props.id}>{props.price}</Link>}
      >
        <p>
        <Link  className="cardlink" to={"/add/"+props.title+"/"+props.id}>{props.title}</Link>
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

export default Cards;