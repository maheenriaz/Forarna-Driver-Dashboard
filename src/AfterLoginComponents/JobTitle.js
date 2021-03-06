import React from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";

import '../App.css';
import Forarna from '../forarna.jpg';
import browser from '../1.jpg';
import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'


class JobTitle extends React.Component {
  constructor(){
    super()
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
render(){ 
    return (
      <div className="jumbotron">
       <div className="row" style={{backgroundColor:'white'}} >
    <div className="col-sm-8" >
    <div className="container">
     <div class="row">
        <div class="col-sm-9" ><h1 style={{fontSize:'38px',color:'#4EC2A4'}}>Job Title<span class="glyphicon glyphicon-ok-sign" style={{color:'lightgreen'}}></span></h1></div>
        <div class="col-sm-3" id="side_calender">
          <p style={{fontSize:'17px'}}>Permenant</p>
           <p style={{fontSize:'17px',marginTop:'-3px'}}><span class="glyphicon glyphicon-calendar" style={{fontSize:'15px'}}></span>Start Date</p>
          <p style={{fontSize:'17px'}}><span class="glyphicon glyphicon-calendar" style={{fontSize:'15px'}} ></span>End Date</p>
        </div>
      </div>
    </div>
    </div>
      </div>
           <div className="container-fluid" >
             <br></br><br></br>
              <div className="row">
                   <div className="col-sm-3"  id="side1" >
                   <br></br>
                      <h2 id="comp_details" className="txt">New</h2>
                      <hr></hr>
                         <h2 id="comp_details" className="txt">Shortlisted</h2>
                          <hr></hr>
                         <h2 id="comp_details" className="txt">Interview</h2>
                           <hr></hr>
                      
                     <NavLink to="#" style={{textDecoration:'none',color:'black'}} > <h2 id="comp_details" onClick={()=>{this.new()}}>Offered</h2></NavLink>
                   
                         <h2 >Hired</h2>
                    </div>
   <Modal show={this.state.show1} onHide={()=>this.new()} className="my-modal" >
          
          <Modal.Body style={{height:'500px'}}>
          <center>
            <br></br><br></br>  <br></br><br></br>  <br></br><br></br>
          <p style={{fontSize:'26px', color:'#2E52AB '}}>Do you want to handle the payments?</p>
            <br></br><br></br>
                  <label >
                    <input type="checkbox" style={{front:'Left'}} />
                    <span>Yes</span>
                  </label>
                  <br></br> <br></br>
                     <label >
                    <input type="checkbox" style={{front:'Left'}} />
                    <span>No</span>
                  </label>
                  <br></br><br></br>
                    <button className="btn btn-default" style={{backgroundColor:' #4EC2A4 '}} id="pop-button" onClick={()=>this.new2()} >Add</button> 
          </center>
          </Modal.Body>
            </Modal>
 <Modal show={this.state.show2} onHide={()=>this.new2()} className="my-modal" >
     
   <Modal.Body style={{height:'500px'}}>
          <center>
            <br></br><br></br>  <br></br><br></br>  <br></br><br></br>
           <br></br><br></br>
                  <div className="row align-items-center">
                          <div className="col">
                           <input type="Number" className="form-control" placeholder="Salary Per Hour" />
                             </div>
                  </div>
                  <div className="row align-items-center">
                          <div className="col">
                           <input type="Number" className="form-control" placeholder="Premium Compensation Per Hour" />
                             </div>
                  </div>
                    <p style={{fontSize:'26px', color:'#2E52AB '}}>Forarna Charges 1.82 to manage salaries of the employee</p>
         
                  <br></br><br></br>
                    <button className="btn btn-default" style={{backgroundColor:' #4EC2A4 '}} id="pop-button" onClick={()=>this.new2()} >Add</button> 
          </center>
          </Modal.Body>
            </Modal>




                    <div className="col-sm-9" style={{backgroundColor:'#e9ecef'}} >
                        <div className="row">
                          <div className="col-sm-12"  id="side2">
                                 <center>
                                    <form className="col-md-12" id="company_registration" style={{height:'700px'}}>
                                    <br></br> <br></br> <br></br>
                                           <div className="col s2 m6" id="card3">
                                                      <div className="card " style={{backgroundColor:'white'}}>
                                                          <div class="row">
                                                              <div class="col-sm-6" >
                                                              <div className="col-sm-2">
                                                                 <img src={browser} style={{height:'90px',width:'90px',marginTop:'3px'}}/>
                                                              </div>
                                                               <div className="col-sm-5">
                                                               <p>DriverName</p>
                                                              <p>City</p>
                                                              </div>
                                                             
                                                              </div>
                                                              <div class="col-sm-6" >
                                                                 <p><span class="glyphicon glyphicon-ok-envelope"></span>Chat</p>
                                                                   <div className="col-sm-12">
                                                                     <p style={{color:' #4EC2A4 '}}><b>Shortlist|Remove</b></p>
                                                                   </div>
                                                                    
                                                              </div>
                                                            </div>  
                                                         
                                                      </div>
                                                    </div>
                                                   
                                              <div className="col s2 m6" id="card4">
                                                      <div className="card " style={{backgroundColor:'white'}}>
                                                          <div class="row">
                                                              <div class="col-sm-6" >
                                                              <div className="col-sm-2">
                                                                 <img src={browser} style={{height:'90px',width:'90px',marginTop:'3px'}}/>
                                                              </div>
                                                               <div className="col-sm-5">
                                                               <p>DriverName</p>
                                                              <p>City</p>
                                                              </div>
                                                             
                                                              </div>
                                                              <div class="col-sm-6" >
                                                                 <p><span class="glyphicon glyphicon-ok-envelope"></span>Chat</p>
                                                                   <div className="col-sm-12">
                                                                     <p style={{color:' #4EC2A4 '}}><b>Shortlist|Remove</b></p>
                                                                   </div>
                                                                    
                                                              </div>
                                                            </div>  
                                                         
                                                      </div>
                                                    </div>
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





export default JobTitle;
