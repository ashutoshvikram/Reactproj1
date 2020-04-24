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
        await fetch('https://buysellit.herokuapp.com/api')
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
          {this.state.items.map(item =>(
            <Cards title={item.Product_name}
            date_post={item.posted_on}
            id={item.id}
            price={item.Price+"/-"}
            location={item.Location}
            image={item.Image}/>
        

        ))
       
        }
    </Row>
    
     
       </Fragment>
        }
        
    <Footer/>
    </div>
    );   
    }
}
 

export default withRouter(Home);