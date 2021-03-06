import React from 'react';
import ReactDom from 'react-dom'
import {browserHistory} from "react-router";

import '../App.css';
import Forarna from '../forarna.jpg';
import browser from '../1.jpg';
import {Link,NavLink} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'


class Driver extends React.Component {
    onNavigateHome() {
        this.props.history.push("/Driver");
    }
    onNavigateHome2() {
      this.props.history.push("/BookedDriver");
    }
    onNavigateHome3() {
      this.props.history.push("/TempPool");
    }
render(){ 
    return (
      <div className="jumbotron">
            <div className="jumbotron">
               <div className="container-fluid" >
                  <div className="row">
                     <div className="col-sm-3"  id="side1" >
                       <br></br>
                       <h2 id="comp_details" className="txt" onClick={this.onNavigateHome.bind(this)}>Manage Driver</h2>
                          <hr></hr>
                         <h2 id="comp_details" className="txt" onClick={this.onNavigateHome2.bind(this)}> Book Consultants</h2>
                          <hr></hr>
                          <h2 id="comp_details" className="txt" onClick={this.onNavigateHome3.bind(this)}> Temp Pool</h2>
                          <hr></hr>
                         
                     </div>
                     <div className="col-sm-9" >
                   <center>
                         <form className="col-md-12" id="driver-new" >
                         <br></br> <br></br>
                           <h1 id="driv-list" style={{fontSize:'30px'}}><b>Booked List</b></h1>
                                    <br></br> <br></br> <br></br>
                                           <div className="col s2 m6" id="card3">
                                                      <div className="card " style={{backgroundColor:'white'}}>
                                                          <div class="row">
                                                              <div class="col-sm-6" >
                                                              <div className="col-sm-2">
                                                                 <img src={browser} style={{height:'90px',width:'90px',marginTop:'3px'}}/>
                                                              </div>
                                                               <div className="col-sm-5"  id="d_name">
                                                               <p>DriverName <span class="glyphicon glyphicon-ok-sign" style={{color:'lightgreen'}}></span></p>
                                                              <p>City</p>
                                                              </div>
                                                             
                                                              </div>
                                                              <div class="col-sm-6" >
                                                               <div className="col-sm-12">
                                                                     <p style={{color:' #4EC2A4 '}}><b>TimeSheets|Calender|Edit|Delete</b></p>
                                                                   </div>
                                                                    
                                                              </div>
                                                            </div>  
                                                         
                                                      </div>
                                                    </div>
                                              <div className="col s2 m6" id="card3">
                                                      <div className="card " style={{backgroundColor:'white'}}>
                                                          <div class="row">
                                                              <div class="col-sm-6" >
                                                              <div className="col-sm-2">
                                                                 <img src={browser} style={{height:'90px',width:'90px',marginTop:'3px'}}/>
                                                              </div>
                                                               <div className="col-sm-5"  id="d_name">
                                                               <p>DriverName</p>
                                                              <p>City</p>
                                                              </div>
                                                             
                                                              </div>
                                                              <div class="col-sm-6" >
                                                                 
                                                                   <div className="col-sm-12">
                                                                     <p style={{color:' #4EC2A4 '}}><b>TimeSheets|Calender|Edit|Delete</b></p>
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
   

    );

}
}





export default Driver;
