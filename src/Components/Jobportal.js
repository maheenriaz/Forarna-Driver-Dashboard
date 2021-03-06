import React,{Component} from 'react';
import ReactDom from 'react-dom'
import '../App.css';

class JobPortal extends Component {
  render(){
  return (
    <div className="App">
    <br></br>  <br></br>  <br></br>  <br></br>
<div className="container"  >
 <center> 
 <h3 id="most-reliable">MOST RELIABLE</h3>
 <h1 id="job-portal">Search Your Dream Job</h1>
  </center>
 <div className="col-md-4"id="first-div" >
 <h2><b>what</b></h2>
 <p>job title,keywords or company name</p>
  <form className="navbar-form" role="search">
    <div className="input-group add-on">
      <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" style={{width:'300px',height:'45px'}} />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  </form>
  </div>
   <div className="col-md-4" id="first-div">
<h2><b>where</b></h2>
 <p>city,code or postal code</p>
  <form className="navbar-form" role="search">
    <div className="input-group add-on">
      <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" style={{width:'300px',height:'45px'}} />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  </form>
  </div>
   <div className="col-md-4" id="first-div">
 <button type="button" className="btn btn-primary" id="search-for-job">Search for a job</button>
  </div>

</div>
<br></br>
<div className="container">
 <center>  
  <div className="col-md-4" id="post-job">
   <button type="button" className="btn btn-info" id="post-a-job">Post a Job</button>
    </div>
    <div className="col-md-8">
    <h1>-Your Next Recuritment is here</h1>
    </div>
    </center>
</div>

<hr></hr>

<div className="container">
    <center>
        <div className="col-sm-12">
       <h2 id="popular_search">Popular Searches</h2>
       <br></br><br></br>
        </div>
    </center>

        <div className="col-sm-2">
     <button type="button" className="btn btn-secondary" id="warehouse">Warehouse</button>
      </div>
        <div className="col-sm-2">
         <button type="button" className="btn btn-secondary"  id="warehouse">Warehouse</button>
      </div>
        <div className="col-sm-2">
        <button type="button" className="btn btn-secondary"  id="warehouse">Warehouse</button>
      </div>
        <div className="col-sm-2">
         <button type="button" className="btn btn-secondary"  id="warehouse">Warehouse</button>
      </div>
       <div className="col-sm-2">
         <button type="button" className="btn btn-secondary"  id="warehouse">Warehouse</button>
      </div>
       <div className="col-sm-2">
         <button type="button" className="btn btn-secondary"  id="warehouse">Warehouse</button>
      </div>
</div>



<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>


  );
}
}

export default JobPortal;
