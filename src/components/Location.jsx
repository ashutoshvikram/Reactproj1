import React, { Component } from 'react';
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
        
        fetch(`http://localhost:8000/api/location?loc=${match.params.name}`)
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
            <div className="container">
                <h1>Location</h1>
            <div className="row rowcon ">
        
        {this.state.items.map(item =>(
            <Cards title={item.Product_name}
            date_post={item.posted_on}
            price={item.Price+"/-"}
            location={item.Location}
            image={item.Image}/>
        

        ))
       
    }
    
     </div>
        </div>
        }
        
    <Footer/>
    </div>
         );
          
    }
}
 
export default Category;