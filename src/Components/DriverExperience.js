import React,{Component} from 'react';
import ReactDom from 'react-dom'
import '../App.css';
import browse from '../1.jpg';

class DriverExperience extends Component {
  render(){ 
  return (
    <div className="App" >
    <div className="jumbotron" id="jumbotron">
    <center>
              <div className="col-md-12" id="frona-white">
                  <div className="col-sm-12">
                    <h3>Driver Registration</h3>
                  </div>
                    
               <div className="col-sm-12">
                    <center><h2 style={{fontSize:'35px'}}>Forarna For Driver</h2></center>
                  </div>
                   <div className="col-sm-12">
                     <p id="step">STEP 5 of 07</p>
                  </div>
                
               </div>        
     </center>



     <center>
           <div className="col-md-12" id="company_registration">
            <br></br> <br></br>
            
             <div className="col-sm-12"> 
              <h2><b>Driver Experience</b></h2> 
             <h3>I have experience in </h3>
             </div>
           
               <br></br> <br></br>
                <div className="col-sm-12"> 
                <label id="input1">
                    <input type="checkbox" />
                    <span>Van</span>
                  </label>
                  </div>
                     <div className="col-sm-12"> 
                      <p id="p1">Experience:  <span className="glyphicon glyphicon-minus-sign " id="glyphicon-color" ></span>  0 Year <span id="glyphicon-c" className="glyphicon glyphicon-plus-sign"></span></p>
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                             
                                 <div className="row align-items-center" >
                                              <div className="col">
                                                <input type="password" className="form-control" placeholder="Name Of Company" id="input-width" />
                                              </div>
                                 </div>
                                 <div className="row align-items-center">
                                              <div className="col">
                                                <input type="password" className="form-control" placeholder="Reference Email" id="input-width" />
                                              </div>
                                 </div>
                                 <br></br> <br></br>
                              </div>
                            </div>
                        </div>

                    <label id="input1">
                    <input type="checkbox" />
                    <span>Truck</span>
                  </label>
                      <p id="p1">Experience:  <span className="glyphicon glyphicon-minus-sign " id="glyphicon-color" ></span>  0 Year <span id="glyphicon-c" className="glyphicon glyphicon-plus-sign"></span></p>
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                             
                                 <div className="row align-items-center" >
                                              <div className="col">
                                                <input type="password" className="form-control" placeholder="Name Of Company" id="input-width" />
                                              </div>
                                 </div>
                                 <div className="row align-items-center">
                                              <div className="col">
                                                <input type="password" className="form-control" placeholder="Reference Email" id="input-width" />
                                              </div>
                                 </div>
                                 <br></br> <br></br>
                              </div>
                            </div>
                        </div>
                   <h3 style={{marginTop:'-40px' }}> <span className="glyphicon glyphicon-plus-sign" style={{marginLeft:'-450px'}}></span>Add Row </h3>
                      </div>       
            </div>
     </center>



     <center>
     <div className="col-sm-12" id="fot-driver">
     <br></br><br></br>
     <button type="button" className="btn btn-primary" id="register_submit" >Continue</button>
     <br></br><br></br>
 <br></br><br></br><br></br>
     </div>

     </center>
 <br></br>
     </div>
    </div>


  );
}

}
export default DriverExperience;
