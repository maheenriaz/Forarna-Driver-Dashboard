import React from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";

import '../App.css';
import Forarna from '../forarna.jpg';
import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'

class Jobs extends React.Component {
  onNavigateHome() {
    this.props.history.push("/Jobs");
}
onNavigateHome1() {
  this.props.history.push("/JobDiv");
}
onNavigateHome4() {
  this.props.history.push("/JobDetailDiv");
}
    constructor(){
    super()
    this.state={
      show:false
    }
     
  }
  new(){
    this.setState({show1: !this.state.show1})
  }
render(){ 
    return (
      <div className="jumbotron">
           <div className="container-fluid" >
              <div className="row">
                   <div className="col-sm-3"  id="side1" >
                   <br></br>
                      <h2 id="comp_details" className="txt" onClick={this.onNavigateHome.bind(this)}>Head Hunter</h2>
                      <hr></hr>
                         <h2 id="comp_details" className="txt" onClick={this.onNavigateHome1.bind(this)}>Manage Job</h2>
                          <hr></hr>
          <NavLink to="#" style={{textDecoration:'none',color:'black'}}><h2 id="comp_details"  onClick={()=>{this.new()}}>Create A Job</h2></NavLink>
                 
                    </div>
 <Modal  show={this.state.show1} onHide={()=>this.new()} className="my-modal" >
   <Modal.Body style={{height:'500px'}}>
          <center>
            <br></br><br></br>  <br></br><br></br>  <br></br><br></br>
           <br></br><br></br>
                 <p style={{fontSize:'26px', color:'#2E52AB '}}>Click the following</p>
         <br></br><br></br>
                  <div class="row">
                      <div class="col-sm-6" >
                      <NavLink to="#"><button className="btn btn-default" onClick={()=>{this.new(); this.onNavigateHome4.bind(this);}} style={{backgroundColor:' #4EC2A4 ',width:'200px'}} id="pop-button" >Basic Job</button></NavLink> 
                     </div>
                  <div class="col-sm-6" >
     <button className="btn btn-default" style={{backgroundColor:' #4EC2A4 ',width:'200px'}} id="pop-button" onClick={()=>this.new()} >All Inclusive</button> 
                  </div>
                  
                    </div>
              
                  <br></br><br></br>
                       </center>
          </Modal.Body>
            </Modal>




        <div className="col-sm-9" style={{backgroundColor:'#e9ecef'}} >
           <div className="row">
                <div className="col-sm-12"  id="side2">
                    <center>
                          <form className="col-md-12" id="company_registration" style={{height:'700px'}} >
                               <br></br> <br></br>
                               <br></br>
                                <h2 id="forona_text"><b>Buy User Profiles</b></h2>
                                    <br></br> <br></br>
                                     <center>
                                       <div className="col s2 m6" style={{width:'400px'}} id="one_month">
                                            <div className="card " style={{backgroundColor:'#e9ecef'}}>
                                               <div className="card-content black-text">
                                                 <span className="card-title" style={{color:'#4EC2A4'}}><b>One Month Subscription</b></span>
                                                  <p>9995 / One Time</p>
                                                    </div>
                                                     <div className="card-action">
                                                      <button type="button" className="btn btn-primary" id="browse">Buy Now</button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                   <div className="col s2 m6" style={{width:'400px'}} id="card2">
                                                      <div className="card " style={{backgroundColor:'#e9ecef'}}>
                                                          <div className="card-content black-text">
                                                            <span className="card-title" style={{color:'#4EC2A4'}}><b>One Year Subscription</b></span>
                                                            <p>2995 / Per Month</p>
                                                          </div>
                                                          <div className="card-action">
                                                              <button type="button" className="btn btn-primary" id="browse">Buy Now</button>
                                                          </div>
                                                      </div>
                                                    </div>
                                               </center>   
                                         </form>
                         </center>
                   </div>





















                      </div>
                </div>







                    </div>
                 
                </div>
         </div>
   

    );

}
}





export default Jobs;
