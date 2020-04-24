import React from 'react';
import './App.css';

import Home from './components/Home';
import {BrowserRouter as Router,Route,Switch,withRouter} from  'react-router-dom';
import Contactus from './components/Contactus';
import Category from './components/Category';
import Location from './components/Location';
import Login from './components/Login';
import Signup from './components/Signup'
import PostAdd from './components/PostAdd'
import Adddetails from './components/Adddetails';
import PrivateRoute from './helper/PrivateRoute'
import Navgbar from './Subcompo/Navgbar';
import AddForm from './components/AddForm';
import PostAdd1 from './components/PostAdd1';
import Aboutus from './components/Aboutus'
import MyAdds from './components/MyAdds';
import Myprofile from './components/Myprofile'
function App(){
  return (
    <Router>
     <Switch>
    <Route path="/" exact component={withRouter(Home)}/>
    <Route path="/contactus" exact component={Contactus}/>
    <Route path="/add/:name/:id" exact component={Adddetails} />
    <Route path="/category/:name" exact component={Category}/>
    <Route path="/location/:name" exact component={Location}/>
    <Route path="/add/:name/:id" exact component={Adddetails}/>
    <Route path="/login" exact component={withRouter(Login)}/>
    <Route path="/signup" exact component={Signup}/>
    <Route path="/post" exact component={PostAdd}/>
    <Route path="/post/:category" exact component={PostAdd1}/>
    <Route path="/aboutus" exact component={Aboutus}/>
    <Route path="/myadds" exact component={MyAdds}/>
    <Route path="/profile" exact component={Myprofile}/>
    </Switch>
    </Router>

  );
};

export default App;
