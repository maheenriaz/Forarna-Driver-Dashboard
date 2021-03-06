import React from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";

import '../App.css';
import Forarna from '../forarna.jpg';
import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'
import JobPortal from './Jobportal.js'
class Navbar extends React.Component {
  constructor(){
    super()
    this.state={
      show:false
    }
      this.state={
      show1:false
    }
     this.state={
      show2:false
    }
  }
  new(){
    this.setState({show1: !this.state.show1})
  }
   new2(){
    this.setState({show2: !this.state.show2})
  }
   handleModal(){
    this.setState({show: !this.state.show})
  }
 
render(){ 
    return (
      <div>
     
      <nav id="nav-iop" className="navbar-fixed"  id="nav-border" >
        <div className="container-fluid">
                <div class="nav-wrapper" >
                      <a href="#!" class="brand-logo" style={{color:'black'}}><img src={Forarna} width="170px" height="55px" /></a>   

                      <a className="sidenav-trigger" style={{color:'black'}} data-target="mobile-link"><i href="#" className="material-icons">Menu</i></a>
                    
                     <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><NavLink to="/" id="nav-text"><b>HOME</b></NavLink></li>
                         <li><NavLink to="#" id="nav-text"><b>FEATURE</b></NavLink></li>
                        <li><NavLink to="#" id="nav-text"><b>PRICING</b></NavLink></li>
                        <li><NavLink to="#" id="nav-text"><b>FAQ</b></NavLink></li>
                       <li><NavLink to="/Signup"><button className="btn btn-default"  id="nav-button" onClick={()=>{this.handleModal()}} > <b>SIGNUP </b></button></NavLink></li>
                         <li><NavLink to="/"  ><button className="btn btn-default" onClick={()=>{this.new()}}  id="nav-button" ><b>Login</b></button></NavLink></li>
                     </ul>
                 </div>
       </div>
    </nav>
       <ul className="sidenav"  id="mobile-link"  >
           <li><NavLink to="/" id="nav-text"><b>HOME</b></NavLink></li>
           
                         <li><NavLink to="#" id="nav-text"><b>FEATURE</b></NavLink></li>
                        <li><NavLink to="#" id="nav-text"><b>PRICING</b></NavLink></li>
                        <li><NavLink to="#" id="nav-text"><b>FAQA</b></NavLink></li>
                           <li><NavLink to="/Signup"><button className="btn btn-default"  id="nav-button"> <b>SIGNUP </b></button></NavLink></li>
                         <li><NavLink to=""><button className="btn btn-default"  id="nav-button"><b>LOGIN </b></button></NavLink></li>
        </ul>

        <Modal show={this.state.show1} onHide={()=>this.new()} className="my-modal" >
          
          <Modal.Body style={{height:'500px'}}>
          <center>
            <img src={Forarna} />
            <h1 style={{fontSize:'60px', color:'#2E52AB '}}>LOGIN</h1>
            <br></br><br></br>
        <button className="btn btn-default" id="pop-button" active onClick={()=>{this.new2()}}>Business</button>
        <br></br><br></br>
            <button className="btn btn-default" id="pop-button" onClick={()=>this.new2()} >User</button> 
          </center>
          </Modal.Body>
            </Modal>
          <Modal show={this.state.show2} onHide={()=>this.new2()} className="my-modal" >
               <Modal.Body style={{height:'500px'}}>
                    <center>
                      <img src={Forarna} />
                      <h1 style={{fontSize:'60px', color:'#2E52AB '}}>LOGIN</h1>
                      <br></br><br></br>
                 <input className="form-control" type="text" placeholder="Username" />
                  <br></br><br></br>
                 <input className="form-control" type="text"   placeholder="Password" />
                    <br></br><br></br>
                         <button className="btn btn-default" id="pop-button"  >Login</button> 
     
                    </center>
              </Modal.Body>
        </Modal>
          <Modal show={this.state.show} onHide={()=>this.handleModal()} className="my-modal" >
                <Modal.Body style={{height:'500px'}}>
                    <center>
                      <img src={Forarna} />
                      <h1 style={{fontSize:'60px', color:'#2E52AB '}}>REGISTER</h1>
                      <br></br><br></br>
               <NavLink to="/RegisterForEmployees"><button className="btn btn-default" id="pop-button" active>Business</button>
               </NavLink>
                  <br></br><br></br>
                  <NavLink to="/RegisterForDriver"><button className="btn btn-default" id="pop-button" onClick={()=>this.handleModal()} >User</button> </NavLink>
                    </center>
                </Modal.Body>      
        </Modal>

     </div>

    );

}
}





export default Navbar;
