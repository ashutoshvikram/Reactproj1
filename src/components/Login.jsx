import React, { Component, Fragment } from 'react';
import  '../index.css'
import Navgbar from '../Subcompo/Navgbar';
import Recaptcha from "react-recaptcha";
import {Link,Redirect,withRouter,BrowserRouter as Router} from 'react-router-dom';
import Auth  from '../helper/Auth';
import Message from '../helper/Message'
class Login extends Component {
    constructor(props) {
        console.log('in login');
        super(props);
        this.state = {
            email: "",
            password:"",
            success:false,
            error:false,
           captcha:false,
          }
          this.messages = this.messages.bind(this);
          this.verifyCallback = this.verifyCallback.bind(this);
    }
    
    handleChange(event,name){
        
        this.setState({
            [name]: event.target.value
        })
    }
    verifyCallback(response){
        if (response){
            
            this.setState({
                captcha:true
            })
        }
    }
    handleSubmit=event=>{
        event.preventDefault();
        



        const data={'email':this.state.email,'password':this.state.password,}
        console.log(data);
        fetch('https://buysellit.herokuapp.com/api/login',{
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include',
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json, text/plain, */*',
            }
        })
        
        .then(res=>res.json())
        .then(res=>{
            if (res.success===true)
            
            {console.log(res)
                localStorage.setItem('name',res.sname)
            this.setState({'success':true})
            
            }
            else
            {   console.log(res.success)
                this.setState({'error':true,'email': "",
                'password':"",})
                
                this.messages()
            }
        
        })
       
        
              
    }
    messages(){
        console.warn('in messages')
        return (
          <  Fragment>
            <Navgbar Group=""/>
           
           <div className="btn btn-primary">ashutosh</div>
           <Message mestype="alert-danger" mes="You have entered incorrect Email or Passsword"/>
           </Fragment>)
           
    }
    
    render() { 
       
         if (this.state.success===true && Auth()===true && this.state.captcha===true)
        {
           return (<Redirect to="/"/>);
            
        }
        

                return (
                <div>
            <Navgbar Group="" />
            {this.state.error===true?<Message mestype="alert-danger" mes="You have entered incorrect Email or Passsword"/>:null}
        <div className="mainlog">
        <div className="innerlog">
            <h2 className="loghead">Log in</h2>
            <form onSubmit={event=>this.handleSubmit(event)}   className="textbox">
                <input type="text" required className="usertext"name="name" placeholder="Enter email" onChange={(event)=>this.handleChange(event,"email")}/>
                <input type="password"  required className="usertext" name="password" placeholder="Enter password" onChange={(event)=>this.handleChange(event,"password")}/>
                <Recaptcha
    sitekey="6LdPPeUUAAAAABBcLc0s0AA01hbhcMEQggfqc8T_"
    render="explicit"
    verifyCallback={this.verifyCallback}
    // onloadCallback={thiscallback}
  />,
               
                <br/>
                <button type="submit" className="logbutton">LOGIN</button>
            </form>
            <p className="signline">Don't have an account <Link to="/signup" className="cardlink"> Signup</Link></p>
        </div>
        </div>
     
        </div>
           );
    }
}
 
export default withRouter(Login);