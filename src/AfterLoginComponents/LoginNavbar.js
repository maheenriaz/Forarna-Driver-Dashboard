import React from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";
import cartoon from '../cartoon.jpg';
import '../App.css';
import Forarna from '../forarna.jpg';
import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'

class Navbar extends React.Component {
 
render(){ 
    return (
      <div>
     
      <nav id="nav-iop" className="navbar-fixed"  id="nav-border" >
        <div className="container-fluid">
                <div className="nav-wrapper" >
                      <a href="#!" className="brand-logo" style={{color:'black'}}><img src={Forarna} width="170px" height="55px" /></a>   

                      <a className="sidenav-trigger" style={{color:'black'}} data-target="mobile-link"><i href="#" className="material-icons">Menu</i></a>
                    
                       <ul id="nav-mobile" className="left hide-on-med-and-down" style={{marginLeft:'180px'}}>
                           <li><NavLink to="/CompanyDetails" id="nav-text">
                          <span className="glyphicon glyphicon-time"></span>
                          <b>Profile</b></NavLink>
                          </li>
                           <li><NavLink to="/Jobs" id="nav-text"><span className="glyphicon glyphicon-lock"></span><b>Jobs</b></NavLink></li>
                          <li><NavLink to="/Driver" id="nav-text"><span className="glyphicon glyphicon-user"></span><b>Drivers</b></NavLink></li>
                          <li><NavLink to="#" id="nav-text"><span className="glyphicon glyphicon-user"></span><b>Employees</b></NavLink></li>
                          <h3 className="right hide-on-med-and-down">hello</h3>
                          
                           
                       </ul>
                       
                 </div>
       </div>
    </nav>
       <ul className="sidenav"  id="mobile-link"  >
           <li><NavLink to="/" id="nav-text"><b>Profile</b></NavLink></li>
           
                         <li><NavLink to="/Jobs" id="nav-text"><b>Jobs</b></NavLink></li>
                        <li><NavLink to="/Driver" id="nav-text"><b>Drivers</b></NavLink></li>
                        <li><NavLink to="#" id="nav-text"><b>Employees</b></NavLink></li>
         </ul>


    </div>

    );

}
}





export default Navbar;
