import React,{Component} from 'react';
import ReactDom from 'react-dom'
import '../App.css';
import browse from '../1.jpg';

class DriverEducation extends Component {
  reder(){ 
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
                     <p id="step">STEP 4 of 07</p>
                  </div>
                
               </div>    
             
     </center>



     <center>
           <div className="col-md-12" id="company_registration">
            <br></br> <br></br>
            
             
             <h2 id="forona_text"><b>Driver Eduation</b></h2> 
             <h3>I have trained in </h3>
               <br></br> <br></br>
        <section>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                   
                           <div className="container">
  <div className="row">
      <div className="col-sm-4 col-sm-offset-1" id="list_items_chkbox">
          <div className="list-group" id="list1">
          <a href="#" className="list-group-item" >YKB<input title="toggle all" type="checkbox" id="blue" className=" all pull-left"/></a>
          <a href="#" className="list-group-item">ADR-LOADS<input type="checkbox" className="pull-left"/></a>
          <a href="#" className="list-group-item">ADR-CLASS1<input type="checkbox" className="pull-left"/></a>
          <a href="#" className="list-group-item">ADR-CLASS7 <input type="checkbox" className="pull-left"/></a>
          <a href="#" className="list-group-item">ADR-TANK <input type="checkbox" className="pull-left"/></a>
            <a href="#" className="list-group-item">Certificate of EXcavator <input type="checkbox" className="pull-left"/></a>
        
          </div>
        </div>
       
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

export default DriverEducation;
