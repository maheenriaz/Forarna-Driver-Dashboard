import React from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";

import '../App.css';
import Forarna from '../forarna.jpg';
import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'

class JobDetailDiv2 extends React.Component {
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
                      <h2 id="comp_details" className="txt">Head Hunter</h2>
                      <hr></hr>
                         <h2 id="comp_details" className="txt"> Manage Job</h2>
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
                      <NavLink to="#">     <button className="btn btn-default" onClick={()=>this.new()} style={{backgroundColor:' #4EC2A4 ',width:'200px'}} id="pop-button" onClick={()=>this.new()} >Basic Job</button></NavLink> 
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
         <form className="col-md-12" id="company_registration" style={{height:'500px'}}>
              <section>
                   <br></br> <br></br>
                        <div className="container">
                          <div className="row justify-content-center">
                               <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                                 <div className="col-md-12" id="frona-white">
                                          <div className="col-sm-12">
                                            <h3>Job Details</h3>
                                          </div>
                                       <div className="col-sm-12">
                                         <p id="step">STEP 1  of 02</p>
                                          </div>
                                        
                                       </div>
                                       <center>
                                       <div className="dropdown multiselect" id="edu_jobs" >
                                              <button className="btn btn-default dropdown-toggle"  type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                               Education
                                              </button>
                                              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                              <li><a>
                                                <input type="checkbox" id="action1" />
                                                <label for="action1">Urdu</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action2"/>
                                                <label for="action2">English</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action3"/>
                                                <label for="action3">Action</label>
                                              </a></li>
                                              </ul>
                                        </div>
                                      
                                        <div className="dropdown multiselect" id="Education_job" >
                                              <button className="btn btn-default dropdown-toggle"  type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                               Level of experience
                                              </button>
                                              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                              <li><a>
                                                <input type="checkbox" id="action1" />
                                                <label for="action1">Urdu</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action2"/>
                                                <label for="action2">English</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action3"/>
                                                <label for="action3">Action</label>
                                              </a></li>
                                              </ul>
                                        </div>

                                         <div className="dropdown multiselect" id="Education_job" >
                                              <button className="btn btn-default dropdown-toggle"  type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                              List of experience
                                              </button>
                                              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                              <li><a>
                                                <input type="checkbox" id="action1" />
                                                <label for="action1">Urdu</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action2"/>
                                                <label for="action2">English</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action3"/>
                                                <label for="action3">Action</label>
                                              </a></li>
                                              </ul>
                                        </div>


                                         <div className="dropdown multiselect" id="Education_job" >
                                              <button className="btn btn-default dropdown-toggle"  type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                               Language
                                              </button>
                                              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                              <li><a>
                                                <input type="checkbox" id="action1" />
                                                <label for="action1">Urdu</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action2"/>
                                                <label for="action2">English</label>
                                              </a></li>
                                              <li><a>
                                                <input type="checkbox" id="action3"/>
                                                <label for="action3">Action</label>
                                              </a></li>
                                              </ul>
                                        </div>
                                     </center>

                               </div>
                          </div>   
                        </div>
               </section>
         </form>
        </center>
 </div>




 <center>
     <div className="col-sm-12" id="new-footer"  >
     <br></br><br></br>
     <div class="row">
    <div class="col-sm-12" >
      <div class="row">
        <div class="col-sm-4" ><button type="button" class="btn" style={{backgroundColor:'grey',color:'white'}} id="share_fb">Back</button></div>
        <div class="col-sm-4" ><button type="button" class="btn btn-primary" id="share_fb">Share on Facebook</button></div>
            <div class="col-sm-4"><button type="button" class="btn btn-info" id="share_fb">Publish</button></div>
      </div>
    </div>
   </div>

     <br></br><br></br>
 <br></br><br></br><br></br>
     </div>

     </center>







                      </div>
                </div>







                    </div>
                 
                </div>
         </div>
   

    );

}
}





export default JobDetailDiv2;
