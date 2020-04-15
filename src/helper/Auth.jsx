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
export default Auth; 

