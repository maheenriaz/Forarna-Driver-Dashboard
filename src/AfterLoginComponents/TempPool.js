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
                         <form className="col-md-12" id="company_registration" style={{height:'700px'}}>
                         <br></br> <br></br>
                           <h1 id="forona_text" style={{fontSize:'30px'}}><b>Drivers List</b></h1>
                                    <br></br> <br></br> <br></br>
                                    <div className="container">
                                          <br/>
                                          <input type="date" style={{width:'160px'}} placeholder="select date"  /> 
                                          <span className="glyphicon glyphicon-calendar"></span>
                                    </div>
 <br></br> <br></br> 
                                  <div class="container">
  <div class="row">
    <div class="col-xs-12">
      <div class="table-responsive">
        <table summary="This table shows how to create responsive tables using Bootstrap's default functionality" class="table table-bordered table-hover">
          <caption class="text-center">An example of a responsive table based on <a href="#" target="_blank">Bootstrap</a>:</caption>
          <thead>
            <tr>
              <th>Country</th>
              <th>Languages</th>
              <th>Population</th>
              <th>Median Age</th>
              <th>Area (Km²)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Argentina</td>
              <td>Spanish (official), English, Italian, German, French</td>
              <td>41,803,125</td>
              <td>31.3</td>
              <td>2,780,387</td>
            </tr>
            <tr>
              <td>Australia</td>
              <td>English 79%, native and other languages</td>
              <td>23,630,169</td>
              <td>37.3</td>
              <td>7,739,983</td>
            </tr>
            <tr>
              <td>Greece</td>
              <td>Greek 99% (official), English, French</td>
              <td>11,128,404</td>
              <td>43.2</td>
              <td>131,956</td>
            </tr>
            <tr>
              <td>Luxembourg</td>
              <td>Luxermbourgish (national) French, German (both administrative)</td>
              <td>536,761</td>
              <td>39.1</td>
              <td>2,586</td>
            </tr>
            <tr>
              <td>Russia</td>
              <td>Russian, others</td>
              <td>142,467,651</td>
              <td>38.4</td>
              <td>17,076,310</td>
            </tr>
            <tr>
              <td>Sweden</td>
              <td>Swedish, small Sami- and Finnish-speaking minorities</td>
              <td>9,631,261</td>
              <td>41.1</td>
              <td>449,954</td>
            </tr>
          </tbody>
          
        </table>
      </div>
    </div>
  </div>
</div>
  












<div className="col-sm-7">
<div className="col-sm-1">
  <span class="glyphicon glyphicon-plus-sign" style={{fontSize:'24px'}} ></span>                                      
     </div>
     <div className="col-sm-2">
     <h2>Add Row</h2>   
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
