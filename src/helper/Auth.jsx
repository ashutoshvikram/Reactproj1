import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";
function Auth() {
  if (localStorage.getItem('name')){
    return true
  }
  else
  {
  return false
}
}
export const logout=()=>{
  
  if (Auth()===true){
    localStorage.clear();
    fetch('http://localhost:8000/api/logout')
    .then(res=>res.json())
    return true
  }
  else
  {console.log('nahi hai')
    return false
  }
  }

export default Auth; 

