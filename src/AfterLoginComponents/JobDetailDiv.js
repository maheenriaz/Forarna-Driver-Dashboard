import React from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";

import '../App.css';
import Forarna from '../forarna.jpg';
import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'

class JobDetailDiv extends React.Component {
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
                      <h2 id="comp_details" className="txt">Manage Jobs</h2>
                      <hr></hr>
                         <h2 id="comp_details" className="txt">Create Job</h2>
                          <hr></hr>
                          <h2 id="comp_details" className="txt">Job Calendar</h2>
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
         <form className="col-md-12" id="company_registration" style={{height:'570px'}}>
              <section>
                   <br></br> <br></br>
                        <div className="container">
                          <div className="row justify-content-center">
                               <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                                  <h1 id="forona_text" style={{fontSize:'30px'}}><b>Job Details</b></h1>
                                     <br></br> <br></br>
                                  <div className="row align-items-center">
                                       <div className="col">
                                          <input type="text" className="form-control" placeholder="Job Title" />
                                            </div>
                                            </div>
                                        <div className="row align-items-center mt-4">
                                              <div className="col">
                                               <input type="Number" className="form-control" placeholder="Address"/>
                                                 </div>
                                                <div className="col">
                                                   <input type="Email" className="form-control" placeholder="City"/>
                                                 </div>
                                         </div>
                                 
                                      <div className="row align-items-center mt-4">
                                   <div className="col">
                            <input type="password" className="form-control" placeholder="Postal Code"/>
                                 </div>
                                   
                                       </div>
<br></br>
                                       <div className="row align-items-center mt-4">
                                   <div className="col">
                                   <div class="col-xs-4 col-xs-offset-4" style={{marginTop:'-30px'}}>
                                      <div class="form">
                                        <select class="selectpicker form-control" >
                                            <option selected="selected" onchange={this.onchangeHandler}>Select Job Type</option>
                                            <option value= "hh">1</option>
                                            <option value= "hh">2</option>
                                            <option value= "hh">3</option>
                                        </select>
        
           
                                          </div>
                                        </div>
                                 </div>
                                   
                                       </div>

                                  <div className="row align-items-center mt-4">
                                      <div className="col">
                                       <input type="date" className="form-control" placeholder="Starting Date"/>
                                         </div>
                                          <div className="col">
                                           <input type="date" className="form-control" placeholder="Ending Date"/>
                                      </div>
                                         </div>
                                           <div className="row align-items-center mt-4">
                                             <div className="col">
                                            <textarea type="text" className="form-control" >
                                            Job Description
                                                   </textarea>
                                          </div>
                                                       
                                        </div>
                 </div>
              </div>   
                  </div>
           </section>
        </form>
     </center>
   </div>


 <center>
     <div className="col-sm-12" id="footer_job" >
     <br></br><br></br>
     <button type="button" class="btn btn-primary" id="register_submit" >Continue</button>
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





export default JobDetailDiv;
