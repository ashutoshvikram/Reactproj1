import React, { Component,Fragment } from 'react';
import {Row} from 'react-materialize'
import Navgbar from '../Subcompo/Navgbar';
import Cards from '../Subcompo/Cards';
import Footer from '../Subcompo/Footer';
import '../index.css';
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
        
        fetch(`https://buysellit.herokuapp.com/api/category?cat=${match.params.name}`)
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
            
            <iframe src="https://giphy.com/embed/3ohzdOrcdpiD26TPt6" width="100" height="100" frameBorder="0" class="giphy-embed"></iframe>
                :
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
 
export default Category;