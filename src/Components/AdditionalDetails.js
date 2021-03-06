import React,{Component} from 'react';
import ReactDom from 'react-dom'
import '../App.css';
import browse from '../1.jpg';

class AdditionalDetails extends Component {
  render() { 
  return (
    <div className="App"  >
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
                     <p id="step">STEP 6 of 07</p>
                  </div>
                
               </div>           
     </center>



     <center>
           <div className="col-md-12" id="company_registration">
            <br></br> <br></br>
            
             
             <h2 id="company_reg_admin" ><b>Additional Details</b></h2> 
            


<div className="dropdown multiselect" id="starting_button" >
      <button className="btn btn-default dropdown-toggle"  type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
       <p id="p-i"> Spoken And Written Language</p>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
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
<br></br> <br></br> 

 
                        <textarea type="text" className="form-control" id="text-area-additional" >
                          Company Address
                        </textarea>
                      

               <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                   
                      
                     
                     
                            
            </div>

     </center>


     <center>
     <div className="col-sm-12"  id="fot-driver">
     <br></br><br></br>
     <button type="button" class="btn btn-primary" id="register_submit" >Continue</button>
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

export default AdditionalDetails;
