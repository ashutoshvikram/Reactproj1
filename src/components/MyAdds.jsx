import React, { Component,Fragment } from 'react';

import {Row} from 'react-materialize';
import Navgbar from '../Subcompo/Navgbar';
import Cards from '../Subcompo/Cards';
import Footer from '../Subcompo/Footer';
import '../App.css';
class MyAdds extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: true,
            items:[]
            
         }
    }
    componentDidMount() {
        const { match} = this.props;
        
        fetch('https://buysellit.herokuapp.com/api/myadds')
        .then(res =>(res.json()))
        .then(result =>{
            this.setState({
              loading:false,
              items:result.items  
            });

        })
    }
    render() { 
        return (
            <div>
            <Navgbar Group=""/>
            {this.state.isloaded?
            <Fragment>
            <h3>My Adds:{this.props.match.params.name}</h3>
           <img src="https://giphy.com/embed/MDrmyLuEV8XFOe7lU6" width="200" height="200" />
           </Fragment>  :
                <Fragment>
                <h3>My Adds</h3>
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
 
export default MyAdds;