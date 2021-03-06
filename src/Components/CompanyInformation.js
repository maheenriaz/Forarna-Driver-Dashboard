import React,{Component} from 'react';
import ReactDom from 'react-dom'
import '../App.css';
import browse from '../1.jpg';

class CompanyInformation extends Component {
  render(){ 
  return (
    <div className="App" >
    <div className="jumbotron" id="jumbotron">
    <center>
         <div className="col-md-12" id="company_registration">
        <h3>Company Registration</h3>
        <h2 id="forona_text"><b>Forarna for Employers</b></h2>

         </div>
     </center>



     <center>
           <div className="col-md-12" id="company_registration">
            <br></br> <br></br>
              <h2 id="forona_text"><b>Company Information</b></h2>
             <br></br>
               <button type="button" class="btn btn-primary" id="browse">Browse</button>
              
               <br></br> <br></br>
        <section>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                   
                            <div className="row align-items-center">
                                    <div className="col">
                                      <input type="text" className="form-control" placeholder="Company Name" />
                                    </div>
                                    <div className="col">
                                      <input type="Number" className="form-control" placeholder="Organization Number"/>
                                    </div>
                            </div>
                            <div className="row align-items-center mt-4">
                               <div className="col">
                                      <input type="Number" className="form-control" placeholder="Postal Code"/>
                                    </div>
                                    <div className="col">
                                      <input type="text" className="form-control" placeholder="City"/>
                                    </div>
                            </div>
                      <div className="row align-items-center mt-4">
                        <textarea type="text" className="form-control">
                          Company Address
                        </textarea>
                      </div>
                       <br></br><br></br><br></br>
                  </div>
                </div>   
              </div>
            </section>

         </div>
     </center>


     <center>
     <div className="col-sm-12" id="company_registration">
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

export default CompanyInformation;
