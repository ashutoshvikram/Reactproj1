import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { withRouter } from "react-router-dom";
import Navgbar from '../Subcompo/Navgbar';
import Cards from '../Subcompo/Cards';
import Footer from '../Subcompo/Footer';

import {Row } from 'react-materialize'
import Sliders from '../Subcompo/Sliders';

class Home extends Component{
    constructor(){
        super();
        this.state={
            loading:true,
            items: [],
           
        };
    }
    async componentDidMount(){
        await fetch('http://avikrams.pythonanywhere.com/api')
        .then(res =>res.json())
        .then(
            result =>{
              console.error(result);
                this.setState({
                    loading :false,
                    items : result.items,
                    
                });
            
            }
        )
    
    }


    

    render() { 
        return(
            <div>
            <Navgbar/>
           <Sliders/>
            {this.state.loading?
            
            <iframe src="https://giphy.com/embed/3ohzdOrcdpiD26TPt6" width="100" height="100" frameBorder="0" class="giphy-embed"></iframe>
                :
            <Fragment>
                <h3>Recent Adds</h3>
           <Row>
           <Cards title="Redmi9 pro"
            date_post="20-APR-2020"
            id="4"
            price="4000/-"
            location="Gwalior"
            image="./download(1).jpg"/>
            <Cards title="Redmi 9 pro"
            date_post="20-APR-2020"
            id="4"
            price="8000/-"
            location="Gwalior"
            image="./download(1).jpg"/>
            <Cards title="Redmi9 pro"
            date_post="20-APR-2020"
            id="4"
            price="8000/-"
            location="Gwalior"
            image="./download(1).jpg"/>
            <Cards title="Redmi9 pro"
            date_post="20-APR-2020"
            id="4"
            price="8000/-"
            location="Gwalior"
            image="./download(1).jpg"/>
       
    </Row>
    
     
       </Fragment>
        }
        
    <Footer/>
    </div>
    );   
    }
}
 

export default withRouter(Home);
