import React, { Component,useState,useEffect } from 'react';
import Navgbar from '../Subcompo/Navgbar';
import '../index.css'
import Footer from '../Subcompo/Footer'
import { Row,Col } from 'react-materialize';
export default function AddForm(props){
   
    const [values,setValues]=useState({ 
                    id:'',names:[],
                                        success:''
                                        ,p_name:'',
                                         p_price:'',
                                      p_description:'',
                                      p_location:''
                                    ,p_img:[],p_category:''
                                                })
    const {id,names,success,p_name,p_price,p_description,p_location,p_img,p_category}    =   values
    const handleChange=(event,name)=>{
        
        if (name!="p_img"){
            
            setValues({...values,[name]:event.target.value});
          
            
        }
        else
        {
            const images = event.target.files
            setValues({...values,names:names.concat(images[0].name),
                p_img:p_img.concat(images[0]),p_category:"Computer"})
           
            console.log(values.success,"as")
            console.log('image uplloaded')
            console.log(p_img)
           
        }
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        var formvalues=new FormData()
        var formimages=new FormData()
        formvalues.append('p_name',p_name)
        formvalues.append('p_price',p_price)
        formvalues.append(' p_description' ,p_description)
        formvalues.append('p_location',p_location)
        formvalues.append('p_category',props.cat)
        for (var x = 0; x < p_img.length; x++) {
            formimages.append('Product_images'+x,p_img[x])
            
         }
        const nextfetch=(newid)=>{
          
            formimages.append('Product_id',newid)
            fetch('https://buysellit.herokuapp.com/api/postadd',{
            credentials:'include',
            method: "POST",
            body: formimages,
            redirect:"follow",
            
        }).then(res=>console.log(res.json()))
        return true;
    }
        fetch('https://buysellit.herokuapp.com/api/postadd/id',{
            credentials:'include',
            method: "POST",
            body: formvalues,
            redirect:"follow",
            
        }).then(res=>res.json()).then(res=>{
            console.log(res.id)
            
          setValues({...values,id:res.id})
          nextfetch(res.id)
        })

        
       
         
        
        console.log(formimages)
        
        
        
      
    }
    

   return(
   <div>
    
    
    <div >
    <h3 >POST YOUR ADD</h3>
        <h5>Category:{props.cat}</h5>
        <Col l={6}  s={6} className="formcol">
    <form action="" onSubmit={event => handleSubmit(event)}>
        <h5>Product name</h5>
        <input  type="text"  name="p_name"  onChange={(event)=>handleChange(event,'p_name')} />
        <h5>Price</h5>
        <input  type="text"   name="p_price"  onChange={(event)=>handleChange(event,'p_price')}/>
        
        
        <h5 >Description</h5>        
        <input className="innerformtext" type="text"    name="p_price"  onChange={(event)=>handleChange(event,'p_description')}/>
        
        <h5 >Location</h5>
        <input className="innerformtext" type="text"   name="p_loc" onChange={(event)=>handleChange(event,'p_location')}/>
        
       
        <h5 >Images</h5>
        {values.names.map((items)=>{
           return( <div>
                <h6 style={{fontSize:'10px'}}>{items}</h6>
            </div>);
        })}
        <Row>
        <Col l={3} s={6}>
        <label className="fileupload">+
        <input type="file" name="p_img" 
         id="inputform5" onChange={(event)=>handleChange(event,'p_img')}/>
        </label>
</Col>
<Col l={3} s={6}>
        <label className="fileupload">+
        <input type="file"  name="p_img" 
         id="inputform5" onChange={(event)=>handleChange(event,'p_img')}/>
        </label>
        </Col>
        <Col l={3} s={6}>
        <label className="fileupload">+
        <input type="file"  name="p_img" 
         id="inputform5" onChange={(event)=>handleChange(event,'p_img')}/>
        </label>
        </Col>
        <Col l={3} s={6}>
        <label className="fileupload">+
        <input type="file"  name="p_img" 
         id="inputform5" onChange={(event)=>handleChange(event,'p_img')}/>
        </label>
        </Col>
        </Row>
        <Row>
        <Col l={3} s={6}>
        <label className="fileupload">+
        <input type="file"  name="p_img" 
         id="inputform5" onChange={(event)=>handleChange(event,'p_img')}/>
        </label>
        </Col>
        <Col l={3} s={6}>
        <label className="fileupload">+
        <input type="file"  name="p_img" 
         id="inputform5" onChange={(event)=>handleChange(event,'p_img')}/>
        </label>
        </Col>
        <Col l={3} s={6}>
        <label className="fileupload">+
        <input type="file"  name="p_img" 
         id="inputform5" onChange={(event)=>handleChange(event,'p_img')}/>
        </label>
        </Col>
        <Col l={3} s={6}>
        <label className="fileupload">+
        <input type="file"  name="p_img" 
         id="inputform5" onChange={(event)=>handleChange(event,'p_img')}/>
        </label>
        </Col>
        </Row>
        
        <button type="submit"className="postaddbutton">POST ADD</button>
        
    </form>
    </Col>
    </div>
   
    </div>
    ) ;
}