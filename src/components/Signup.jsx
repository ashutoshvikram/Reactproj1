import React, { Component,Fragment } from 'react';
import  '../index.css'
import Navgbar from '../Subcompo/Navgbar';
import {Link, Redirect,withRouter} from 'react-router-dom';
import {Row,Col,Container} from 'react-materialize'
import Message from '../helper/Message'
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
            firstname:'',
            lastname:'',
            location:'',
            mobno:'',
            email: "",
            password:"",
            success:"",
            error:false
            
          }
    }
    
    handleChange(event,name){
        this.setState({
            [name]: event.target.value
        })
    }
    handleSubmit=event=>{
        event.preventDefault();
        const data={'email':this.state.email,'password':this.state.password,
         'firstname':this.state.firstname,'lastname':this.state.lastname,'location':this.state.location,
         'mobno':this.state.mobno}
        console.log(data);
        fetch('http://localhost:8000/api/signup',{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json, text/plain, */*'
            }
        })
        .then(res=>res.json())
        
        .then((res)=>{
           
            if (res.success== true)
            {
                   this.setState({'success':true,})
                
                }
            else
            {   this.setState({'error':true})
             
        
            }
        })
              
    }
    
    render() {      
        if (this.state.success===true)
        {
         return  ( <Redirect to="/login"/>)
        }
         return (<div>
            <Navgbar Group=""/>
       {this.state.error==true?<Message mestype="alert-danger" mes="You have already registered Please Login"/>:null}
       
        <div className="mainlog">
        <div className="innersign">
            <h2 className="loghead">Sign up</h2>
            <form onSubmit={event=>this.handleSubmit(event)}  className="textboxsign">
                <Container>
                <Row>
               <Col s={6}>
                <label >First name</label>
                <input type="text" className="usertext" required placeholder="Enter First name" onChange={(event)=>this.handleChange(event,"firstname")}/>
                </Col>
                <Col s={6}>
                <label >Last name</label>
                <input type="text" className="usertext" placeholder="Enter Last name" onChange={(event)=>this.handleChange(event,"lastname")}/>
                </Col>
                </Row>
                <Row>
                <Col s={6}>
                <label >Email</label>
                <input type="text" className="usertext" required placeholder="Enter email" onChange={(event)=>this.handleChange(event,"email")}/>
                </Col>
                <Col s={6}>
                <label >Password</label>
                <input type="password" className="usertext"  required name="password" placeholder="Enter password" onChange={(event)=>this.handleChange(event,"password")}/>
                </Col>
                </Row>
                <Row>
                <Col s={6}>
            
                <label >Location</label>
                <input type="text" className="usertext" placeholder="Enter your city" onChange={(event)=>this.handleChange(event,"location")}/>
                </Col>
                <Col s={6}>
                <label >Mobile no.</label>
                <input type="text" className="usertext" required placeholder="Enter Mobile no." onChange={(event)=>this.handleChange(event,"mobno")}/>
                </Col>
                </Row>
                <Col s={6}>
                <button type="submit" className="logbutton" style={{'margin-left':'200px'}}>SUBMIT</button>
            </Col>
            </Container>
            </form>
            <p className="signline">Already have an account <Link to="/login">Login</Link></p>
        </div>
        </div> 
        </div> );
    }
}
 
export default withRouter( Signup);