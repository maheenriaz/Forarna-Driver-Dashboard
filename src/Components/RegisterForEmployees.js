import React,{Component} from 'react';
import ReactDom from 'react-dom'
import '../App.css';
import browse from '../1.jpg';

class RegisterForEmployees extends Component {
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
                  </div>
                
               </div>    
     </center>



     <center>
           <div className="col-md-12" id="company_registration">
            <br></br> <br></br>
              <h2 id="forona_text"><b>Personal Information</b></h2>
             <br></br>
               <button type="button" class="btn btn-primary" id="browse">Browse</button>
              
               <br></br> <br></br>
                  <section>
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                             
                                      <div className="row align-items-center">
                                              <div className="col">
                                                <input type="text" className="form-control" placeholder="First Name" />
                                              </div>
                                              <div className="col">
                                                <input type="text" className="form-control" placeholder="Last Name"/>
                                              </div>
                                      </div>
                                      <div className="row align-items-center mt-4">
                                         <div className="col">
                                                <input type="Number" className="form-control" placeholder="Phone Number"/>
                                              </div>
                                              <div className="col">
                                                <input type="Email" className="form-control" placeholder="Email"/>
                                              </div>
                                      </div>
                                <div className="row align-items-center mt-4">
                                  <div className="col">
                                    <input type="password" className="form-control" placeholder="Password"/>
                                  </div>
                                  <div className="col">
                                    <input type="password" className="form-control" placeholder="Confirm Password"/>
                                  </div>
                                </div>
                                 <br></br><br></br><br></br>
                            </div>
                          </div>   
                        </div>
                      </section>


       </div>
     </center>


   










     <center>
     <div className="col-sm-12" id="fot-driver">
     <br></br><br></br>
     <button type="button" className="btn btn-primary" id="register_submit" >Next</button>
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
export default RegisterForEmployees;
