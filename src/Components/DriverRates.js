import React,{Component} from 'react';
import ReactDom from 'react-dom'
import '../App.css';
import browse from '../1.jpg';

class DriverRates extends Component {
  render(){ 
  return (
    <div className="App" >
    <div className="jumbotron" id="jumbotron">
    <center>
               <div className="col-md-12" id="company_registration">
               
              <h3 id="driver_reg"  style={{marginLeft:'-400px'}}>Company Registration</h3>
              <h2 id="forona" style={{marginLeft:'-400px'}}><b>Forona for Drivers</b></h2>
               </div>         
     </center>



     <center>
           <div className="col-md-12" id="company_registration">
            <br></br> <br></br>
            
             
             <h2 id="company_reg" ><b>Invoicing Information</b></h2> 
            
               <button type="button" class="btn btn-default" id="rumuneration"><b>Invoicing Email</b></button><br></br>
 <button type="button" class="btn btn-default" id="rumuneration"><b>Invoicing Label</b></button>

               <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                   
                      
                     
                     
                            
            </div>

     </center>


     <center>
     <div className="col-sm-12" id="company_registration">
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
export default DriverRates;
