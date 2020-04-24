import React, { Component ,Fragment} from 'react';

import {Row} from 'react-materialize';
import Navgbar from '../Subcompo/Navgbar';
import Cards from '../Subcompo/Cards';
import Footer from '../Subcompo/Footer';
import '../App.css';
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: true,
            items:[]
            
         }
    }
    componentDidMount() {
        const { match} = this.props;
        
        fetch(`https://buysellit.herokuapp.com/api/location?loc=${match.params.name}`)
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
            {this.state.loading?
            <Fragment>
             <h3>Location:{this.props.match.params.name}</h3>
            <iframe src="https://giphy.com/embed/MDrmyLuEV8XFOe7lU6" width="300" height="300" frameBorder="0" class="giphy-embed"></iframe>
            </Fragment>:
                <Fragment>
               
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
 
export default Category;