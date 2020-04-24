import React from "react";
import Navgbar from "../Subcompo/Navgbar";
import { Col, Row } from "react-materialize";
import "../index.css";
import { useState } from "react";
import { useEffect } from "react";

function Myprofile() {
  const [values, setValues] = useState({
    profilepic: "",
    email:'',
    fName: "",
    lName: "",
    mobno: "",
    location: "",
    success: false,
    fsuccess: false,
  });
  const {
    profilepic,
    email,
    fName,
    lName,
    mobno,
    location,
    success,
    fsuccess,
  } = values;
  const handleChange = (event,name) => {
    const img = event.target.files[0];
    console.log(img)
    setValues({...values, profilepic: img });
    console.warn(profilepic)
  };



  async function fetching() {
    const response = await fetch("https://buysellit.herokuapp.com/api/profile", {
      method:'POST',
      credentials: "include",
    });
    const res = await response.json();
    console.log(res)
    setValues({
      ...values,
      email:res.userdetails[0].email,
      fName: res.userdetails[0].firstname,
      profilepic:res.userdetails[0].Profile_pic,
      lName: res.userdetails[0].lastname,
      mobno: res.userdetails[0].Mobno,
      location: res.userdetails[0].location,
      fsuccess: true,
    });
  }

  useEffect(() => {
    fetching();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    var formvalues = new FormData();
    formvalues.append("profilepix", profilepic);
    console.log(profilepic)
    fetch("http://localhost:8000/api/profilepic", {
      method: "POST",
      credentials: "include",
      body: formvalues,
    })
      .then((res) => res.json())
      .then((res) =>{
        setValues({...values,profilepic:res.userdetails[0].Profile_pic})
      });
  }

  return (
    <div>
      <Navgbar />
      <img
        src="https://cdn.pixabay.com/photo/2019/10/04/18/36/milky-way-4526277_960_720.jpg"
       
        alt=""
        height="300px"
        width="100%"
      />
      <Col l={6}  className="profilebox" style={{border:'2px solid black',marginLeft:'20%',marginRight:'20%'}}>
            <h2>Profile</h2>
            <img src={'http://localhost:8000'+profilepic}
             className="profilepic2"
            height='200' width='200' alt="" srcset=""/>
            <h6>Name:{fName+" "+lName}</h6><br/><br/>
  <h6>Email: {email}</h6><br/><br/>
  <h6>City: {location}</h6><br/><br/>
  <h6>Mob no: {mobno}</h6><br/><br/>
        <form action="" onSubmit={event => handleSubmit(event)} >
         <h6>Profile</h6>
          <label className="fileupload">
            +
            <input
              type="file"
              name="p_img"
              onChange={(event)=>{ handleChange(event,'profileimg')}}
            />
          </label>
          <button type="submit">Submit the file</button>
        </form>
      </Col>
      
    </div>
  );
}
export default Myprofile;
