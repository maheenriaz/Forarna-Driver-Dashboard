import React,{Component} from 'react';
import ReactDom from 'react-dom'
import '../App.css';
import browse from '../1.jpg';

class TermsAndConditions extends Component {
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
                     <p id="step">STEP 07 of 07</p>
                  </div>
                
               </div>          
     </center>



     <center>
           <div className="col-md-12" id="company_registration">
            <br></br> <br></br>
            
             
             <h2 id="company_regi" ><b>Terms And Conditions</b></h2> 
            <center>
            <p id="p-align">
                To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions related to our website and the use of this website. Nothing in this disclaimer will be:
               <ul id="ul-left">
                    <li >Limit or exclude our or your liability for death or personal injury </li>
                    <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation.</li>
                    <li>Limit any of your liability in any way that is not permitted under applicable law</li>
                    <li>exclude any of our or your liability that may not be exclude under applicable law.</li>
                  </ul>      
                   The limitations and prohibitions of liability set in this section and else where in this disclaimer: (a) are subject to the preceding paragraph, and (b)govern all liabilities arising under the disclaimer,
                   including liabilities arising in contract, in tort and for breach of statutory duty.
                   <br></br>
                   As long as the website and information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
            </p>
                 <label id="input2">
                    <input type="checkbox" />
                    <span>I Agree</span>
                  </label>

                 

            </center>

               <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                   
                      
                     
                     
                            
            </div>

     </center>


     <center>
     <div className="col-sm-12" id="fot-driver">
     <br></br><br></br>
     <button type="button" class="btn btn-primary" id="register_submit" >Register</button>
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

export default TermsAndConditions;
